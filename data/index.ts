export const DATA = {
  home: {
    hero: {
      name: "Guru Ramu",
      title: "Senior Full-Stack Engineer | AI Agent Infrastructure x Web3",
      subtitle:
        "I build the infrastructure that lets AI agents operate autonomously in Web3 — from MCP credential servers and agentic wallets to machine-to-machine payment rails on MOCA Network.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in agentic-first Web3 infrastructure — credential systems, smart account orchestration, and machine-to-machine payment protocols.",
      overview: [
        {
          name: "AI Agent Infrastructure",
          level: 95,
          icon: "lucide:brain",
          color: "primary",
          description:
            "MCP servers, agent skills, GOAT SDK integration, multi-agent orchestration pipelines, and agentic-first API design.",
        },
        {
          name: "Web3 Credentials & Identity",
          level: 93,
          icon: "lucide:shield-check",
          color: "secondary",
          description:
            "AIRKit SDK, zero-knowledge credential issuance & verification, DID systems, on-chain staking, and x402 payment protocols.",
        },
        {
          name: "Blockchain & Smart Contracts",
          level: 92,
          icon: "lucide:link",
          color: "success",
          description:
            "Solidity, ERC-4337 smart accounts, viem/ethers.js, Hardhat, multi-chain deployment across 7+ EVM networks.",
        },
        {
          name: "Full-Stack Development",
          level: 90,
          icon: "lucide:code",
          color: "warning",
          description:
            "React, Next.js, Node.js, NestJS, Golang, Rust, PostgreSQL, Docker, CI/CD with GitHub Actions and AWS.",
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
      title: "Senior Full-Stack Engineer | AI Agent Infrastructure x Web3",
      image: "/guru-profile.png",
      description: [
        "Full-Stack Web3 and AI Infrastructure Engineer with 8 years of experience building decentralized applications, agentic systems, and developer tooling. Currently at Animoca Brands leading AIRKit credential infrastructure and agentic wallet development on MOCA Network.",
        "I specialize in agentic-first architecture — building MCP servers, agent skills, and payment protocols that let AI agents operate Web3 infrastructure autonomously. My recent work reduced credential issuance from 8 manual dashboard steps to a single agent command, and introduced machine-to-machine payments via x402 on MOCA chain.",
        "Previously at Web3Auth (now Consensys) building smart wallet SDKs and MPC key management across 6 platforms. Before that, engineering chatbot platforms at Walmart Global Tech serving 10M+ queries with 40% reduction in handling time.",
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
        title: "Senior Full Stack Engineer — Animoca Brands - AIRKit & Credential Infrastructure",
        date: "Jan 2025 - Present",
        icon: "mdi:briefcase",
        description: [
          "Leading development of AIRKit — SDK for portable credentials, smart accounts, and privacy-preserving identity on Moca Network",
          "Built Credential MCP Server with 21 tools covering the full credential lifecycle — reducing 8 manual dashboard steps to 1 agent command (87% reduction in interaction time)",
          "Built AIR Agentic Wallet Skills enabling AI agents to control ERC-4337 smart accounts across 7 EVM chains via GOAT SDK, tested on 5 AI models",
          "Implemented x402 payment protocol on MOCA testnet — machine-to-machine micropayments via EIP-3009",
          "Designed agentic-first architecture: MCP tool discovery, zod-validated schemas, session-aware flows reducing redundant input by ~60%",
        ],
      },
      {
        title: "Senior Full Stack Engineer — Web3Auth / Consensys - Wallet SDK & MPC Infrastructure",
        date: "May 2022 - Jan 2025",
        icon: "mdi:wallet",
        description: [
          "Built Plug N Play and Core Kit SDKs in Node.js and TypeScript — wallet creation in <0.8s, 2.3x higher conversion",
          "Developed Global Pay multi-currency wallet SDKs across 6 platforms, increasing dApp adoptability by 35%",
          "Integrated Safe MPC wallet with MetaMask Snap and Trust Wallet, simplifying auth by 20%",
          "Engineered TKey MPC key management (async, non-custodial) reducing login friction by 25% across 10+ blockchain ecosystems",
          "Achieved 99.98% uptime; load tested to 5x capacity scaling without degradation",
        ],
      },
      {
        title: "Software Engineer (SDE 3) — Walmart Global Tech - Chatbot Platform",
        date: "May 2020 - May 2022",
        icon: "mdi:monitor-dashboard",
        description: [
          "Led development of chatbot-as-a-service platform pluggable into any website",
          "Built with React, Angular, Node, LUIS NLP, PostgreSQL, and ElasticSearch",
          "Served 10M+ queries with 40% reduction in customer service handling time",
          "Optimized API response times by 30% via database indexing and caching",
          "Implemented OAuth 2.0 and JWT — reduced unauthorized API access by 40%",
        ],
      },
      {
        title: "Full Stack Engineer - Tata Consultancy Services",
        date: "May 2018 - Mar 2020",
        icon: "mdi:code-tags",
        description: [
          "Built real-time audio monitoring applications using Vue, Node, Python, Redux, and CSS Grid",
          "Worked with NRWL/NX monorepo architecture for scalable cross-project development",
        ],
      },
    ],
    technologies: {
      frontend: {
        description:
          "Modern frontend development with React ecosystem and cross-platform SDKs.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Vue.js", icon: "logos:vue" },
          { name: "Angular", icon: "logos:angular-icon" },
        ],
      },
      backend: {
        description: "Scalable APIs, microservices, and infrastructure.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "NestJS", icon: "logos:nestjs" },
          { name: "Golang", icon: "logos:go" },
          { name: "Rust", icon: "logos:rust" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "Docker", icon: "logos:docker-icon" },
        ],
      },
      aiTooling: {
        description:
          "Agentic-first infrastructure — MCP servers, agent skills, orchestration pipelines, and payment protocols.",
        tools: [
          { name: "MCP", icon: "simple-icons:anthropic" },
          { name: "Claude SDK", icon: "simple-icons:anthropic" },
          { name: "AIRKit", icon: "lucide:fingerprint" },
          { name: "GOAT SDK", icon: "logos:ethereum" },
          { name: "x402", icon: "lucide:credit-card" },
          { name: "Zod", icon: "logos:zod" },
        ],
      },
      web3: {
        description:
          "Smart contracts, account abstraction, wallet infrastructure, and on-chain identity.",
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
      "Selected work in agentic-first Web3 infrastructure — credential systems, smart account skills, and payment protocols",
    work: [
      {
        id: 1,
        title: "Credential MCP Server",
        description:
          "21-tool MCP server for the complete AIR credential lifecycle — schema, pricing, issuance, verification, and on-chain staking. Reduces 8 dashboard steps to 1 agent command.",
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
        architecture: "graph LR\n  Agent[AI Agent] -->|natural language| MCP[MCP Server]\n  MCP --> Registry[Tool Registry]\n  Registry --> Schema[Schema Tools]\n  Registry --> Pricing[Pricing Tools]\n  Registry --> Issuance[Issuance Tools]\n  Registry --> Verify[Verification Tools]\n  Registry --> Chain[On-Chain Tools]\n  Schema --> API[AIR Credential API]\n  Pricing --> API\n  Issuance --> API\n  Verify --> API\n  Chain --> MOCA[MOCA Chain / Viem]",
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "MCP", icon: "simple-icons:anthropic" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "Express", icon: "simple-icons:express" },
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
        architecture: "graph LR\n  PRD[PRD Agent] -->|approve| Arch[Architect Agent]\n  Arch -->|approve| Eng[Engineer Agent]\n  Eng -->|approve| QA[QA Agent]\n  QA -->|pass| Ship[Shipped Code]\n  SM[State Machine] -.->|supervises| PRD\n  SM -.->|supervises| Arch\n  SM -.->|supervises| Eng\n  SM -.->|supervises| QA\n  MCP[MCP Integrations] -.-> Eng\n  MCP -.-> QA",
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
          "MCP server + agent skills enabling AI to autonomously control ERC-4337 smart accounts — sign, transfer, approve, and execute across 7 chains. Tested on 5 AI models.",
        image: "https://img.youtube.com/vi/_mDAqzr_GIU/maxresdefault.jpg",
        gallery: [
          "https://img.youtube.com/vi/_mDAqzr_GIU/maxresdefault.jpg",
          "https://img.youtube.com/vi/_mDAqzr_GIU/hqdefault.jpg",
          "https://img.youtube.com/vi/_mDAqzr_GIU/sddefault.jpg",
        ],
        category: "Web3",
        details:
          "MCP server and agent skills that teach AI models (Claude, GPT, Codex, Gemini, Copilot) to operate ERC-4337 smart accounts through AIR's wallet infrastructure. Zero-UI wallet operations: personal signing, typed data, balance checks, token transfers, ERC-20/721/1155 approvals, NFT transfers, and arbitrary contract execution via GOAT SDK. Dual P-256 signature model for security. Tested across 5 AI models on 7 EVM chains.\n\nKey decision: P-256 dual-signature model over secp256k1 for native ERC-4337 UserOp compatibility and WebAuthn alignment.",
        github: "https://github.com/guru-web3/air-agentic-wallet-skill",
        video: "https://youtu.be/_mDAqzr_GIU",
        architecture: "graph LR\n  Agent[AI Agent] -->|MCP/Skill| Server[MCP Server]\n  Server --> GOAT[GOAT SDK]\n  GOAT --> Wallet[ERC-4337 Smart Account]\n  Wallet --> Sign[Personal Sign]\n  Wallet --> Transfer[Token Transfer]\n  Wallet --> NFT[NFT Operations]\n  Wallet --> Execute[Contract Execution]\n  Wallet -->|P-256 dual sig| Chains[7 EVM Chains]",
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
          "End-to-end x402 payment demo on MOCA testnet — HTTP APIs that self-serve access via wallet-attested micropayments. No API keys, no registration.",
        image: "https://img.youtube.com/vi/LB-5O4YwTdQ/maxresdefault.jpg",
        gallery: [
          "https://img.youtube.com/vi/LB-5O4YwTdQ/maxresdefault.jpg",
          "https://img.youtube.com/vi/LB-5O4YwTdQ/hqdefault.jpg",
          "https://img.youtube.com/vi/LB-5O4YwTdQ/sddefault.jpg",
        ],
        category: "Web3",
        details:
          "Standalone demonstration of the x402 HTTP payment protocol for machine-to-machine payments. Server gates API endpoints behind 402 Payment Required responses with x402-encoded requirements. Client automatically detects 402, signs EIP-3009 transferWithAuthorization on MOCA testnet, and retries with proof. Server settles on-chain via viem and returns 200. Self-serve API access with zero registration or API key setup.\n\nKey decision: EIP-3009 transferWithAuthorization over standard approve+transfer — single atomic transaction eliminates the two-step flow and reduces agent interaction complexity.",
        github: "https://github.com/guru-web3/x402-payment-demo",
        video: "https://youtu.be/LB-5O4YwTdQ",
        architecture: "graph LR\n  Client[Agent/Client] -->|GET /api| Server[Express Server]\n  Server -->|402 + x402 header| Client\n  Client -->|sign EIP-3009| Client\n  Client -->|retry + payment proof| Server\n  Server --> Settle[Settlement Service]\n  Settle -->|transferWithAuthorization| MOCA[MOCA Chain]\n  MOCA -->|confirmed| Server\n  Server -->|200 + data| Client",
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
      "Interested in AI x Web3 infrastructure? Let's connect.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5997196691087!2d80.22718!3d12.92219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1c6d36b4f1%3A0x1b1b0b77447f6d15!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1715701234567!5m2!1sen!2sin",
      address: "Chennai, India (Remote)",
    },
  },
  morphingTexts: {
    about: ["Builder", "Engineer", "Architect"] as const,
    projects: ["My Work", "Projects", "Infrastructure", "Systems"] as const,
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
      "Building agentic-first Web3 infrastructure at Animoca Brands. Open to new opportunities.",
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
      "AIRKit & Credential Systems",
      "MCP Servers & Agent Skills",
      "Agentic Wallets & Smart Accounts",
      "Full-Stack Web3 Development",
    ],
  },
} as const;
