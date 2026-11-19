export interface ProjectItem {
  id: string;
  title: string;
  category: "internship" | "project";
  shortDescription: string;
  fullDescription?: string;
  roleOrMetric: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  hasGallery?: boolean;
  galleryImages?: { url: string; title: string; caption: string }[];
  confidentialityNote?: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Rohan Holikatti",
    title: "Quantitative Research & Full-Stack Developer",
    subtitle: "B.Tech Chemical Engineering @ IIT Hyderabad (2023 - 2027)",
    tagline: "Building high-performance quantitative models, algorithmic trading engines, and institutional-grade analytics platforms.",
    bio: "Undergraduate at IIT Hyderabad with deep technical expertise in quantitative finance, machine learning pipelines, and full-stack data dashboards. Proven track record building short-rate futures models, walk-forward ML backtesting systems, linear programming optimization engines, and deterministic financial audit systems.",
    location: "Hyderabad, India",
    email: "ch23btech11021@iith.ac.in",
    github: "https://github.com/rohan216h",
    linkedin: "https://www.linkedin.com/in/rohan-holikatti-418892291/",
    cvUrl: "/Rohan_Holikatti_CV.pdf",
  },

  education: [
    {
      degree: "B.Tech in Chemical Engineering",
      institution: "Indian Institute of Technology (IIT) Hyderabad",
      period: "2023 – 2027",
      grade: "CGPA: 8.45 / 10",
      description: "Focus on Applied Mathematics, Linear Algebra, Machine Learning, and Computational Modeling.",
    },
    {
      degree: "Class XII (HSC)",
      institution: "R.S. Chandak High School & S.E.S. Jr. College of Arts & Science",
      period: "2023",
      grade: "75.00%",
      description: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune.",
    },
    {
      degree: "Class X (SSC)",
      institution: "Indian Model School, Akkalkot",
      period: "2021",
      grade: "94.40%",
      description: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune.",
    },
  ] as EducationItem[],

  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "TypeScript", "JavaScript", "HTML5", "CSS3", "SQL (MySQL, PostgreSQL)"],
    },
    {
      category: "Quantitative & Machine Learning",
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "Statsmodels",
        "SciPy",
        "PuLP (Linear Programming)",
        "Monte Carlo Simulation",
        "Walk-Forward Backtesting",
        "Time-Series Analysis (ADF, Hurst, ACF/PACF)",
        "Z-Score Mean Reversion",
        "PCA & Cointegration",
      ],
    },
    {
      category: "Full-Stack & Visualization",
      skills: ["Next.js (App Router)", "React", "Tailwind CSS", "Vite", "Node.js", "Express", "Streamlit", "Plotly", "Recharts"],
    },
    {
      category: "Tools & Infrastructure",
      skills: ["Git", "GitHub", "Vercel", "Railway", "VS Code", "Jupyter Notebook", "Google Colab", "Prisma ORM", "Linux/Bash"],
    },
  ] as SkillCategory[],

  relevantCourses: [
    "Machine Learning Specialization (Andrew Ng)",
    "Elementary Linear Algebra",
    "Applied Mathematics & Numerical Methods",
    "Calculus & Differential Equations",
    "Introduction to AI & Programming",
    "Computer Vision in Chemical & Life Sciences",
  ],

  internshipProjects: [
    {
      id: "quant-dashboard",
      title: "Quant Tools Dashboard",
      category: "internship",
      shortDescription:
        "Institutional-grade quantitative research and trading terminal consolidating 7 production analytics modules: RBA OIS rate expectations, 30D vs 90D basis transmission mechanics, Z-score mean reversion backtesting, and macro dislocation event studies.",
      fullDescription:
        "Engineered an institutional quantitative research terminal in Next.js and TypeScript consolidating empirical research notebooks. Features RBA OIS curve stripping across 19 rate decisions, CME SRA butterfly statistical arbitrage (Sharpe 1.18, 94.1% win rate), 30D vs 90D SOFR transmission decomposition, and extreme macro shock analysis (Yen carry unwind, SVB collapse).",
      roleOrMetric:
        "Quant Research Intern — Sharpe 1.18 (94.1% win rate) on CME SRA butterfly, Sharpe 4.88 on ASX YBA butterfly; analysed 5M+ 10-minute bars.",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts", "Python", "Pandas", "Statsmodels"],
      liveUrl: "https://quant-dashboard-nine.vercel.app/",
      githubUrl: "https://github.com/rohan216h/quant-dashboard",
      confidentialityNote: "Proprietary internal parameters and client data anonymized.",
      badge: "Institutional Quant Terminal",
    },
    {
      id: "yib-dashboard",
      title: "YIB Futures Candlestick Dashboard",
      category: "internship",
      shortDescription:
        "Interactive high-frequency futures analytics dashboard providing granular multi-timeframe candlestick visualization, implied yield tracking, roll-flag detection, and central bank data-release overlays.",
      fullDescription:
        "Built a responsive financial time series dashboard handling multi-year Australian bank bill and short-rate futures data. Implemented dynamic date-range filtering, customizable intraday aggregation intervals, contract roll identification, and macroeconomic calendar overlays.",
      roleOrMetric:
        "Quant Intern — Designed fast, interactive time-series viewer with dynamic implied yield curves and volume profile analytics.",
      techStack: ["Streamlit", "Plotly", "Python", "Pandas", "OpenPyXL", "Financial Time Series"],
      liveUrl: "https://yib-dashboard-dzrxd2syatwj6jhpgb3hvz.streamlit.app/",
      githubUrl: "https://github.com/rohan216h/yib-dashboard",
      confidentialityNote: "Tick data sample sanitized for public demonstration.",
      badge: "Futures Analytics",
    },
    {
      id: "macro-dashboard",
      title: "Global Macroeconomic Terminal",
      category: "internship",
      shortDescription:
        "4-country macroeconomic monitoring dashboard analyzing 6 macroeconomic indicators (Equities, 10Y Bond Yields, CPI Inflation, Policy Rates, Unemployment, and GDP) across the US, Australia, Japan, and New Zealand.",
      fullDescription:
        "Developed a comprehensive cross-asset macro terminal with automated data ingestion from FRED, BLS, BEA, ABS, and central bank releases. Built normalized comparative index views, policy rate hiking/easing path trackers, and multi-decade inflation regime analytics.",
      roleOrMetric:
        "Quant Intern — Automated FRED ingestion across 4 major sovereign economies with multi-decade historical time series and comparative cross-country analytics.",
      techStack: ["Python", "Streamlit", "Plotly", "FRED API", "Pandas", "Macroeconomic Modeling"],
      // NO live link and NO GitHub button per instructions
      hasGallery: true,
      galleryImages: [
        {
          url: "/images/macro-dashboard/yield_comparison.png",
          title: "10-Year Sovereign Bond Yields",
          caption: "Comparative multi-decade 10Y sovereign yields for US, Australia, Japan, and New Zealand.",
        },
        {
          url: "/images/macro-dashboard/policy_rates.png",
          title: "Central Bank Policy Rates",
          caption: "Monetary policy trajectories across the Fed, RBA, BOJ, and RBNZ tightening and easing cycles.",
        },
        {
          url: "/images/macro-dashboard/inflation_trends.png",
          title: "CPI Headline Inflation Dynamics",
          caption: "YoY consumer price index inflation trajectories contrasted against central bank 2% target bands.",
        },
      ],
      confidentialityNote: "Proprietary desk feeds omitted; powered by public macroeconomic series.",
      badge: "Empirical Macro Research",
    },
  ] as ProjectItem[],

  projects: [
    {
      id: "invoice-inquest",
      title: "Invoice Inquest",
      category: "project",
      shortDescription:
        "Autonomous accounts payable ingestion, audit, and decision engine featuring a 10-stage deterministic audit pipeline with Gemini 2.5 Flash Vision OCR, fuzzy PO matching, and anti-fraud bank account validation.",
      fullDescription:
        "Architected an enterprise accounts payable mission-control web app that produces reasoned, explainable disbursement decisions. AI is strictly quarantined to optical data extraction (OCR) via Google Gemini 2.5 Flash Vision, while downstream financial matching, line math audits, budget ceilings, and deduplication are executed by 100% deterministic, unit-tested TypeScript engines.",
      roleOrMetric:
        "Full-Stack Architect — Zero-hallucination deterministic decision engine with 24 passing Vitest suites and real-time SSE streaming.",
      techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini 2.5 Flash", "Vitest", "Zod", "PDF Parsing"],
      liveUrl: "https://invoice-inquest.vercel.app/",
      githubUrl: "https://github.com/rohan216h/invoice-inquest",
      badge: "AI & Deterministic Systems",
    },
    {
      id: "fpl-companion-dashboard",
      title: "FPL Companion Dashboard",
      category: "project",
      shortDescription:
        "Full-stack Fantasy Premier League analytics dashboard syncing live gameweek stats with JWT auth, 6-hour scheduled cron pipelines, fixture-difficulty heatmaps, and squad transfer analyzers.",
      fullDescription:
        "Engineered a production full-stack web application connecting directly to the official Premier League API. Features secure JWT authentication with bcrypt hashing, automated node-cron scheduled sync for 650+ players and 380 fixtures, interactive radar comparison charts, and an intelligent transfer suggestion algorithm.",
      roleOrMetric:
        "Full-Stack Developer — Synchronizing 650+ players and 380 fixtures with automated migrations and PostgreSQL on Railway.",
      techStack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Railway", "Vercel"],
      liveUrl: "https://fpl-dashboard-delta.vercel.app/",
      githubUrl: "https://github.com/rohan216h/fpl-dashboard",
      badge: "Full-Stack Web App",
    },
    {
      id: "fpl-predictor-dashboard",
      title: "FPL Points Predictor & Optimizer",
      category: "project",
      shortDescription:
        "Machine learning prediction pipeline and operations research optimizer for Fantasy Premier League using Random Forest and PuLP linear programming under budget and formation constraints.",
      fullDescription:
        "Engineered an end-to-end ML forecasting system evaluated via strict walk-forward backtesting on the 2024-25 season (MAE ≈ 1.02, beating Ridge and XGBoost). Solves squad selection as a linear program (PuLP) under £100m budget and formation rules, incorporating Bayesian shrinkage to balance current vs. historical player form.",
      roleOrMetric:
        "ML Engineer — Walk-forward validated Random Forest (MAE ≈ 1.02), PuLP linear programming optimizer, and 25+ leakage-safe features.",
      techStack: ["Python", "Random Forest", "PuLP", "Scikit-Learn", "Pandas", "NumPy", "Go Serverless", "Vercel"],
      liveUrl: "https://fpl-predictor-dashboard.vercel.app/",
      githubUrl: "https://github.com/rohan216h/fpl-predictor-dashboard",
      badge: "Machine Learning & LP",
    },
    {
      id: "spy-paper-trading",
      title: "SPY Intraday Quantitative Trading Strategy",
      category: "project",
      shortDescription:
        "Quantitative intraday research pipeline and walk-forward backtesting engine on 6+ years of 5-minute SPY data (118K+ bars) with 16 point-in-time features, statistical efficiency tests, and automated paper trading.",
      fullDescription:
        "Built a modular quantitative trading research framework from data ingestion to automated execution. Validated intraday market efficiency using ADF stationarity, Hurst exponent, and variance ratios. Engineered 16 point-in-time features with strict no-lookahead guarantees, achieving walk-forward IC = 0.014 (p < 0.02) and Sharpe = 0.77 on 30K+ test bars with Monte Carlo stress-testing.",
      roleOrMetric:
        "Quant Researcher — Walk-forward IC = 0.014 (p < 0.02), Sharpe 0.77 on 30K+ test bars, 118K+ bars ingested via Alpaca API.",
      techStack: ["Python", "Alpaca Market Data API", "Backtest Engine", "Statsmodels", "SciPy", "Monte Carlo", "GitHub Actions"],
      // NO live link per instructions; show GitHub button + gallery of screenshots
      githubUrl: "https://github.com/rohan216h/spy-paper-trading",
      hasGallery: true,
      galleryImages: [
        {
          url: "/images/spy-strategy/05_strategy_comparison.png",
          title: "Strategy Performance Comparison",
          caption: "Cumulative return equity curve: Rules-Based Baseline vs. Walk-Forward ML Strategy with transaction costs.",
        },
        {
          url: "/images/spy-strategy/04_strategy_a_train_results.png",
          title: "Strategy A Training Equity & Drawdown",
          caption: "In-sample training results showcasing equity progression and maximum drawdown profile.",
        },
        {
          url: "/images/spy-strategy/01_return_distribution.png",
          title: "5-Minute Return Distribution",
          caption: "Empirical return distribution vs. normal curve showing fat tails and kurtosis characteristics.",
        },
        {
          url: "/images/spy-strategy/03_intraday_seasonality.png",
          title: "Intraday Seasonality Profile",
          caption: "Volume and volatility U-shaped intraday smiles across the US market session.",
        },
        {
          url: "/images/spy-strategy/06_bootstrap_distribution.png",
          title: "Monte Carlo Bootstrap Distribution",
          caption: "Robustness validation via 1,000 randomized trade sequence reshuffles.",
        },
        {
          url: "/images/spy-strategy/07_parameter_sensitivity.png",
          title: "Parameter Sensitivity Heatmap",
          caption: "Robustness parameter sweep demonstrating stable performance plateaus across lookbacks and thresholds.",
        },
      ],
      badge: "Algorithmic Strategy & Engine",
    },
  ] as ProjectItem[],

  positions: [
    {
      role: "PR & Outreach Core",
      organization: "Finance and Consulting Club, IIT Hyderabad",
      period: "2024 – Present",
      description: "Driving strategic outreach, corporate partnerships, and industry speaker sessions for quantitative finance and consulting.",
    },
    {
      role: "Marketing Coordinator",
      organization: "Cultural and Literary Council, IIT Hyderabad",
      period: "2024 – 2025",
      description: "Spearheaded promotional campaigns, sponsorship acquisitions, and digital branding for campus-wide cultural initiatives.",
    },
  ],

  extracurriculars: [
    {
      title: "National Service Scheme (NSS)",
      organization: "IIT Hyderabad",
      description: "Active member contributing to rural education and community outreach programs.",
    },
    {
      title: "Intermediate Grade Drawing Examination",
      organization: "Government of Maharashtra",
      description: "Awarded certification demonstrating technical visual composition and drafting proficiency.",
    },
    {
      title: "Competitive Sports",
      organization: "Cricket & Football",
      description: "Active enthusiast and analytical follower of tactical football and international cricket.",
    },
  ],
};

