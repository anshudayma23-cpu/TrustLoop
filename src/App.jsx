import { useState, useEffect, useCallback, useRef } from 'react';
import { queries } from './data';
import './index.css';

const SCREEN_LABELS = [
  '1. Chat',
  '2. Detecting',
  '3. Assumptions',
  '4. Editing',
  '5. Answer',
  '6. TrustLoop',
  '7. Expanded',
  '8. Edge Case',
];

const SCREEN_DESCRIPTIONS = {
  1: 'Screen 1 — Chat interface',
  2: 'Screen 2 — TrustLoop detecting',
  3: 'Screen 3 — Assumption Contract',
  4: 'Screen 4 — Editing assumption',
  5: "Screen 5 — Claude's answer",
  6: "Screen 6 — Devil's Advocate",
  7: 'Screen 7 — Expanded reasoning',
  8: 'Screen 8 — Edge case warning',
};

/* ========== HELPER: Previous conversation for Screen 1 ========== */
function PrevConversation() {
  return (
    <>
      <div className="msg-user prev-msg">
        Can you help me think through a business problem?
      </div>
      <div className="msg-claude prev-msg">
        Of course! I'd be happy to help you think through a business problem. What's on your mind? Feel free to share as much context as you'd like.
      </div>
    </>
  );
}

/* ========== SCREEN 1: Chat ========== */
function ScreenChat({ query, onAdvance }) {
  return (
    <>
      <div className="msg-claude">
        Hi! I'm Claude. How can I help you today?
      </div>
      <div style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
        <button className="btn btn--primary" onClick={onAdvance}>
          Type query and send →
        </button>
      </div>
    </>
  );
}

/* ========== SCREEN 2: Detecting ========== */
function ScreenDetecting({ query, onAdvance }) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (query.isEdgeCase) {
      const warnTimer = setTimeout(() => setShowWarning(true), 800);
      const advTimer = setTimeout(() => onAdvance(), 1800);
      return () => { clearTimeout(warnTimer); clearTimeout(advTimer); };
    } else {
      const timer = setTimeout(() => onAdvance(), 1800);
      return () => clearTimeout(timer);
    }
  }, [query, onAdvance]);

  return (
    <>
      <PrevConversation />
      <div className="msg-user">{query.queryText}</div>
      <div className="detecting-pill">
        <span className="detecting-pill__dot" />
        TrustLoop is analysing your query...
      </div>
      {query.isEdgeCase && showWarning && (
        <div className="detecting-warning">
          ⚠ High-risk query detected — regulatory and compliance domain
        </div>
      )}
    </>
  );
}

/* ========== SCREEN 3: Assumption Contract ========== */
function ScreenAssumptions({ query, onConfirm, onEdit }) {
  return (
    <>

      <PrevConversation />
      <div className="msg-user">{query.queryText}</div>
      <div className="assumption-card">
        <div className="assumption-card__header">
          ◈ Before I answer — confirming your context
        </div>
        <div className="assumption-card__subtitle">
          My answer changes significantly based on your situation. Please confirm or correct these assumptions before I proceed.
        </div>
        <div className="assumption-list">
          {query.assumptions.map((a, i) => (
            <div className="assumption-item" key={i}>
              <div className="assumption-num assumption-num--default">{i + 1}</div>
              <div className="assumption-text">{a.text}</div>
              <div className="assumption-action">
                {a.editable ? (
                  <button className="assumption-edit-btn">Edit</button>
                ) : (
                  <span className="assumption-pill assumption-pill--locked">Confirmed</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="assumption-card__buttons">
          <button className="btn btn--primary" onClick={onConfirm}>
            Confirm all and get answer
          </button>
          <button className="btn btn--secondary" onClick={onEdit}>
            Edit assumption {query.editAssumptionIndex + 1}
          </button>
        </div>
      </div>
    </>
  );
}

/* ========== SCREEN 4: Editing ========== */
function ScreenEditing({ query, onSave }) {
  const [editValue, setEditValue] = useState(query.editUserInput);
  const editIdx = query.editAssumptionIndex;

  return (
    <>

      <PrevConversation />
      <div className="msg-user">{query.queryText}</div>
      <div className="assumption-card">
        <div className="assumption-card__header">
          ◈ Before I answer — confirming your context
        </div>
        <div className="assumption-card__subtitle">
          My answer changes significantly based on your situation. Please confirm or correct these assumptions before I proceed.
        </div>
        <div className="assumption-list">
          {query.assumptions.map((a, i) => {
            if (i === editIdx) {
              return (
                <div className="assumption-item assumption-item--editing" key={i}>
                  <div className="assumption-item__row">
                    <div className="assumption-num assumption-num--corrected">✎</div>
                    <div className="assumption-text" style={{ fontWeight: 500 }}>
                      Editing assumption {i + 1}
                    </div>
                  </div>
                  <input
                    className="assumption-edit-input"
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    autoFocus
                  />
                  <div className="assumption-edit-actions">
                    <button className="btn btn--primary btn--sm" onClick={onSave}>
                      Save and generate
                    </button>
                    <button className="btn btn--secondary btn--sm">Cancel</button>
                  </div>
                </div>
              );
            }

            const isLocked = !a.editable;
            return (
              <div className="assumption-item" key={i}>
                <div className={`assumption-num ${isLocked ? 'assumption-num--confirmed' : 'assumption-num--default'}`}>
                  {isLocked ? '✓' : i + 1}
                </div>
                <div className="assumption-text">{a.text}</div>
                <div className="assumption-action">
                  {isLocked ? (
                    <span className="assumption-pill assumption-pill--confirmed">Confirmed</span>
                  ) : (
                    <button className="assumption-edit-btn">Edit</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* ========== SCREEN 5: Answer ========== */
function ScreenAnswer({ query, onAllLoaded }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const loadedRef = useRef(false);

  useEffect(() => {
    setVisibleCount(0);
    loadedRef.current = false;
  }, [query.id]);

  useEffect(() => {
    if (visibleCount < query.answerSections.length) {
      const timer = setTimeout(() => {
        setVisibleCount(c => c + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else if (visibleCount === query.answerSections.length && !loadedRef.current) {
      loadedRef.current = true;
      const timer = setTimeout(() => onAllLoaded(), 800);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, query, onAllLoaded]);

  const editIdx = query.editAssumptionIndex;

  return (
    <>

      <PrevConversation />
      <div className="msg-user">{query.queryText}</div>
      <div className="answer-container">
        <div className="tl-badge">✦ TrustLoop — context confirmed · 5/5 assumptions reviewed</div>
        <div className="answer-bubble">
          <div className="answer-title">{query.answerTitle}</div>
          {query.answerSections.map((section, i) => (
            i < visibleCount ? (
              <div
                className="answer-section"
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="answer-section__title">{section.title}</div>
                <div className="answer-section__body">{section.body}</div>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </>
  );
}

/* ========== SCREEN 6: Devil's Advocate ========== */
function ScreenDA({ query, onExplore }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
  }, [query.id]);

  useEffect(() => {
    if (visibleCount < query.devilsAdvocate.length) {
      const timer = setTimeout(() => {
        setVisibleCount(c => c + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, query]);

  return (
    <>

      <PrevConversation />
      <div className="msg-user">{query.queryText}</div>

      {/* Truncated answer */}
      <div className="answer-container">
        <div className="tl-badge">✦ TrustLoop — context confirmed · 5/5 assumptions reviewed</div>
        <div className="answer-bubble answer-truncated">
          <div className="answer-title">{query.answerTitle}</div>
          {query.answerSections.map((section, i) => (
            <div className="answer-section" key={i} style={{ opacity: 1, transform: 'none', animation: 'none' }}>
              <div className="answer-section__title">{section.title}</div>
              <div className="answer-section__body">{section.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DA Card */}
      <div className="da-card">
        <div className="da-card__header">⚑ TrustLoop — before you use this answer</div>
        <div className="da-list">
          {query.devilsAdvocate.map((item, i) => (
            i < visibleCount ? (
              <div
                className="da-item"
                key={i}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: item.bgColor,
                  border: `1px solid ${item.borderColor}`,
                }}
              >
                <div className="da-item__label" style={{ color: item.color }}>
                  <span>{item.icon}</span>
                  {item.label}
                </div>
                <div className="da-item__text">{item.text}</div>
                {item.explorable && (
                  <button className="da-item__explore-btn" onClick={onExplore}>
                    Explore this →
                  </button>
                )}
              </div>
            ) : null
          ))}
        </div>
      </div>
    </>
  );
}

/* ========== SCREEN 7: Expanded DA ========== */
function ScreenExpanded({ query, onDismiss }) {
  const daItems = query.devilsAdvocate;
  const firstItem = daItems[0];

  return (
    <>

      <PrevConversation />
      <div className="msg-user">{query.queryText}</div>

      {/* Truncated answer */}
      <div className="answer-container">
        <div className="tl-badge">✦ TrustLoop — context confirmed · 5/5 assumptions reviewed</div>
        <div className="answer-bubble answer-truncated">
          <div className="answer-title">{query.answerTitle}</div>
          {query.answerSections.map((section, i) => (
            <div className="answer-section" key={i} style={{ opacity: 1, transform: 'none', animation: 'none' }}>
              <div className="answer-section__title">{section.title}</div>
              <div className="answer-section__body">{section.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DA Card with expanded first item */}
      <div className="da-card">
        <div className="da-card__header">⚑ TrustLoop — before you use this answer</div>
        <div className="da-list">
          {/* First item expanded */}
          <div
            className="da-item da-item--expanded"
            style={{
              background: firstItem.bgColor,
              border: `1px solid ${firstItem.borderColor}`,
              opacity: 1,
              transform: 'none',
              animation: 'none',
            }}
          >
            <div className="da-item__label" style={{ color: firstItem.color }}>
              <span>{firstItem.icon}</span>
              {firstItem.label}
            </div>
            <div className="da-item__text da-item__text--full">{firstItem.text}</div>
            <div
              className="da-expanded-detail"
              style={{ background: `${firstItem.bgColor}`, border: `1px solid ${firstItem.borderColor}` }}
            >
              {firstItem.expandedDetail}
            </div>
            <div className="da-expanded-actions">
              <button className="btn btn--primary btn--sm" onClick={onDismiss}>
                {firstItem.regenerateLabel}
              </button>
              <button className="btn btn--secondary btn--sm" onClick={onDismiss}>
                {firstItem.dismissLabel}
              </button>
            </div>
          </div>

          {/* Remaining items collapsed */}
          {daItems.slice(1).map((item, i) => (
            <div
              className="da-item"
              key={i}
              style={{
                background: item.bgColor,
                border: `1px solid ${item.borderColor}`,
                opacity: 1,
                transform: 'none',
                animation: 'none',
              }}
            >
              <div className="da-item__label" style={{ color: item.color }}>
                <span>{item.icon}</span>
                {item.label}
              </div>
              <div className="da-item__text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ========== SCREEN 8: Edge Case ========== */
function ScreenEdgeCase({ query, onRefine, onStartFresh }) {
  const edge = query.edgeCase;
  if (!edge) return null;

  return (
    <>

      <PrevConversation />
      <div className="msg-user">{query.queryText}</div>
      <div className="edge-card">
        <div className="edge-card__header">⊗ TrustLoop — significant limitations found</div>
        <div className="edge-card__body">{edge.warningBody}</div>
        <ul className="edge-card__bullets">
          {edge.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="edge-card__caution">{edge.cautionText}</div>
        <div className="edge-card__missing-label">{edge.missingLabel}</div>
        <ul className="edge-card__missing-list">
          {edge.missingItems.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
        <div className="edge-card__buttons">
          <button className="btn btn--secondary-red" onClick={onRefine}>Refine my question</button>
          <button className="btn btn--secondary">Proceed with caution</button>
          <button className="btn btn--primary" onClick={onStartFresh}>Start fresh with TrustLoop</button>
        </div>
      </div>
      <div className="edge-guidance">{edge.guidance}</div>
    </>
  );
}

/* ========== MAIN APP ========== */
export default function App() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [screen, setScreen] = useState(1);
  const chatBodyRef = useRef(null);

  const query = queries[activeQuery];

  // Reset state on query switch
  const handleQuerySwitch = useCallback((idx) => {
    setActiveQuery(idx);
    setScreen(1);
  }, []);

  // Auto-scroll chat body on screen change
  useEffect(() => {
    if (chatBodyRef.current) {
      setTimeout(() => {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }, 100);
    }
  }, [screen, activeQuery]);

  // Screen advance for detecting
  const handleDetectingAdvance = useCallback(() => {
    if (query.isEdgeCase) {
      setScreen(8);
    } else {
      setScreen(3);
    }
  }, [query]);

  // Navigation
  const goNext = () => {
    if (screen < 8) {
      if (screen === 2) {
        // Detecting auto-advances — skip manual next
        return;
      }
      setScreen(s => s + 1);
    }
  };

  const goPrev = () => {
    if (screen > 1) {
      setScreen(s => s - 1);
    }
  };

  // Render current screen
  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <ScreenChat query={query} onAdvance={() => setScreen(2)} />;
      case 2:
        return <ScreenDetecting query={query} onAdvance={handleDetectingAdvance} />;
      case 3:
        return (
          <ScreenAssumptions
            query={query}
            onConfirm={() => setScreen(5)}
            onEdit={() => setScreen(4)}
          />
        );
      case 4:
        return <ScreenEditing query={query} onSave={() => setScreen(5)} />;
      case 5:
        return <ScreenAnswer query={query} onAllLoaded={() => setScreen(6)} />;
      case 6:
        return <ScreenDA query={query} onExplore={() => setScreen(7)} />;
      case 7:
        return <ScreenExpanded query={query} onDismiss={() => setScreen(6)} />;
      case 8:
        return (
          <ScreenEdgeCase
            query={query}
            onRefine={() => setScreen(1)}
            onStartFresh={() => setScreen(3)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="top-nav__left">
          <div className="top-nav__logo">C</div>
          <span className="top-nav__wordmark">Claude</span>
          <span className="top-nav__badge">TrustLoop beta</span>
        </div>
        <div className="top-nav__right">PM Prototype — TrustLoop</div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Query Selector */}
        <div className="query-selector">
          <div className="query-selector__label">Select query to demo:</div>
          <div className="query-selector__buttons">
            {queries.map((q, i) => (
              <button
                key={q.id}
                className={`query-btn ${i === activeQuery ? 'query-btn--active' : ''}`}
                onClick={() => handleQuerySwitch(i)}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screen Navigation */}
        <div className="screen-nav">
          {SCREEN_LABELS.map((label, i) => (
            <button
              key={i}
              className={`screen-btn ${screen === i + 1 ? 'screen-btn--active' : ''}`}
              onClick={() => setScreen(i + 1)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Screen Label */}
        <div className="screen-label">{SCREEN_DESCRIPTIONS[screen]}</div>

        {/* Chat Window */}
        <div className="chat-window">
          <div className="chat-header">
            <span className="chat-header__dot" />
            <span className="chat-header__title">New conversation</span>
            <span className="chat-header__status">TrustLoop: ON</span>
          </div>

          <div className="chat-body" ref={chatBodyRef} key={`${activeQuery}-${screen}`}>
            {renderScreen()}
          </div>

          <div className="chat-input-bar">
            <input className="chat-input" placeholder="Message Claude..." readOnly />
            <button className="chat-send-btn">↑</button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <span className="bottom-nav__counter">{screen} of 8 screens</span>
          <div className="bottom-nav__buttons">
            <button
              className="btn btn--secondary btn--sm"
              onClick={goPrev}
              disabled={screen === 1}
              style={{ opacity: screen === 1 ? 0.4 : 1 }}
            >
              ← Previous
            </button>
            <button
              className="btn btn--primary btn--sm"
              onClick={goNext}
              disabled={screen === 8}
              style={{ opacity: screen === 8 ? 0.4 : 1 }}
            >
              Next →
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
