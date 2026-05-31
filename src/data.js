// TrustLoop — Complete query data for all 5 demo queries
// Sourced from Architecture.md spec

export const queries = [
  {
    id: 1,
    label: "B2B SaaS Growth",
    queryText: "What are the key growth strategies for a B2B SaaS startup in India in 2026?",
    assumptions: [
      { text: "Your startup is early stage — pre Series A with under 50 customers", editable: true },
      { text: "You are targeting business customers (B2B), not individual consumers", editable: true },
      { text: "You want digital-first strategies — not field sales or offline channels", editable: true },
      { text: "Your marketing budget is limited — under ₹10 lakhs per month", editable: true },
      { text: "You need strategies for 2026 Indian market conditions specifically", editable: false },
    ],
    editAssumptionIndex: 1,
    editCorrectedText: "You are targeting both business AND consumer customers",
    editUserInput: "Actually targeting both B2B and B2C customers",
    answerTitle: "Growth strategies for your early-stage B2B SaaS startup in India (2026)",
    answerSections: [
      {
        title: "1. Product-Led Growth (PLG)",
        body: "Let the product sell itself. Offer a freemium tier or a 14-day free trial that lets users experience your core value before paying. Indian B2B buyers are highly cost-sensitive — they need to feel ROI before committing budget. This is how Zoho grew to ₹8,700 Cr in revenue without a large outbound sales team. PLG works best when your product has a clear 'aha moment' within the first session. If your product takes weeks to show value, PLG alone won't work."
      },
      {
        title: "2. Community-Led Growth",
        body: "Build a community around the problem you solve — not just your product. LinkedIn founder communities, WhatsApp groups for your target buyer persona, and city-specific startup circles in Bangalore, Mumbai, and Hyderabad are highly effective distribution channels unique to India. Razorpay and Hasura built significant early traction through developer communities before investing in paid acquisition."
      },
      {
        title: "3. Content and SEO for Inbound",
        body: "Indian SMBs and startup teams actively search Google for solutions before evaluating products. Invest in content that ranks for pain-point keywords — not product keywords. A blog post titled 'how to manage payroll for a 50-person team in India' will outperform a page titled 'best HR software India' at your budget level. Target both English and Hinglish queries for maximum reach."
      },
      {
        title: "4. Channel and Reseller Partnerships",
        body: "Partner with CAs, business consultants, IT resellers, and industry associations who already have trusted relationships with your target buyers. A referral from a trusted CA closes an SMB deal faster than any cold email sequence. Tally built its ₹1000+ Cr business almost entirely through CA partnerships — this model is uniquely powerful in the Indian market."
      }
    ],
    devilsAdvocate: [
      {
        label: "Reasoning gap",
        icon: "⚠",
        color: "#92400E",
        bgColor: "#FEFCE8",
        borderColor: "#FDE68A",
        text: "Point 1 (PLG) assumes your deal size is under ₹2 lakhs annually. If your ACV exceeds ₹5 lakhs, enterprise sales motion — not PLG — is typically needed. PLG does not close large-ticket B2B deals without a human sales layer. I don't know your actual price point.",
        explorable: true,
        expandedDetail: "PLG works optimally when:\n— Deal size is under ₹2L annually\n— Users can self-serve onboard in under 30 minutes\n— Product value is experienced within the first session\n— Champion within the company can push purchase without committee approval\n\nFor deals above ₹5L annually, you typically need:\n— A dedicated sales development representative (SDR)\n— A demo-led sales process\n— Legal and procurement involvement\n— Multi-stakeholder buy-in\n\nWhat is your actual annual contract value (ACV)?",
        regenerateLabel: "Regenerate for enterprise",
        dismissLabel: "PLG applies to me"
      },
      {
        label: "What I left out",
        icon: "◎",
        color: "#1E40AF",
        bgColor: "#EFF6FF",
        borderColor: "#BFDBFE",
        text: "I excluded outbound sales, account-based marketing (ABM), offline events, and trade show participation. I judged these as secondary for an early-stage startup with limited budget. However, in certain verticals — manufacturing, logistics, government — offline relationship-building is actually the primary channel and digital-first strategies underperform significantly.",
        explorable: false
      },
      {
        label: "Where I'm uncertain",
        icon: "~",
        color: "#6B21A8",
        bgColor: "#FAF5FF",
        borderColor: "#E9D5FF",
        text: "The competitive dynamics in Indian B2B SaaS shifted significantly in H2 2025 with increased consolidation in HR-tech, fintech, and logistics-tech verticals. My strategies are based on patterns from 2022–2025. The fundraising environment in early 2026 may mean PLG timelines to monetisation are longer than I suggested.",
        explorable: false
      },
      {
        label: "Alternative perspective",
        icon: "↔",
        color: "#065F46",
        bgColor: "#ECFDF5",
        borderColor: "#A7F3D0",
        text: "Several Indian SaaS founders — including Girish Mathrubootham (Freshdesk) and Shashank Kumar (Razorpay) — argue that brand trust must be established before aggressive growth investment. My answer assumes performance-first growth. If you are in a crowded category with strong incumbents, brand differentiation may deliver better ROI than the tactical strategies I outlined.",
        explorable: false
      },
      {
        label: "What changes this answer",
        icon: "✦",
        color: "#7C2D12",
        bgColor: "#FFF7ED",
        borderColor: "#FED7AA",
        text: "This answer changes significantly if:\n— Your ACV exceeds ₹5L (enterprise sales motion needed)\n— Your buyers are in Tier 2/3 cities (offline channels matter more)\n— Your product is in fintech or healthtech (regulatory constraints apply)\n— Your founding team has strong enterprise networks (outbound may outperform PLG)\n— You have already raised Series A (budget constraints no longer apply)",
        explorable: false
      }
    ]
  },
  {
    id: 2,
    label: "EV Market Research",
    queryText: "What is the market size and opportunity for electric vehicles in India in 2026?",
    assumptions: [
      { text: "You want overall EV market data — not a specific segment like 2-wheelers, 4-wheelers, or commercial vehicles", editable: true },
      { text: "This is for a business presentation or investment research — not academic study", editable: true },
      { text: "You need India-specific data — not global EV market figures", editable: false },
      { text: "You want forward-looking opportunity sizing — not just historical market data", editable: true },
      { text: "You need data in INR and USD — not just one currency", editable: true },
    ],
    editAssumptionIndex: 0,
    editCorrectedText: "You want 2-wheeler EV segment data specifically",
    editUserInput: "Specifically looking at 2-wheeler EV segment only",
    answerTitle: "India EV Market — Size, Segments, and Opportunity (2026)",
    answerSections: [
      {
        title: "1. Overall Market Size",
        body: "The Indian EV market is estimated at ₹1.2 lakh crore ($14.4 billion) in 2026, growing at a CAGR of 49% from 2022. India is now the third-largest EV market globally by volume, behind China and the United States. The government's FAME-III scheme and Production Linked Incentive (PLI) scheme have accelerated adoption significantly since 2024."
      },
      {
        title: "2. Segment Breakdown",
        body: "2-wheelers dominate with 78% of EV sales by volume — led by Ola Electric, TVS, and Bajaj. 4-wheelers represent 18% by volume but 54% by revenue — led by Tata Motors with 62% market share in passenger EVs. Commercial vehicles (3-wheelers, buses, trucks) represent 4% by volume but are the fastest-growing segment at 87% CAGR, driven by last-mile logistics demand."
      },
      {
        title: "3. Key Growth Drivers in 2026",
        body: "Three forces are driving accelerated adoption: (1) Petrol prices above ₹120/litre making TCO parity clear for most buyer segments. (2) Charging infrastructure crossing 1 lakh public charging points nationally — eliminating range anxiety as a primary objection. (3) EV financing becoming mainstream with EMI rates for EVs now at par with ICE vehicles across all major banks and NBFCs."
      },
      {
        title: "4. Investment and Startup Opportunity",
        body: "The highest-growth adjacent opportunities are in: EV charging infrastructure (₹45,000 Cr opportunity), battery swapping for 2-wheelers and 3-wheelers (₹18,000 Cr), fleet management SaaS for commercial EVs, and EV insurance and financing products. Direct EV manufacturing is highly capital-intensive with strong incumbents — the software and services layer is significantly more accessible for new entrants."
      }
    ],
    devilsAdvocate: [
      {
        label: "Reasoning gap",
        icon: "⚠",
        color: "#92400E",
        bgColor: "#FEFCE8",
        borderColor: "#FDE68A",
        text: "The market size figures I cited (₹1.2 lakh crore) vary significantly across research sources. NITI Aayog, CEEW, and private consultancies like Redseer give estimates ranging from ₹80,000 Cr to ₹1.8 lakh Cr for 2026. I used mid-range estimates. If you are using this for investor presentations, verify against a paid research report — these numbers will be questioned.",
        explorable: true,
        expandedDetail: "Key source discrepancies:\n— NITI Aayog (2024 report): ₹95,000 Cr by 2026\n— CEEW (2025 update): ₹1.1 lakh Cr by 2026\n— Redseer Consulting: ₹1.4 lakh Cr by 2026\n— JMK Research: ₹1.8 lakh Cr by 2026\n\nThe variation stems from different definitions of 'market size' — some include only vehicle sales, others include charging infrastructure, battery swapping, and financing.\n\nFor investor presentations, I recommend:\n— Citing 2-3 sources with ranges\n— Specifying which segments are included\n— Using a bottom-up TAM/SAM/SOM model for your specific segment",
        regenerateLabel: "Use conservative estimates",
        dismissLabel: "Mid-range works for me"
      },
      {
        label: "What I left out",
        icon: "◎",
        color: "#1E40AF",
        bgColor: "#EFF6FF",
        borderColor: "#BFDBFE",
        text: "I did not cover: state-level variation in EV adoption (Maharashtra and Karnataka lead significantly), rural vs urban demand differences, the impact of recent battery price deflation from Chinese imports, or the 2025 policy changes around FAME-III subsidy structure. All of these affect the opportunity sizing meaningfully.",
        explorable: false
      },
      {
        label: "Where I'm uncertain",
        icon: "~",
        color: "#6B21A8",
        bgColor: "#FAF5FF",
        borderColor: "#E9D5FF",
        text: "EV market data changes quarterly. My figures are based on data available through mid-2025. Ola Electric's IPO performance and subsequent market share shifts in H2 2025 may have changed competitive dynamics significantly. I cannot confirm current market share figures with high confidence.",
        explorable: false
      },
      {
        label: "Alternative perspective",
        icon: "↔",
        color: "#065F46",
        bgColor: "#ECFDF5",
        borderColor: "#A7F3D0",
        text: "Several automotive analysts argue that India's EV adoption is overhyped — pointing to charging infrastructure gaps in Tier 2/3 cities, high battery replacement costs, and ongoing grid reliability issues. My answer reflects the optimistic consensus view. A bear case analysis would show CAGR of 28–32% rather than 49%.",
        explorable: false
      },
      {
        label: "What changes this answer",
        icon: "✦",
        color: "#7C2D12",
        bgColor: "#FFF7ED",
        borderColor: "#FED7AA",
        text: "This answer changes if:\n— You need segment-specific data (2W vs 4W vs commercial)\n— Your geography focus is Tier 2/3 cities vs metros\n— You need 5-year projections rather than 2026 snapshot\n— You are evaluating a specific use case (fleet, retail, B2B)\n— Recent policy changes post-March 2026 are material to your analysis",
        explorable: false
      }
    ]
  },
  {
    id: 3,
    label: "HR Tech Positioning",
    queryText: "How should I position my HR tech product against Darwinbox and Keka in the Indian market?",
    assumptions: [
      { text: "Your product targets SMBs (50–500 employees) — not enterprise (500+ employees)", editable: true },
      { text: "You are positioning against Darwinbox and Keka specifically — not the full HR tech landscape including Workday, SAP", editable: false },
      { text: "Your product is a full-stack HRMS — not a point solution like payroll-only or attendance-only", editable: true },
      { text: "You are early stage — not yet at ₹10 Cr ARR", editable: true },
      { text: "You want differentiation strategy — not a feature comparison matrix", editable: true },
    ],
    editAssumptionIndex: 2,
    editCorrectedText: "Your product is a payroll-first solution with HRMS add-ons",
    editUserInput: "We are payroll-first, not full-stack HRMS",
    answerTitle: "Positioning against Darwinbox and Keka — 4 differentiation strategies",
    answerSections: [
      {
        title: "1. Where Darwinbox and Keka are vulnerable",
        body: "Darwinbox dominates enterprise (1000+ employees) with strong CHRO relationships and global expansion focus. Its weakness: SMBs find it over-engineered, expensive (₹350–600/employee/month), and slow to implement (3–6 months). Keka is strong at 100–500 employee companies and is praised for UI/UX. Its weakness: limited customisation, weak analytics, and poor integration ecosystem. Your window: SMBs that have outgrown basic payroll tools but find Keka limiting and Darwinbox unaffordable."
      },
      {
        title: "2. Win on time-to-value",
        body: "Position against the 3–6 month Darwinbox implementation nightmare. If you can get a 200-person company live in 3 weeks, that is your single most powerful differentiator. Indian HR managers are time-poor. 'Live in 21 days or your money back' is a positioning statement that will consistently outperform feature comparisons in demos."
      },
      {
        title: "3. Win by going vertical",
        body: "Darwinbox and Keka are horizontal products built for all industries. Pick one vertical — manufacturing, logistics, retail, or IT services — and build features, compliance workflows, and integrations specific to that vertical. A logistics company managing 500 gig workers has completely different HR needs than a 500-person IT services firm. Vertical specificity commands 30–40% premium pricing and dramatically reduces churn."
      },
      {
        title: "4. Win on human support",
        body: "Both Darwinbox and Keka receive consistent criticism for post-sales support quality. G2 and Capterra India reviews show 'poor customer support' as the #1 complaint for both. Position with a dedicated customer success manager for every account — not a shared support queue. In the Indian mid-market, trust is built through relationships, not tickets."
      }
    ],
    devilsAdvocate: [
      {
        label: "Reasoning gap",
        icon: "⚠",
        color: "#92400E",
        bgColor: "#FEFCE8",
        borderColor: "#FDE68A",
        text: "My positioning advice assumes you have feature parity with Keka on core HRMS functions — payroll, leave management, performance management, and attendance. If you are missing any of these, no amount of positioning will overcome the feature gap in demos. Buyers will eliminate you in the first evaluation stage regardless of your differentiation narrative.",
        explorable: true,
        expandedDetail: "Core feature parity checklist for competing with Keka:\n— Payroll processing with statutory compliance (PF, ESI, PT, TDS)\n— Leave management with configurable policies\n— Attendance tracking with biometric/geo-fencing integration\n— Performance management (OKRs or KRAs)\n— Employee self-service portal\n— Mobile app for employees\n\nIf you are missing 2+ of these, consider:\n— Positioning as a point solution (payroll-only or attendance-only)\n— Partnering with Keka/Darwinbox as an integration rather than competing\n— Targeting a niche segment where these features are less critical",
        regenerateLabel: "Regenerate as point solution",
        dismissLabel: "We have feature parity"
      },
      {
        label: "What I left out",
        icon: "◎",
        color: "#1E40AF",
        bgColor: "#EFF6FF",
        borderColor: "#BFDBFE",
        text: "I did not address: pricing strategy against Keka's ₹125–200/employee/month range, the role of G2 and Capterra reviews in Indian HR tech purchase decisions, the increasing importance of WhatsApp integration in Indian HRMS products, or the impact of Darwinbox's recent Series D on their SMB push.",
        explorable: false
      },
      {
        label: "Where I'm uncertain",
        icon: "~",
        color: "#6B21A8",
        bgColor: "#FAF5FF",
        borderColor: "#E9D5FF",
        text: "Keka raised a significant funding round in late 2025 and has been aggressively expanding downmarket into the 50–200 employee segment. Their current product roadmap and pricing may have changed materially from what I described. Verify current Keka pricing and positioning before building your sales playbook around this analysis.",
        explorable: false
      },
      {
        label: "Alternative perspective",
        icon: "↔",
        color: "#065F46",
        bgColor: "#ECFDF5",
        borderColor: "#A7F3D0",
        text: "Some Indian HR tech investors argue that competing head-to-head with Darwinbox and Keka is a losing strategy regardless of differentiation — both have achieved significant network effects and switching costs. The alternative view: partner with them (build integrations, become their preferred add-on for specific capabilities) rather than compete directly.",
        explorable: false
      },
      {
        label: "What changes this answer",
        icon: "✦",
        color: "#7C2D12",
        bgColor: "#FFF7ED",
        borderColor: "#FED7AA",
        text: "This analysis changes if:\n— Your target segment is enterprise (1000+ employees)\n— You have a point solution rather than full HRMS\n— Your geography focus is outside metro cities\n— You are targeting a specific industry vertical already\n— Your product has a fundamentally different delivery model (WhatsApp-first, mobile-first, AI-native)",
        explorable: false
      }
    ]
  },
  {
    id: 4,
    label: "PM Career Prep",
    queryText: "What skills should I develop to become a product manager at a top Indian startup in 2026?",
    assumptions: [
      { text: "You are early in your career — 0–3 years of experience — targeting your first PM role", editable: true },
      { text: "You are targeting product roles at funded Indian startups — not MNCs or service companies", editable: true },
      { text: "You have some technical background — engineering, data, or design — but are not a career PM yet", editable: true },
      { text: "You want practical skill-building advice — not MBA or certification recommendations", editable: true },
      { text: "You want to join as an APM or PM1 — not senior PM or Group PM", editable: true },
    ],
    editAssumptionIndex: 1,
    editCorrectedText: "You are targeting product roles at both funded startups and MNCs like Google India",
    editUserInput: "I'm open to both startups and MNCs like Google India",
    answerTitle: "Skills to become a PM at a top Indian startup in 2026",
    answerSections: [
      {
        title: "1. Three non-negotiable hard skills",
        body: "In 2026, Indian startup PMs are expected to bring: (1) SQL proficiency — you must be able to pull your own data without waiting for a data analyst. Every PM interview at Razorpay, Zepto, CRED, or PhonePe includes a case study where you need to define metrics and query logic. (2) Wireframing in Figma — not design skills, but the ability to communicate product ideas visually without always needing a designer in the room. (3) Cohort analysis and funnel thinking — understanding retention, activation, and conversion at the user journey level, not just surface metrics."
      },
      {
        title: "2. Communication and ruthless prioritisation",
        body: "Indian startup PMs operate in resource-constrained environments where saying no is more important than saying yes. Practice writing one-pagers — a single page that defines the problem, the user, the solution, the success metric, and why now. Every top Indian startup PM will tell you that the ability to write a clear PRD that an engineer trusts is worth more than any certification."
      },
      {
        title: "3. Build a portfolio without a PM title",
        body: "The most common reason candidates get rejected at Meesho, Swiggy, or Urban Company is zero product portfolio. You do not need a PM title to build one: (1) Teardown 3 products you use daily — write a 2-page doc on what you would change and why. (2) Build a side project — even a no-code tool on Glide or Bubble counts if you defined the problem, built the solution, and measured outcomes. (3) Contribute to open-source or volunteer your PM skills to an NGO or early-stage startup."
      },
      {
        title: "4. What Indian PM interviews actually test in 2026",
        body: "Based on reported interview experiences at top Indian startups in 2025–2026: 60% of PM rounds are now data-heavy case studies, 25% are execution and prioritisation frameworks, 10% are product design, and 5% are estimation. The era of purely framework-based PM interviews (CIRCLES, HEART) is largely over at tier-1 Indian startups. They want to see how you think with data — not how you memorise frameworks."
      }
    ],
    devilsAdvocate: [
      {
        label: "Reasoning gap",
        icon: "⚠",
        color: "#92400E",
        bgColor: "#FEFCE8",
        borderColor: "#FDE68A",
        text: "My advice assumes you are coming from an engineering or analytical background. If you are transitioning from sales, operations, or a non-technical role, the skill priority order changes significantly. Non-technical PMs at Indian startups often need to invest 3–4x more time in SQL and technical credibility building before they can compete with engineering graduates for the same APM roles.",
        explorable: true,
        expandedDetail: "If transitioning from a non-technical background:\n— Start with SQL: Complete Mode Analytics SQL tutorial (free, 40 hours)\n— Learn basic Python: Enough to write scripts, not production code\n— Build technical credibility through side projects with measurable outcomes\n— Target companies that value domain expertise over technical skills (e.g., fintech if from banking, healthtech if from healthcare)\n\nCompanies more open to non-technical PMs:\n— Swiggy (operations background valued)\n— Zomato (marketing/ops background)\n— PolicyBazaar (insurance domain expertise)\n— PharmEasy (healthcare domain)\n\nCompanies that strongly prefer technical PMs:\n— Razorpay, CRED, Zepto, Groww",
        regenerateLabel: "Regenerate for non-tech background",
        dismissLabel: "I have a tech background"
      },
      {
        label: "What I left out",
        icon: "◎",
        color: "#1E40AF",
        bgColor: "#EFF6FF",
        borderColor: "#BFDBFE",
        text: "I did not cover: the role of MBA programs (IIM, ISB) in accessing PM roles at certain companies like Flipkart and Bain Capital Ventures portfolio companies, the emerging importance of AI/LLM product skills at AI-native startups, the value of PM communities like Ness Labs India and Lenny's Newsletter India cohorts, or the specific PM hiring process at each major Indian startup.",
        explorable: false
      },
      {
        label: "Where I'm uncertain",
        icon: "~",
        color: "#6B21A8",
        bgColor: "#FAF5FF",
        borderColor: "#E9D5FF",
        text: "The PM job market at Indian startups went through significant contraction in 2023–2024 and recovery in 2025. I am uncertain about current hiring volumes and whether the data-heavy interview trend I described applies equally across company stages — Series A companies may still prefer framework-based candidates while Series C+ companies lean data-heavy.",
        explorable: false
      },
      {
        label: "Alternative perspective",
        icon: "↔",
        color: "#065F46",
        bgColor: "#ECFDF5",
        borderColor: "#A7F3D0",
        text: "Several senior Indian PMs — including Shreyas Doshi and Nikhyl Singhal — argue that the most important PM skill is neither data nor design but influence without authority. Their view: technical skills are table stakes that can be learned on the job; the rare skill is the ability to align engineers, designers, and business stakeholders without formal power. My answer prioritises hard skills — their view would prioritise soft skills.",
        explorable: false
      },
      {
        label: "What changes this answer",
        icon: "✦",
        color: "#7C2D12",
        bgColor: "#FFF7ED",
        borderColor: "#FED7AA",
        text: "This advice changes significantly if:\n— You are targeting a PM role at an MNC (Google, Meta, Microsoft India) rather than a funded Indian startup\n— You already have 3+ years of product experience and are targeting senior PM roles\n— You are targeting a specific vertical like fintech, healthtech, or edtech where domain expertise matters more than generic PM skills\n— You are outside the 6 major metro cities where PM opportunities are concentrated",
        explorable: false
      }
    ]
  },
  {
    id: 5,
    label: "SEBI Compliance ⚠",
    queryText: "What are the exact SEBI compliance requirements for a fintech SaaS platform in Q1 2026?",
    isEdgeCase: true,
    assumptions: [],
    answerSections: [],
    devilsAdvocate: [],
    edgeCase: {
      warningBody: "This query requires highly specific, time-sensitive regulatory information about SEBI compliance for fintech platforms. TrustLoop has flagged this response as HIGH RISK for the following reasons:",
      bullets: [
        "SEBI issued new circulars for fintech intermediaries in Q4 2025 that may not be fully reflected in my knowledge",
        "RBI and SEBI co-regulation requirements for payment aggregators changed materially in late 2025",
        "Penalties for non-compliance can be severe — ₹25 lakhs per violation plus potential licence suspension",
        "The correct answer depends heavily on your specific product type, licence category, and transaction volumes"
      ],
      cautionText: "Using this answer for actual compliance decisions without verification from a SEBI-registered legal professional could expose your company to regulatory risk.",
      missingLabel: "What I cannot reliably answer:",
      missingItems: [
        "Q1 2026 SEBI circular updates for payment aggregators",
        "Current RBI-SEBI co-regulation framework specifics",
        "State-specific Money Transfer Operator (MTO) requirements",
        "DPDP Act 2023 compliance intersections with your data handling",
        "Your specific licence category requirements (PA, PG, AA)"
      ],
      guidance: "💡 Recommended: For SEBI compliance queries, consider:\n(1) SEBI official website — sebi.gov.in/legal/circulars\n(2) A SEBI-registered legal professional\n(3) Nasscom's fintech compliance resources\n(4) Refining your question to a general overview rather than specific compliance requirements"
    }
  }
];
