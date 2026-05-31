# TrustLoop — Ultra-Detailed Prototype Architecture
## Claude Feature Prototype | PM Assignment | May 2026

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Design System](#2-design-system)
3. [Global UI Components](#3-global-ui-components)
4. [Screen Architecture — All 8 Screens](#4-screen-architecture--all-8-screens)
5. [Query 1 — B2B SaaS Growth Strategy](#5-query-1--b2b-saas-growth-strategy)
6. [Query 2 — EV Market Research](#6-query-2--ev-market-research)
7. [Query 3 — HR Tech Competitive Analysis](#7-query-3--hr-tech-competitive-analysis)
8. [Query 4 — PM Career Preparation](#8-query-4--pm-career-preparation)
9. [Query 5 — SEBI Compliance (Edge Case)](#9-query-5--sebi-compliance-edge-case)
10. [Interaction States](#10-interaction-states)
11. [Animation Specifications](#11-animation-specifications)
12. [Navigation Flow](#12-navigation-flow)
13. [Prompt for Antigravity](#13-prompt-for-antigravity)

---

## 1. Product Overview

### What is TrustLoop?

TrustLoop is a two-part feature built into Claude that wraps every response at both ends — before and after the answer — helping early-career professionals evaluate AI outputs without replacing their judgment.

### The Problem It Solves

> *"Early-career professionals can't tell if Claude outputs are trustworthy. Polished responses mask weak reasoning, pushing users toward blind trust or excessive skepticism. Either way, real work suffers, evaluation skills never develop, and high-stakes tasks never get done on Claude."*

### Two Parts

| Part | When | What It Does |
|---|---|---|
| Assumption Contract | BEFORE the answer | Surfaces what Claude assumed — user confirms or corrects |
| Devil's Advocate | AFTER the answer | Claude challenges its own weakest points |

### Target User
Early-career knowledge workers (22–30 years old) — analysts, consultants, marketers, HR, finance professionals — using Claude for research and analysis at work.

---

## 2. Design System

### Colors

```
Primary background:     #FFFFFF
Secondary background:   #F8F7F4
Tertiary background:    #F3F4F6

Primary text:           #1A1A1A
Secondary text:         #374151
Tertiary text:          #6B7280
Disabled text:          #9CA3AF

Border primary:         #E5E3DE
Border secondary:       #F0EDE8

TrustLoop Purple:       #7C3AED  (Assumption Contract accent)
TrustLoop Orange:       #F97316  (Devil's Advocate accent)
TrustLoop Red:          #EF4444  (Edge case warning)
TrustLoop Green:        #22C55E  (Confirmed / success)
TrustLoop Amber:        #F59E0B  (Detecting / loading)

Purple bg:              #F5F3FF
Purple border:          #C4B5FD
Purple text:            #5B21B6

Orange bg:              #FFF7ED
Orange border:          #FED7AA
Orange text:            #7C2D12

Red bg:                 #FFF1F2
Red border:             #FECACA
Red text:               #991B1B

Green bg:               #F0FDF4
Green border:           #86EFAC
Green text:             #166534

Amber bg:               #FEFCE8
Amber border:           #FDE68A
Amber text:             #92400E
```

### Typography

```
Font family:    DM Sans (Google Fonts)
Fallback:       -apple-system, BlinkMacSystemFont, sans-serif

Font sizes:
  xs:           10px
  sm:           11px
  base:         12px
  md:           13px
  lg:           15px
  xl:           18px
  2xl:          24px

Font weights:
  regular:      400
  medium:       500
  semibold:     600
  bold:         700

Line heights:
  tight:        1.3
  normal:       1.5
  relaxed:      1.6
  loose:        1.8
```

### Spacing Scale

```
4px   — xs
8px   — sm
12px  — md
16px  — lg
20px  — xl
24px  — 2xl
32px  — 3xl
```

### Border Radius

```
4px   — sm (tags, small elements)
6px   — md (buttons, inputs)
8px   — lg (cards, panels)
12px  — xl (message bubbles)
16px  — 2xl (main containers)
24px  — full (pills, badges)
```

### Shadows

```
Card shadow:    0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
Hover shadow:   0 4px 12px rgba(0,0,0,0.08)
Focus ring:     0 0 0 3px rgba(124, 58, 237, 0.15)
```

---

## 3. Global UI Components

### 3.1 Top Navigation Bar

```
Height:         52px
Background:     #FFFFFF
Border bottom:  1px solid #E5E3DE
Padding:        0 20px
Layout:         flex, space-between, center aligned

LEFT SIDE:
  Claude logo icon:
    Width/Height: 28px × 28px
    Background:   #D97706
    Border radius: 8px
    Content:      "C" in white, font-weight 700, font-size 14px

  Claude wordmark:
    Font size:    15px
    Font weight:  600
    Color:        #1A1A1A
    Margin left:  8px

  TrustLoop badge:
    Background:   #FEF3C7
    Border:       1px solid #FDE68A
    Color:        #92400E
    Font size:    11px
    Font weight:  600
    Padding:      2px 10px
    Border radius: 20px
    Content:      "TrustLoop beta"

RIGHT SIDE:
  Prototype label:
    Font size:    11px
    Color:        #9CA3AF
    Content:      "PM Prototype — TrustLoop"
```

### 3.2 Query Selector

```
Position:       Below top nav, above chat window
Background:     #FFFFFF
Border:         1px solid #E5E3DE
Border radius:  12px
Padding:        12px 16px
Margin bottom:  16px

Label:
  Content:      "Select query to demo:"
  Font size:    11px
  Font weight:  600
  Color:        #6B7280
  Text transform: uppercase
  Letter spacing: 0.05em
  Margin bottom: 8px

Query buttons:
  Layout:       flex, wrap, gap 8px
  Each button:
    Font size:    11px
    Font weight:  500
    Padding:      6px 12px
    Border radius: 20px
    Border:       1px solid #E5E3DE
    Background:   #FFFFFF
    Color:        #374151
    Cursor:       pointer

  Active query button:
    Background:   #1A1A1A
    Color:        #FFFFFF
    Border:       1px solid #1A1A1A

  Query labels:
    Q1: "B2B SaaS Growth"
    Q2: "EV Market Research"
    Q3: "HR Tech Positioning"
    Q4: "PM Career Prep"
    Q5: "SEBI Compliance ⚠"
```

### 3.3 Screen Navigation

```
Position:       Below query selector, above chat window
Layout:         flex, wrap, gap 6px

Each screen button:
  Font size:    11px
  Font weight:  500
  Padding:      4px 10px
  Border radius: 20px
  Border:       1px solid #E5E3DE
  Background:   #FFFFFF
  Color:        #6B7280
  Cursor:       pointer

Active screen button:
  Background:   #1A1A1A
  Color:        #FFFFFF
  Border:       1px solid #1A1A1A

Screen labels:
  1: "1. Chat"
  2: "2. Detecting"
  3: "3. Assumptions"
  4: "4. Editing"
  5: "5. Answer"
  6: "6. TrustLoop"
  7: "7. Expanded"
  8: "8. Edge Case"
```

### 3.4 Chat Window Container

```
Background:     #FFFFFF
Border:         1px solid #E5E3DE
Border radius:  16px
Min height:     520px
Overflow:       hidden
Layout:         flex, column

Chat header:
  Height:       48px
  Padding:      12px 16px
  Border bottom: 1px solid #F0EDE8
  Layout:       flex, center aligned, gap 8px

  Status dot:
    Width/Height: 8px × 8px
    Border radius: 50%
    Background:   #22C55E

  Chat title:
    Font size:    13px
    Font weight:  600
    Color:        #1A1A1A
    Content:      "New conversation"

  TrustLoop status (right):
    Font size:    11px
    Color:        #9CA3AF
    Content:      "TrustLoop: ON"

Chat body:
  Flex:         1
  Padding:      16px
  Display:      flex, column, gap 12px
  Overflow Y:   auto

Input bar:
  Border top:   1px solid #F0EDE8
  Padding:      12px 16px
  Background:   #FFFFFF
  Layout:       flex, center aligned, gap 8px

  Input field:
    Flex:       1
    Background: #F8F7F4
    Border:     1px solid #E5E3DE
    Border radius: 24px
    Padding:    8px 16px
    Font size:  12px
    Color:      #9CA3AF
    Content:    "Message Claude..."

  Send button:
    Width/Height: 32px × 32px
    Border radius: 50%
    Background:   #1A1A1A
    Color:        #FFFFFF
    Content:      "↑"
    Font size:    14px
```

### 3.5 Screen Step Label

```
Font size:      11px
Color:          #9CA3AF
Font weight:    500
Margin bottom:  8px
Display:        flex, center aligned, gap 6px
Content format: "Screen X — [description]"
```

### 3.6 User Message Bubble

```
Align self:     flex-end
Background:     #1A1A1A
Color:          #FFFFFF
Border radius:  16px 16px 4px 16px
Padding:        10px 14px
Font size:      13px
Max width:      80%
Line height:    1.5
```

### 3.7 Claude Message Bubble

```
Align self:     flex-start
Background:     #F8F7F4
Color:          #1A1A1A
Border radius:  16px 16px 16px 4px
Padding:        10px 14px
Font size:      13px
Max width:      90%
Line height:    1.5
Border:         1px solid #E5E3DE
```

### 3.8 Bottom Navigation Bar

```
Margin top:     16px
Layout:         flex, space-between, center aligned

Screen counter:
  Font size:    11px
  Color:        #9CA3AF
  Content:      "X of 8 screens"

Button group:
  Gap:          8px

  Previous button:
    Style:      Secondary button
    Content:    "← Previous"
    Font size:  11px

  Next button:
    Style:      Primary button
    Content:    "Next →"
    Font size:  11px

Primary button:
  Background:   #1A1A1A
  Color:        #FFFFFF
  Border:       none
  Border radius: 8px
  Padding:      8px 16px
  Font size:    12px
  Font weight:  600
  Cursor:       pointer

Secondary button:
  Background:   transparent
  Color:        #374151
  Border:       1px solid #E5E3DE
  Border radius: 8px
  Padding:      8px 16px
  Font size:    12px
  Font weight:  500
  Cursor:       pointer
```

---

## 4. Screen Architecture — All 8 Screens

### Screen Flow Diagram

```
Screen 1 (Chat)
    ↓ [User types query / click Next]
Screen 2 (Detecting)
    ↓ [Auto-advance after 1.8s]
Screen 3 (Assumption Contract)
    ↓ [Click "Confirm All"]        → Screen 5 (Answer)
    ↓ [Click "Edit Assumption"]    → Screen 4 (Editing)
Screen 4 (Editing)
    ↓ [Save and Generate]          → Screen 5 (Answer)
Screen 5 (Answer)
    ↓ [Auto-advance after content loads]
Screen 6 (Devil's Advocate)
    ↓ [Click "Explore This"]       → Screen 7 (Expanded)
    ↓ [Query 5 only]               → Screen 8 (Edge Case)
Screen 7 (Expanded)
    ↓ [Regenerate / Dismiss]       → Screen 6 (Devil's Advocate)
Screen 8 (Edge Case)
    ↓ [Start Fresh]                → Screen 3 (Assumptions)
```

### Special Rule for Query 5

Query 5 (SEBI Compliance) skips directly from Screen 2 (Detecting) to Screen 8 (Edge Case). It never shows Screens 3–7 because TrustLoop identifies this query as outside Claude's reliable knowledge and immediately surfaces a warning.

---

## 5. Query 1 — B2B SaaS Growth Strategy

### Query Text

> "What are the key growth strategies for a B2B SaaS startup in India in 2026?"

---

### Screen 3 — Assumption Contract (Query 1)

**Header:**
> ◈ Before I answer — confirming your context

**Subtitle:**
> My answer changes significantly based on your situation. Please confirm or correct these assumptions before I proceed.

**5 Assumptions:**

```
Assumption 1:
  Text:     "Your startup is early stage — pre Series A with under 50 customers"
  Editable: YES
  Default:  Unconfirmed

Assumption 2:
  Text:     "You are targeting business customers (B2B), not individual consumers"
  Editable: YES
  Default:  Unconfirmed

Assumption 3:
  Text:     "You want digital-first strategies — not field sales or offline channels"
  Editable: YES
  Default:  Unconfirmed

Assumption 4:
  Text:     "Your marketing budget is limited — under ₹10 lakhs per month"
  Editable: YES
  Default:  Unconfirmed

Assumption 5:
  Text:     "You need strategies for 2026 Indian market conditions specifically"
  Editable: NO
  Default:  Confirmed (greyed out, non-editable)
```

**Editing Assumption 2 (Screen 4 demo):**
```
User corrects to:   "Actually targeting both B2B and B2C customers"
New assumption text: "You are targeting both business AND consumer customers"
Tag shown:          "Corrected ✎" in amber
```

**Button row:**
```
Button 1:   "Confirm all and get answer"     [Primary]
Button 2:   "Edit assumption 2"              [Secondary]
```

---

### Screen 5 — Core Answer (Query 1)

**TrustLoop Badge:**
> ✦ TrustLoop — context confirmed · 5/5 assumptions reviewed

**Answer Title:**
> Growth strategies for your early-stage B2B SaaS startup in India (2026)

**Answer Sections (stream in one by one, 400ms apart):**

```
Section 1 — Product-Led Growth (PLG)
Title:   "1. Product-Led Growth (PLG)"
Body:    "Let the product sell itself. Offer a freemium tier or
          a 14-day free trial that lets users experience your
          core value before paying. Indian B2B buyers are
          highly cost-sensitive — they need to feel ROI before
          committing budget. This is how Zoho grew to ₹8,700 Cr
          in revenue without a large outbound sales team.
          PLG works best when your product has a clear 'aha moment'
          within the first session. If your product takes weeks to
          show value, PLG alone won't work."

Section 2 — Community-Led Growth
Title:   "2. Community-Led Growth"
Body:    "Build a community around the problem you solve — not
          just your product. LinkedIn founder communities,
          WhatsApp groups for your target buyer persona, and
          city-specific startup circles in Bangalore, Mumbai,
          and Hyderabad are highly effective distribution channels
          unique to India. Razorpay and Hasura built significant
          early traction through developer communities before
          investing in paid acquisition."

Section 3 — Content + SEO for Inbound
Title:   "3. Content and SEO for Inbound"
Body:    "Indian SMBs and startup teams actively search Google
          for solutions before evaluating products. Invest in
          content that ranks for pain-point keywords — not product
          keywords. A blog post titled 'how to manage payroll for
          a 50-person team in India' will outperform a page titled
          'best HR software India' at your budget level. Target
          both English and Hinglish queries for maximum reach."

Section 4 — Channel Partnerships
Title:   "4. Channel and Reseller Partnerships"
Body:    "Partner with CAs, business consultants, IT resellers,
          and industry associations who already have trusted
          relationships with your target buyers. A referral from
          a trusted CA closes an SMB deal faster than any cold
          email sequence. Tally built its ₹1000+ Cr business
          almost entirely through CA partnerships — this model
          is uniquely powerful in the Indian market."
```

---

### Screen 6 — Devil's Advocate (Query 1)

**Header:**
> ⚑ TrustLoop — before you use this answer

**5 Devil's Advocate Items:**

```
Item 1 — Reasoning Gap
Label:    "Reasoning gap"
Icon:     ⚠
Color:    #92400E (amber dark)
Text:     "Point 1 (PLG) assumes your deal size is under ₹2 lakhs
           annually. If your ACV exceeds ₹5 lakhs, enterprise
           sales motion — not PLG — is typically needed. PLG
           does not close large-ticket B2B deals without a human
           sales layer. I don't know your actual price point."
Explore:  YES

Detail (Screen 7):
  "PLG works optimally when:
   — Deal size is under ₹2L annually
   — Users can self-serve onboard in under 30 minutes
   — Product value is experienced within the first session
   — Champion within the company can push purchase without committee approval

   For deals above ₹5L annually, you typically need:
   — A dedicated sales development representative (SDR)
   — A demo-led sales process
   — Legal and procurement involvement
   — Multi-stakeholder buy-in

   What is your actual annual contract value (ACV)?"

Item 2 — What I Left Out
Label:    "What I left out"
Icon:     ◎
Color:    #1E40AF (blue)
Text:     "I excluded outbound sales, account-based marketing (ABM),
           offline events, and trade show participation. I judged
           these as secondary for an early-stage startup with limited
           budget. However, in certain verticals — manufacturing,
           logistics, government — offline relationship-building is
           actually the primary channel and digital-first strategies
           underperform significantly."
Explore:  NO

Item 3 — Where I'm Uncertain
Label:    "Where I'm uncertain"
Icon:     ~
Color:    #6B21A8 (purple)
Text:     "The competitive dynamics in Indian B2B SaaS shifted
           significantly in H2 2025 with increased consolidation
           in HR-tech, fintech, and logistics-tech verticals.
           My strategies are based on patterns from 2022–2025.
           The fundraising environment in early 2026 may mean
           PLG timelines to monetisation are longer than I suggested."
Explore:  NO

Item 4 — Alternative Perspective
Label:    "Alternative perspective"
Icon:     ↔
Color:    #065F46 (green)
Text:     "Several Indian SaaS founders — including Girish Mathrubootham
           (Freshdesk) and Shashank Kumar (Razorpay) — argue that
           brand trust must be established before aggressive growth
           investment. My answer assumes performance-first growth.
           If you are in a crowded category with strong incumbents,
           brand differentiation may deliver better ROI than the
           tactical strategies I outlined."
Explore:  NO

Item 5 — What Changes This Answer
Label:    "What changes this answer"
Icon:     ✦
Color:    #7C2D12 (orange dark)
Text:     "This answer changes significantly if:
           — Your ACV exceeds ₹5L (enterprise sales motion needed)
           — Your buyers are in Tier 2/3 cities (offline channels matter more)
           — Your product is in fintech or healthtech (regulatory constraints apply)
           — Your founding team has strong enterprise networks (outbound may outperform PLG)
           — You have already raised Series A (budget constraints no longer apply)"
Explore:  NO
```

---

## 6. Query 2 — EV Market Research

### Query Text

> "What is the market size and opportunity for electric vehicles in India in 2026?"

---

### Screen 3 — Assumption Contract (Query 2)

**Header:**
> ◈ Before I answer — confirming your context

**Subtitle:**
> Market data varies significantly based on what segment and purpose you need. Let me confirm:

**5 Assumptions:**

```
Assumption 1:
  Text:     "You want overall EV market data — not a specific segment
             like 2-wheelers, 4-wheelers, or commercial vehicles"
  Editable: YES

Assumption 2:
  Text:     "This is for a business presentation or investment research
             — not academic study"
  Editable: YES

Assumption 3:
  Text:     "You need India-specific data — not global EV market figures"
  Editable: NO

Assumption 4:
  Text:     "You want forward-looking opportunity sizing — not just
             historical market data"
  Editable: YES

Assumption 5:
  Text:     "You need data in INR and USD — not just one currency"
  Editable: YES
```

**Editing Assumption 1 (Screen 4 demo):**
```
User corrects to:   "Specifically looking at 2-wheeler EV segment only"
New text:           "You want 2-wheeler EV segment data specifically"
Tag:                "Corrected ✎"
```

---

### Screen 5 — Core Answer (Query 2)

**TrustLoop Badge:**
> ✦ TrustLoop — context confirmed · 5/5 assumptions reviewed

**Answer Title:**
> India EV Market — Size, Segments, and Opportunity (2026)

**Answer Sections:**

```
Section 1 — Overall Market Size
Title:   "1. Overall Market Size"
Body:    "The Indian EV market is estimated at ₹1.2 lakh crore
          ($14.4 billion) in 2026, growing at a CAGR of 49%
          from 2022. India is now the third-largest EV market
          globally by volume, behind China and the United States.
          The government's FAME-III scheme and Production Linked
          Incentive (PLI) scheme have accelerated adoption
          significantly since 2024."

Section 2 — Segment Breakdown
Title:   "2. Segment Breakdown"
Body:    "2-wheelers dominate with 78% of EV sales by volume —
          led by Ola Electric, TVS, and Bajaj. 4-wheelers represent
          18% by volume but 54% by revenue — led by Tata Motors
          with 62% market share in passenger EVs. Commercial
          vehicles (3-wheelers, buses, trucks) represent 4% by
          volume but are the fastest-growing segment at 87% CAGR,
          driven by last-mile logistics demand."

Section 3 — Key Growth Drivers
Title:   "3. Key Growth Drivers in 2026"
Body:    "Three forces are driving accelerated adoption:
          (1) Petrol prices above ₹120/litre making TCO parity
          clear for most buyer segments.
          (2) Charging infrastructure crossing 1 lakh public
          charging points nationally — eliminating range anxiety
          as a primary objection.
          (3) EV financing becoming mainstream with EMI rates
          for EVs now at par with ICE vehicles across all
          major banks and NBFCs."

Section 4 — Investment Opportunity
Title:   "4. Investment and Startup Opportunity"
Body:    "The highest-growth adjacent opportunities are in:
          EV charging infrastructure (₹45,000 Cr opportunity),
          battery swapping for 2-wheelers and 3-wheelers
          (₹18,000 Cr), fleet management SaaS for commercial EVs,
          and EV insurance and financing products. Direct EV
          manufacturing is highly capital-intensive with strong
          incumbents — the software and services layer is
          significantly more accessible for new entrants."
```

---

### Screen 6 — Devil's Advocate (Query 2)

**5 Devil's Advocate Items:**

```
Item 1 — Reasoning Gap
Text:     "The market size figures I cited (₹1.2 lakh crore) vary
           significantly across research sources. NITI Aayog, CEEW,
           and private consultancies like Redseer give estimates
           ranging from ₹80,000 Cr to ₹1.8 lakh Cr for 2026.
           I used mid-range estimates. If you are using this for
           investor presentations, verify against a paid research
           report — these numbers will be questioned."

Item 2 — What I Left Out
Text:     "I did not cover: state-level variation in EV adoption
           (Maharashtra and Karnataka lead significantly), rural vs
           urban demand differences, the impact of recent battery
           price deflation from Chinese imports, or the 2025
           policy changes around FAME-III subsidy structure.
           All of these affect the opportunity sizing meaningfully."

Item 3 — Where I'm Uncertain
Text:     "EV market data changes quarterly. My figures are based
           on data available through mid-2025. Ola Electric's IPO
           performance and subsequent market share shifts in H2 2025
           may have changed competitive dynamics significantly.
           I cannot confirm current market share figures with
           high confidence."

Item 4 — Alternative Perspective
Text:     "Several automotive analysts argue that India's EV adoption
           is overhyped — pointing to charging infrastructure gaps
           in Tier 2/3 cities, high battery replacement costs, and
           ongoing grid reliability issues. My answer reflects the
           optimistic consensus view. A bear case analysis would
           show CAGR of 28–32% rather than 49%."

Item 5 — What Changes This Answer
Text:     "This answer changes if:
           — You need segment-specific data (2W vs 4W vs commercial)
           — Your geography focus is Tier 2/3 cities vs metros
           — You need 5-year projections rather than 2026 snapshot
           — You are evaluating a specific use case (fleet, retail, B2B)
           — Recent policy changes post-March 2026 are material to your analysis"
```

---

## 7. Query 3 — HR Tech Competitive Analysis

### Query Text

> "How should I position my HR tech product against Darwinbox and Keka in the Indian market?"

---

### Screen 3 — Assumption Contract (Query 3)

**5 Assumptions:**

```
Assumption 1:
  Text:     "Your product targets SMBs (50–500 employees) —
             not enterprise (500+ employees)"
  Editable: YES

Assumption 2:
  Text:     "You are positioning against Darwinbox and Keka specifically
             — not the full HR tech landscape including Workday, SAP"
  Editable: NO

Assumption 3:
  Text:     "Your product is a full-stack HRMS — not a point solution
             like payroll-only or attendance-only"
  Editable: YES

Assumption 4:
  Text:     "You are early stage — not yet at ₹10 Cr ARR"
  Editable: YES

Assumption 5:
  Text:     "You want differentiation strategy — not a feature
             comparison matrix"
  Editable: YES
```

---

### Screen 5 — Core Answer (Query 3)

**Answer Title:**
> Positioning against Darwinbox and Keka — 4 differentiation strategies

**Answer Sections:**

```
Section 1 — Understand Where Darwinbox and Keka Are Weak
Title:   "1. Where Darwinbox and Keka are vulnerable"
Body:    "Darwinbox dominates enterprise (1000+ employees) with
          strong CHRO relationships and global expansion focus.
          Its weakness: SMBs find it over-engineered, expensive
          (₹350–600/employee/month), and slow to implement
          (3–6 months). Keka is strong at 100–500 employee
          companies and is praised for UI/UX. Its weakness:
          limited customisation, weak analytics, and poor
          integration ecosystem. Your window: SMBs that have
          outgrown basic payroll tools but find Keka limiting
          and Darwinbox unaffordable."

Section 2 — Win on Implementation Speed
Title:   "2. Win on time-to-value"
Body:    "Position against the 3–6 month Darwinbox implementation
          nightmare. If you can get a 200-person company live in
          3 weeks, that is your single most powerful differentiator.
          Indian HR managers are time-poor. 'Live in 21 days or
          your money back' is a positioning statement that will
          consistently outperform feature comparisons in demos."

Section 3 — Win on Vertical Specificity
Title:   "3. Win by going vertical"
Body:    "Darwinbox and Keka are horizontal products built for
          all industries. Pick one vertical — manufacturing,
          logistics, retail, or IT services — and build features,
          compliance workflows, and integrations specific to that
          vertical. A logistics company managing 500 gig workers
          has completely different HR needs than a 500-person
          IT services firm. Vertical specificity commands 30–40%
          premium pricing and dramatically reduces churn."

Section 4 — Win on Support Quality
Title:   "4. Win on human support"
Body:    "Both Darwinbox and Keka receive consistent criticism for
          post-sales support quality. G2 and Capterra India reviews
          show 'poor customer support' as the #1 complaint for both.
          Position with a dedicated customer success manager for
          every account — not a shared support queue. In the Indian
          mid-market, trust is built through relationships, not tickets."
```

---

### Screen 6 — Devil's Advocate (Query 3)

**5 Devil's Advocate Items:**

```
Item 1 — Reasoning Gap
Text:     "My positioning advice assumes you have feature parity with
           Keka on core HRMS functions — payroll, leave management,
           performance management, and attendance. If you are missing
           any of these, no amount of positioning will overcome the
           feature gap in demos. Buyers will eliminate you in the
           first evaluation stage regardless of your differentiation
           narrative."

Item 2 — What I Left Out
Text:     "I did not address: pricing strategy against Keka's
           ₹125–200/employee/month range, the role of G2 and
           Capterra reviews in Indian HR tech purchase decisions,
           the increasing importance of WhatsApp integration in
           Indian HRMS products, or the impact of Darwinbox's
           recent Series D on their SMB push."

Item 3 — Where I'm Uncertain
Text:     "Keka raised a significant funding round in late 2025
           and has been aggressively expanding downmarket into
           the 50–200 employee segment. Their current product
           roadmap and pricing may have changed materially from
           what I described. Verify current Keka pricing and
           positioning before building your sales playbook
           around this analysis."

Item 4 — Alternative Perspective
Text:     "Some Indian HR tech investors argue that competing
           head-to-head with Darwinbox and Keka is a losing strategy
           regardless of differentiation — both have achieved
           significant network effects and switching costs.
           The alternative view: partner with them (build integrations,
           become their preferred add-on for specific capabilities)
           rather than compete directly."

Item 5 — What Changes This Answer
Text:     "This analysis changes if:
           — Your target segment is enterprise (1000+ employees)
           — You have a point solution rather than full HRMS
           — Your geography focus is outside metro cities
           — You are targeting a specific industry vertical already
           — Your product has a fundamentally different delivery model
             (WhatsApp-first, mobile-first, AI-native)"
```

---

## 8. Query 4 — PM Career Preparation

### Query Text

> "What skills should I develop to become a product manager at a top Indian startup in 2026?"

---

### Screen 3 — Assumption Contract (Query 4)

**5 Assumptions:**

```
Assumption 1:
  Text:     "You are early in your career — 0–3 years of experience —
             targeting your first PM role"
  Editable: YES

Assumption 2:
  Text:     "You are targeting product roles at funded Indian startups —
             not MNCs or service companies"
  Editable: YES

Assumption 3:
  Text:     "You have some technical background — engineering, data,
             or design — but are not a career PM yet"
  Editable: YES

Assumption 4:
  Text:     "You want practical skill-building advice — not MBA
             or certification recommendations"
  Editable: YES

Assumption 5:
  Text:     "You want to join as an APM or PM1 — not senior PM
             or Group PM"
  Editable: YES
```

---

### Screen 5 — Core Answer (Query 4)

**Answer Title:**
> Skills to become a PM at a top Indian startup in 2026

**Answer Sections:**

```
Section 1 — The 3 Non-Negotiable Hard Skills
Title:   "1. Three non-negotiable hard skills"
Body:    "In 2026, Indian startup PMs are expected to bring:
          (1) SQL proficiency — you must be able to pull your
          own data without waiting for a data analyst. Every
          PM interview at Razorpay, Zepto, CRED, or PhonePe
          includes a case study where you need to define metrics
          and query logic.
          (2) Wireframing in Figma — not design skills, but
          the ability to communicate product ideas visually
          without always needing a designer in the room.
          (3) Cohort analysis and funnel thinking — understanding
          retention, activation, and conversion at the user
          journey level, not just surface metrics."

Section 2 — Communication and Prioritisation
Title:   "2. Communication and ruthless prioritisation"
Body:    "Indian startup PMs operate in resource-constrained
          environments where saying no is more important than
          saying yes. Practice writing one-pagers — a single
          page that defines the problem, the user, the solution,
          the success metric, and why now. Every top Indian
          startup PM will tell you that the ability to write
          a clear PRD that an engineer trusts is worth more
          than any certification."

Section 3 — How to Build a Portfolio Without a PM Title
Title:   "3. Build a portfolio without a PM title"
Body:    "The most common reason candidates get rejected at
          Meesho, Swiggy, or Urban Company is zero product
          portfolio. You do not need a PM title to build one:
          (1) Teardown 3 products you use daily — write a
          2-page doc on what you would change and why.
          (2) Build a side project — even a no-code tool on
          Glide or Bubble counts if you defined the problem,
          built the solution, and measured outcomes.
          (3) Contribute to open-source or volunteer your
          PM skills to an NGO or early-stage startup."

Section 4 — The Interview Reality in 2026
Title:   "4. What Indian PM interviews actually test in 2026"
Body:    "Based on reported interview experiences at top Indian
          startups in 2025–2026: 60% of PM rounds are now
          data-heavy case studies, 25% are execution and
          prioritisation frameworks, 10% are product design,
          and 5% are estimation. The era of purely framework-
          based PM interviews (CIRCLES, HEART) is largely over
          at tier-1 Indian startups. They want to see how you
          think with data — not how you memorise frameworks."
```

---

### Screen 6 — Devil's Advocate (Query 4)

**5 Devil's Advocate Items:**

```
Item 1 — Reasoning Gap
Text:     "My advice assumes you are coming from an engineering
           or analytical background. If you are transitioning
           from sales, operations, or a non-technical role,
           the skill priority order changes significantly.
           Non-technical PMs at Indian startups often need to
           invest 3–4x more time in SQL and technical credibility
           building before they can compete with engineering
           graduates for the same APM roles."

Item 2 — What I Left Out
Text:     "I did not cover: the role of MBA programs (IIM, ISB)
           in accessing PM roles at certain companies like
           Flipkart and Bain Capital Ventures portfolio companies,
           the emerging importance of AI/LLM product skills
           at AI-native startups, the value of PM communities
           like Ness Labs India and Lenny's Newsletter India
           cohorts, or the specific PM hiring process at
           each major Indian startup."

Item 3 — Where I'm Uncertain
Text:     "The PM job market at Indian startups went through
           significant contraction in 2023–2024 and recovery
           in 2025. I am uncertain about current hiring volumes
           and whether the data-heavy interview trend I described
           applies equally across company stages — Series A
           companies may still prefer framework-based candidates
           while Series C+ companies lean data-heavy."

Item 4 — Alternative Perspective
Text:     "Several senior Indian PMs — including Shreyas Doshi
           and Nikhyl Singhal — argue that the most important
           PM skill is neither data nor design but influence
           without authority. Their view: technical skills are
           table stakes that can be learned on the job; the rare
           skill is the ability to align engineers, designers,
           and business stakeholders without formal power.
           My answer prioritises hard skills — their view
           would prioritise soft skills."

Item 5 — What Changes This Answer
Text:     "This advice changes significantly if:
           — You are targeting a PM role at an MNC (Google, Meta,
             Microsoft India) rather than a funded Indian startup
           — You already have 3+ years of product experience
             and are targeting senior PM roles
           — You are targeting a specific vertical like
             fintech, healthtech, or edtech where domain
             expertise matters more than generic PM skills
           — You are outside the 6 major metro cities where
             PM opportunities are concentrated"
```

---

## 9. Query 5 — SEBI Compliance (Edge Case)

### Query Text

> "What are the exact SEBI compliance requirements for a fintech SaaS platform in Q1 2026?"

---

### Special Behavior

**Query 5 does NOT show Screens 3–7.**

Flow: Screen 2 (Detecting) → Screen 8 (Edge Case) immediately.

Reason: TrustLoop identifies this query as requiring highly specific, time-sensitive regulatory information that Claude cannot reliably provide. Rather than generate a confidently-worded but potentially outdated or incorrect compliance answer, TrustLoop immediately surfaces a warning.

---

### Screen 2 — Detecting (Query 5)

**Detecting pill text:**
> TrustLoop is analysing your query...

**After 1.8 seconds — secondary message appears:**
> ⚠ High-risk query detected — regulatory and compliance domain

---

### Screen 8 — Edge Case Warning (Query 5)

**Card style:**
```
Background:     #FFF1F2
Border:         1px solid #FECACA
Border left:    3px solid #EF4444
Border radius:  0 12px 12px 0
Padding:        16px
```

**Header:**
> ⊗ TrustLoop — significant limitations found

**Header color:** #991B1B

**Warning body:**

```
Paragraph 1:
  "This query requires highly specific, time-sensitive regulatory
   information about SEBI compliance for fintech platforms.
   TrustLoop has flagged this response as HIGH RISK for the
   following reasons:"

Bullet list:
  • SEBI issued new circulars for fintech intermediaries in
    Q4 2025 that may not be fully reflected in my knowledge
  • RBI and SEBI co-regulation requirements for payment
    aggregators changed materially in late 2025
  • Penalties for non-compliance can be severe — ₹25 lakhs
    per violation plus potential licence suspension
  • The correct answer depends heavily on your specific
    product type, licence category, and transaction volumes

Paragraph 2:
  "Using this answer for actual compliance decisions without
   verification from a SEBI-registered legal professional
   could expose your company to regulatory risk."
```

**What's Missing section:**
```
Label:    "What I cannot reliably answer:"
Color:    #7F1D1D

Items:
  • Q1 2026 SEBI circular updates for payment aggregators
  • Current RBI-SEBI co-regulation framework specifics
  • State-specific Money Transfer Operator (MTO) requirements
  • DPDP Act 2023 compliance intersections with your data handling
  • Your specific licence category requirements (PA, PG, AA)
```

**Button row:**

```
Button 1:   "Refine my question"           [Secondary, red border]
  → Goes back to Screen 1, lets user ask a narrower question

Button 2:   "Proceed with caution"          [Secondary, grey]
  → Shows a partial answer with prominent disclaimer throughout

Button 3:   "Start fresh with TrustLoop"   [Primary, black]
  → Goes to Screen 3 (Assumption Contract) for a new query
```

**Additional guidance box (below buttons):**
```
Background:   #FEF9EC
Border:       1px solid #FDE68A
Border radius: 8px
Padding:      10px 12px
Font size:    11px
Color:        #78350F

Content:
  "💡 Recommended: For SEBI compliance queries, consider:
   (1) SEBI official website — sebi.gov.in/legal/circulars
   (2) A SEBI-registered legal professional
   (3) Nasscom's fintech compliance resources
   (4) Refining your question to a general overview
       rather than specific compliance requirements"
```

---

## 10. Interaction States

### Assumption Item States

```
State: Unconfirmed (default)
  Number circle:    Light grey (#F3F4F6), grey text (#6B7280)
  Text:             Normal weight, dark (#374151)
  Right side:       "Edit" button in purple

State: Confirmed
  Number circle:    Light green (#D1FAE5), green text (#065F46)
  Number content:   "✓" checkmark
  Text:             Normal weight, dark
  Right side:       "Confirmed" pill in green

State: Corrected
  Number circle:    Light amber (#FEF3C7), amber text (#92400E)
  Number content:   "✎" pencil icon
  Text:             New corrected text, medium weight
  Right side:       "Corrected" pill in amber

State: Being edited (Screen 4)
  Container:        Light purple background (#F5F3FF)
  Border:           1px solid #C4B5FD
  Shows input field with current text pre-filled
  Save and Cancel buttons below
```

### Devil's Advocate Item States

```
State: Loading
  Shows pulsing amber dot with "Analysing..." text
  Items appear one by one with 300ms delay

State: Default (collapsed)
  Label:     Small uppercase label in item accent color
  Body:      12px grey text, 2 lines max
  "Explore →" button only on Item 1 (Reasoning Gap)

State: Expanded (Screen 7)
  Background:        Item's background color
  Border radius:     8px
  Padding:           10px 8px
  Shows full detailed explanation
  Shows action buttons (Regenerate / Dismiss)
```

### Button Hover States

```
All buttons:
  Transition:   opacity 0.15s ease
  Hover:        opacity 0.85

Primary buttons:
  Hover background:   #333333

Secondary buttons:
  Hover background:   #F8F7F4
```

---

## 11. Animation Specifications

### Screen Transitions

```
Type:         Fade + slide up
Duration:     280ms
Easing:       ease-out
Transform:    translateY(8px) → translateY(0)
Opacity:      0 → 1
```

### TrustLoop Detecting Pill

```
Dot pulse animation:
  Keyframes:    0%,100% { opacity: 1 } 50% { opacity: 0.4 }
  Duration:     1s
  Iteration:    infinite
```

### Answer Sections Streaming In

```
Each section:
  Delay:        i × 400ms (where i = section index 0–3)
  Animation:    fadeIn
  Keyframes:    from { opacity:0; transform: translateY(6px) }
                to   { opacity:1; transform: translateY(0) }
  Duration:     400ms
  Easing:       ease-out
```

### Devil's Advocate Items Appearing

```
Each item:
  Delay:        i × 300ms
  Animation:    fadeIn
  Duration:     300ms
  Easing:       ease-out
```

### Assumption Contract Appearance

```
Card entrance:
  Animation:    slideDown
  Keyframes:    from { opacity:0; transform: translateY(-8px) }
                to   { opacity:1; transform: translateY(0) }
  Duration:     350ms
  Easing:       ease-out
```

### Edge Case Card

```
Entrance:
  Animation:    shake then settle
  Keyframes:    0% { transform: translateX(0) }
                20% { transform: translateX(-4px) }
                40% { transform: translateX(4px) }
                60% { transform: translateX(-2px) }
                80% { transform: translateX(2px) }
                100% { transform: translateX(0) }
  Duration:     400ms
  Then fade in normally
```

---

## 12. Navigation Flow

### Forward Navigation (Next Button)

```
Screen 1 → Screen 2:    Set screen to "detecting"
Screen 2 → Screen 3:    Auto-advance after 1800ms
                         (for Query 5: auto-advance to Screen 8)
Screen 3 → Screen 4:    Click "Edit assumption 2" button
Screen 3 → Screen 5:    Click "Confirm all and get answer"
Screen 4 → Screen 5:    Click "Save and generate"
Screen 5 → Screen 6:    Auto-advance after all sections load
Screen 6 → Screen 7:    Click "Explore this →" on Item 1
Screen 7 → Screen 6:    Click "Dismiss" or "PLG applies"
Screen 7 → Screen 5:    Click "Regenerate for enterprise"
Screen 8 → Screen 3:    Click "Start fresh with TrustLoop"
Screen 8 → Screen 1:    Click "Refine my question"
```

### Backward Navigation (Previous Button)

```
Any screen → previous screen in sequence
Reset all state for that screen on backward navigation
```

### Query Switch

```
When user selects a new query:
  Reset to Screen 1
  Clear all confirmed assumptions
  Clear corrected assumption
  Clear answer visible array
  Clear DA visible array
  Clear expanded DA state
  Load new query's content
```

---

## 13. Prompt for Antigravity

Copy and paste this entire prompt into Google Antigravity:

---

> Build a high-fidelity interactive React prototype for TrustLoop — a feature inside Claude (the AI by Anthropic) that helps early-career professionals evaluate AI-generated outputs. Light mode only. The design should look exactly like claude.ai — clean, white, minimal, professional.
>
> The prototype has a query selector at the top showing 5 queries the user can switch between:
> 1. B2B SaaS Growth Strategy
> 2. EV Market Research
> 3. HR Tech Competitive Analysis
> 4. PM Career Preparation
> 5. SEBI Compliance (Edge Case — triggers a warning instead of normal flow)
>
> Below the query selector is a screen navigation row showing 8 clickable screens.
>
> The main area shows a Claude-like chat interface with a header showing "Claude" logo, a status dot, and "TrustLoop: ON" on the right.
>
> The 8 screens are:
>
> SCREEN 1 — CHAT: Normal Claude interface. Previous conversation shown. A button "Type query and send →" advances to Screen 2.
>
> SCREEN 2 — DETECTING: User's query appears as a user message bubble (black background, white text). A pulsing amber pill shows "TrustLoop is analysing your query..." Auto-advances to Screen 3 after 1.8 seconds. For Query 5, advances directly to Screen 8.
>
> SCREEN 3 — ASSUMPTION CONTRACT: A card with purple left border appears. Header: "◈ Before I answer — confirming your context". Shows 5 assumption items, each with a number circle, assumption text, and Edit button. Two action buttons: "Confirm all and get answer" (primary black) and "Edit assumption 2" (secondary). Confirming goes to Screen 5. Editing goes to Screen 4.
>
> SCREEN 4 — EDITING: Same assumptions list but Assumption 2 is in edit mode — shows a purple-tinted input box with the assumption pre-filled. User can type a correction. "Save and generate" button advances to Screen 5.
>
> SCREEN 5 — ANSWER: Claude message bubble appears with a green TrustLoop badge "✦ TrustLoop — context confirmed". Answer sections stream in one by one with 400ms delay between sections. 4 sections per query. Auto-advances to Screen 6 after all sections load.
>
> SCREEN 6 — DEVIL'S ADVOCATE: Below the answer (slightly truncated), an orange-bordered card appears with header "⚑ TrustLoop — before you use this answer". Shows 5 items: Reasoning Gap, What I Left Out, Where I'm Uncertain, Alternative Perspective, What Changes This Answer. Each item has a coloured label and specific text. Items fade in one by one with 300ms delay. First item has "Explore this →" button.
>
> SCREEN 7 — EXPANDED: Same as Screen 6 but first item (Reasoning Gap) is expanded. Shows detailed explanation in a light background box. Two buttons below: "Regenerate for enterprise" (primary) and "PLG applies to me" (secondary). Both collapse back to Screen 6.
>
> SCREEN 8 — EDGE CASE: Only for Query 5. A red-bordered card shows "⊗ TrustLoop — significant limitations found". Explains why SEBI compliance cannot be reliably answered. Lists what's missing. Three buttons: "Refine my question", "Proceed with caution", "Start fresh with TrustLoop". A yellow guidance box below suggests official resources.
>
> Use DM Sans font from Google Fonts. Colors: Purple #7C3AED for assumptions, Orange #F97316 for devil's advocate, Red #EF4444 for edge case, Green #22C55E for confirmed, Amber #F59E0B for detecting. Background #F8F7F4. Cards on white #FFFFFF.
>
> Bottom navigation shows screen counter "X of 8 screens" and Previous / Next buttons.
>
> Each of the 5 queries must have completely unique assumption sets, unique answer content with real India-specific data, and unique devil's advocate challenges. Query 5 skips directly from Screen 2 to Screen 8.
>
> Add smooth CSS animations: fade+slide for screen transitions, pulse for detecting dot, sequential fade-in for answer sections and DA items.

---

*Document version: 1.0 | Created: May 2026 | TrustLoop PM Assignment*
