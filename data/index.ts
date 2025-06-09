export const DATA = {
  home: {
    hero: {
      name: "Guru Ramu",
      title:
        "Lead Full-Stack Engineer | LLM, MCP, Agent Workflows & Payments",
      subtitle:
        "I build AI-integrated full-stack systems — MCP servers, multi-agent orchestration, and payment-aware APIs — backed by 8 years of production backend, fintech, and high-traffic platform experience.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Production LLM and agent infrastructure on strong full-stack and fintech-grade backend foundations.",
      overview: [
        {
          name: "AI & Agent Infrastructure",
          level: 95,
          icon: "lucide:brain",
          color: "primary",
          description:
            "MCP servers, tool calling, multi-agent orchestration, LangChain/LangGraph-adjacent pipelines, and LLM API integration across Claude, GPT, and Gemini.",
        },
        {
          name: "Full-Stack & Backend",
          level: 93,
          icon: "lucide:code",
          color: "secondary",
          description:
            "Node.js, NestJS, TypeScript, Python, Java, React, Next.js, PostgreSQL, Redis, microservices, and event-driven REST APIs.",
        },
        {
          name: "Fintech & Payments",
          level: 92,
          icon: "lucide:credit-card",
          color: "success",
          description:
            "Payment integration, idempotency, webhooks, reconciliation-adjacent workflows, and machine-to-machine authorization (x402, EIP-3009).",
        },
        {
          name: "Cloud & Reliability",
          level: 90,
          icon: "lucide:cloud",
          color: "warning",
          description:
            "AWS, Docker, Kubernetes, CI/CD, observability — including platforms serving 10M+ queries/day with peak-traffic resilience.",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Client Testimonials",
      sectionDescription: "What clients say about working together",
      items: [],
    },
  },
  about: {
    profile: {
      name: "Guru Ramu",
      title:
        "Lead Full-Stack Engineer | LLM, MCP, Agent Workflows & Payments",
      image: "/guru-profile.png",
      description: [
        "AI-Integration Full-Stack Engineer with 8 years building production backend systems, microservices, payment workflows, and high-traffic platforms using Node.js, TypeScript, NestJS, Python, Java, React, Next.js, and PostgreSQL.",
        "I ship reliable LLM and agent infrastructure — Model Context Protocol (MCP) servers, multi-agent orchestration, tool calling, and payment-aware APIs — backed by fintech-grade patterns like idempotency, webhooks, event-driven architecture, and observability.",
        "At Animoca Brands I built a Credential MCP Server that cut an 8-step workflow to 1 command (87%) and a multi-agent onboarding orchestrator. Earlier, at Walmart Global Tech, I led a payment-integrated platform serving 10M+ queries/day with 40% reduction in handling time.",
      ],
    },
    education: [
      {
        title: "Bachelor of Technology in Mechatronics (Robotics & IoT)",
        date: "2014 - 2018",
        icon: "mdi:school",
        description:
          "Sastra University. Foundation in robotics, IoT systems, and embedded programming that informs a systems-level approach to software engineering.",
      },
    ],
    experience: [
      {
        title:
          "Lead Full Stack Engineer — Animoca Brands · AI Agent & Credential Infrastructure",
        date: "Aug 2024 - Present · Remote",
        icon: "mdi:briefcase",
        description: [
          "Led team to build Model Context Protocol (MCP) backend (Credential MCP Server) with 21 AI-accessible tools — cut 8 manual steps to 1 command (87%); onboarding 45–60 min → 4–6 min (~90% faster)",
          "Built scalable AIRKit backend APIs for portable credentials, smart accounts, and privacy-preserving identity; session-aware MCP flows reduced redundant input by ~60%",
          "Shipped execution services enabling AI agents to control ERC-4337 smart accounts across 7 EVM chains; tested on 5 AI clients (Claude, GPT, Codex, Gemini, Copilot)",
          "Implemented x402/EIP-3009 payment authorization on MOCA testnet — wallet-attested machine-to-machine API access replacing traditional API keys",
          "Built 4-stage Feature Onboarding Orchestrator (PRD → Architect → Engineer → QA) with state machine supervision, HITL gates, and MCP integrations; shipped MCP v1 in 1 week",
        ],
      },
      {
        title:
          "Software Engineer 3 — Walmart Global Tech · Chatbot & Payment Platform",
        date: "Oct 2021 - Jul 2024 · Chennai",
        icon: "mdi:monitor-dashboard",
        description: [
          "Led chatbot-as-a-service platform (React, Angular, Node.js, Java, PostgreSQL, ElasticSearch) serving 10M+ queries/day — reduced customer service handling time by ~40%",
          "Built payment integration and order-support workflows with idempotent event processing via Node.js, PostgreSQL, AWS SQS, retries, and distributed locking",
          "Optimized REST API response times ~30% via indexing, Redis caching, and query tuning; OAuth 2.0, JWT, RBAC — ~40% reduction in unauthorized access",
          "Automated CI/CD (GitHub Actions, Jenkins, Docker, Kubernetes) — ~40% faster deployments; supported seasonal high-traffic retail launches",
        ],
      },
      {
        title:
          "Full Stack Developer — Tricon Infotech · Real Estate Platform",
        date: "Jul 2020 - Aug 2021 · Bengaluru",
        icon: "mdi:home-city",
        description: [
          "Built full-stack real estate SaaS: property listings, lead management, customer workflows, document handling, and admin operations",
          "Developed React and Angular frontends and Node.js/Express REST APIs with PostgreSQL and MongoDB; implemented RBAC for admins, agents, and operations users",
          "Delivered search/filter workflows with pagination, advanced filters, and API/query optimization; integrated notifications, maps, and reporting",
        ],
      },
      {
        title:
          "Full Stack Engineer — Tata Consultancy Services · Healthcare",
        date: "Jun 2018 - Mar 2020 · Hyderabad",
        icon: "mdi:code-tags",
        description: [
          "Built enterprise healthcare applications for provider/patient operations, workflow management, reporting, and secure data access",
          "Developed Node.js/Express REST APIs and Angular/TypeScript frontend modules with OAuth 2.0, JWT, RBAC; wrote Python ETL/automation for reporting",
          "Reduced UI latency ~40% via query optimization, pagination, and caching; contributed to NRWL/NX monorepo and CI/CD (Jenkins, GitHub Actions, AWS CloudWatch)",
        ],
      },
    ],
    technologies: {
      frontend: {
        description:
          "Modern frontend development with React, Next.js, and enterprise UI frameworks.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "Angular", icon: "logos:angular-icon" },
          { name: "Vue.js", icon: "logos:vue" },
        ],
      },
      backend: {
        description:
          "Scalable APIs, microservices, and distributed backend systems.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "NestJS", icon: "logos:nestjs" },
          { name: "Java", icon: "logos:java" },
          { name: "Python", icon: "logos:python" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "Redis", icon: "logos:redis" },
        ],
      },
      aiTooling: {
        description:
          "LLM integration, MCP servers, multi-agent orchestration, and production agent tooling.",
        tools: [
          { name: "MCP", icon: "simple-icons:anthropic" },
          { name: "Claude", icon: "simple-icons:anthropic" },
          { name: "OpenAI", icon: "simple-icons:openai" },
          { name: "LangChain", icon: "simple-icons:langchain" },
          { name: "Zod", icon: "logos:zod" },
          { name: "SSE", icon: "lucide:radio" },
        ],
      },
      fintech: {
        description:
          "Payment integration, idempotency, webhooks, and machine-to-machine authorization.",
        tools: [
          { name: "Payments", icon: "lucide:credit-card" },
          { name: "Webhooks", icon: "lucide:webhook" },
          { name: "SQS", icon: "logos:amazon-aws" },
          { name: "x402", icon: "lucide:lock" },
          { name: "EIP-3009", icon: "logos:ethereum" },
          { name: "Idempotency", icon: "lucide:repeat" },
        ],
      },
      web3: {
        description:
          "Smart accounts, on-chain execution, and payment protocols — supporting proof, not the headline.",
        tools: [
          { name: "Solidity", icon: "logos:solidity" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "ERC-4337", icon: "logos:ethereum" },
          { name: "Ethers.js", icon: "logos:ethereum" },
          { name: "Hardhat", icon: "simple-icons:ethereum" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "Production AI agent infrastructure, multi-agent orchestration, and payment-aware full-stack systems",
    work: [
      {
        id: 1,
        title: "Credential MCP Server",
        description:
          "21-tool MCP server for the AIR credential lifecycle — schema, pricing, issuance, verification, and on-chain staking. Reduces 8 dashboard steps to 1 agent command.",
        image: "https://img.youtube.com/vi/8Qzu5BUiqns/maxresdefault.jpg",
        gallery: [
          "https://img.youtube.com/vi/8Qzu5BUiqns/maxresdefault.jpg",
          "https://img.youtube.com/vi/8Qzu5BUiqns/hqdefault.jpg",
          "https://img.youtube.com/vi/8Qzu5BUiqns/sddefault.jpg",
        ],
        category: "AI Infrastructure",
        details:
          "A Model Context Protocol server that exposes 21 structured tools for the complete AIR credential lifecycle — schema creation, pricing configuration, issuance programs, verification programs with on-chain deploy, and MOCA chain staking/payments. Reduces 8 manual dashboard steps to a single agent command (87% reduction in interaction time). Session-aware flows reduce redundant parameter input by ~60% across multi-step conversations.\n\nKey decision: Single tool registry with zod normalization for LLM-fuzzy inputs over scattered REST handlers — ensures consistent validation regardless of how the AI model phrases arguments.\n\nSupports dual transport (STDIO for Cursor/Claude, HTTP with P-256 auth for remote clients), x402 payment protocol for machine-to-machine payments, and MOCA chain smart contract interactions via viem.",
        github: "https://github.com/guru-web3/credential-mcp-server",
        video: "https://youtu.be/8Qzu5BUiqns",
        architecture:
          "graph LR\n  Agent[AI Agent] -->|natural language| MCP[MCP Server]\n  MCP --> Registry[Tool Registry]\n  Registry --> Schema[Schema Tools]\n  Registry --> Pricing[Pricing Tools]\n  Registry --> Issuance[Issuance Tools]\n  Registry --> Verify[Verification Tools]\n  Registry --> Chain[On-Chain Tools]\n  Schema --> API[AIR Credential API]\n  Pricing --> API\n  Issuance --> API\n  Verify --> API\n  Chain --> MOCA[MOCA Chain / Viem]",
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "MCP", icon: "simple-icons:anthropic" },
          { name: "NestJS", icon: "logos:nestjs" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "Zod", icon: "logos:zod" },
        ],
      },
      {
        id: 2,
        title: "Feature Onboarding Orchestrator",
        description:
          "Multi-agent pipeline from PRD to shipped code — 4-stage supervisor with human-in-the-loop gates, pluggable LLM runtimes, and MCP integrations.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
        ],
        category: "AI Infrastructure",
        details:
          "A 4-stage agentic pipeline (PRD, Architect, Engineer, QA) that takes a feature from product requirement to shipped code with minimal human intervention. Deterministic state machine supervisor ensures predictable stage transitions. Pluggable LLM runtimes (Claude SDK, pi-ai), MCP integrations (GitHub, Jira, Notion, Figma), human-in-the-loop approval gates, SSE streaming with typed events, workspace management with cross-repo architecture discovery, and run caching.\n\nKey decision: Deterministic state machine supervisor over LLM-based orchestrator — predictable stage transitions and clear failure modes vs. non-deterministic agent routing.",
        github: "https://github.com/guru-web3/feature-onboarding-orchestrator",
        architecture:
          "graph LR\n  PRD[PRD Agent] -->|approve| Arch[Architect Agent]\n  Arch -->|approve| Eng[Engineer Agent]\n  Eng -->|approve| QA[QA Agent]\n  QA -->|pass| Ship[Shipped Code]\n  SM[State Machine] -.->|supervises| PRD\n  SM -.->|supervises| Arch\n  SM -.->|supervises| Eng\n  SM -.->|supervises| QA\n  MCP[MCP Integrations] -.-> Eng\n  MCP -.-> QA",
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Claude SDK", icon: "simple-icons:anthropic" },
          { name: "Express", icon: "simple-icons:express" },
          { name: "MCP", icon: "simple-icons:anthropic" },
        ],
      },
      {
        id: 3,
        title: "AIR Agentic Wallet Skills",
        description:
          "MCP service enabling AI to control ERC-4337 smart accounts — sign, transfer, approve, and execute across 7 chains. Tested on 5 AI models.",
        image: "https://img.youtube.com/vi/_mDAqzr_GIU/maxresdefault.jpg",
        gallery: [
          "https://img.youtube.com/vi/_mDAqzr_GIU/maxresdefault.jpg",
          "https://img.youtube.com/vi/_mDAqzr_GIU/hqdefault.jpg",
          "https://img.youtube.com/vi/_mDAqzr_GIU/sddefault.jpg",
        ],
        category: "AI + Web3",
        details:
          "MCP server and agent skills that teach AI models (Claude, GPT, Codex, Gemini, Copilot) to operate ERC-4337 smart accounts through AIR's wallet infrastructure. Zero-UI wallet operations: personal signing, typed data, balance checks, token transfers, ERC-20/721/1155 approvals, NFT transfers, and arbitrary contract execution via GOAT SDK. Dual P-256 signature model for security. Tested across 5 AI models on 7 EVM chains.\n\nKey decision: P-256 dual-signature model over secp256k1 for native ERC-4337 UserOp compatibility and WebAuthn alignment.",
        github: "https://github.com/guru-web3/air-agentic-wallet-skill",
        video: "https://youtu.be/_mDAqzr_GIU",
        architecture:
          "graph LR\n  Agent[AI Agent] -->|MCP/Skill| Server[MCP Server]\n  Server --> GOAT[GOAT SDK]\n  GOAT --> Wallet[ERC-4337 Smart Account]\n  Wallet --> Sign[Personal Sign]\n  Wallet --> Transfer[Token Transfer]\n  Wallet --> NFT[NFT Operations]\n  Wallet --> Execute[Contract Execution]\n  Wallet -->|P-256 dual sig| Chains[7 EVM Chains]",
        tech: [
          { name: "ERC-4337", icon: "logos:ethereum" },
          { name: "GOAT SDK", icon: "logos:ethereum" },
          { name: "P-256", icon: "lucide:key-round" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "MCP", icon: "simple-icons:anthropic" },
        ],
      },
      {
        id: 4,
        title: "x402 Payment Protocol Demo",
        description:
          "Machine-to-machine payment flow on MOCA testnet — HTTP 402 gating with EIP-3009. No API keys, no registration.",
        image: "https://img.youtube.com/vi/LB-5O4YwTdQ/maxresdefault.jpg",
        gallery: [
          "https://img.youtube.com/vi/LB-5O4YwTdQ/maxresdefault.jpg",
          "https://img.youtube.com/vi/LB-5O4YwTdQ/hqdefault.jpg",
          "https://img.youtube.com/vi/LB-5O4YwTdQ/sddefault.jpg",
        ],
        category: "Fintech",
        details:
          "Standalone demonstration of the x402 HTTP payment protocol for machine-to-machine payments. Server gates API endpoints behind 402 Payment Required responses with x402-encoded requirements. Client automatically detects 402, signs EIP-3009 transferWithAuthorization on MOCA testnet, and retries with proof. Server settles on-chain via viem and returns 200. Self-serve API access with zero registration or API key setup.\n\nKey decision: EIP-3009 transferWithAuthorization over standard approve+transfer — single atomic transaction eliminates the two-step flow and reduces agent interaction complexity.",
        github: "https://github.com/guru-web3/x402-payment-demo",
        video: "https://youtu.be/LB-5O4YwTdQ",
        architecture:
          "graph LR\n  Client[Agent/Client] -->|GET /api| Server[Express Server]\n  Server -->|402 + x402 header| Client\n  Client -->|sign EIP-3009| Client\n  Client -->|retry + payment proof| Server\n  Server --> Settle[Settlement Service]\n  Settle -->|transferWithAuthorization| MOCA[MOCA Chain]\n  MOCA -->|confirmed| Server\n  Server -->|200 + data| Client",
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Express", icon: "simple-icons:express" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "x402", icon: "lucide:credit-card" },
          { name: "EIP-3009", icon: "logos:ethereum" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Open to senior full-stack + AI roles and selective freelance projects. Let's connect.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5997196691087!2d80.22718!3d12.92219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1c6d36b4f1%3A0x1b1b0b77447f6d15!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1715701234567!5m2!1sen!2sin",
      address: "Chennai, India (Remote)",
    },
  },
  morphingTexts: {
    about: ["Builder", "Engineer", "Architect"] as const,
    projects: ["My Work", "Projects", "Systems", "Shipped"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Guru Ramu",
    description:
      "AI-Integration Full-Stack Engineer. MCP servers, agent orchestration, and payment-aware APIs — open to full-time and freelance work.",
    contact: {
      email: "gururamu4497@gmail.com",
      location: "Chennai, India (Remote)",
    },
    socialLinks: [
      { platform: "X", url: "https://x.com/guru_ram44", icon: "simple-icons:x" },
      {
        platform: "GitHub",
        url: "https://github.com/guru-web3",
        icon: "mdi:github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/gururamu",
        icon: "mdi:linkedin",
      },
    ],
    services: [
      "MCP Servers & LLM Integration",
      "Multi-Agent Orchestration",
      "Full-Stack SaaS (Next.js, NestJS)",
      "Payment & API Automation",
    ],
  },
} as const;
