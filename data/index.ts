export const DATA = {
  home: {
    hero: {
      name: "Guru Ramu",
      title: "Full-Stack Web3 & AI Infrastructure Engineer",
      subtitle:
        "I build the infrastructure that lets AI agents operate autonomously in Web3 — from MCP servers and agentic wallets to multi-agent orchestration pipelines.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in AI agent infrastructure, Web3 systems, and full-stack engineering for autonomous operation.",
      overview: [
        {
          name: "AI Agent Infrastructure",
          level: 95,
          icon: "lucide:brain",
          color: "primary",
        },
        {
          name: "Web3 & Smart Contracts",
          level: 92,
          icon: "lucide:link",
          color: "secondary",
        },
        {
          name: "Full-Stack Development",
          level: 90,
          icon: "lucide:code",
          color: "success",
        },
        {
          name: "System Architecture",
          level: 88,
          icon: "lucide:network",
          color: "warning",
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
      title: "Full-Stack Web3 & AI Infrastructure Engineer",
      image:
        "https://res.cloudinary.com/devq06psf/image/upload/v1750626923/chic_soba_bkhd8o.png",
      description: [
        "Full-Stack Web3 and AI Infrastructure Engineer with 7 years of experience building decentralized applications, agentic systems, and developer tooling. Currently focused on connecting AI agents to blockchain infrastructure for autonomous operation.",
        "I specialize in MCP servers, ERC-4337 smart account orchestration, multi-agent pipelines, and verifiable credential systems. My work spans the full stack — from Solidity smart contracts to React frontends, from NestJS APIs to Rust-based key management.",
        "Previously at Web3Auth building smart wallet SDKs and MPC key management systems. Before that, engineering chatbot platforms at Walmart Global Tech serving 10M+ queries.",
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
        title: "Full-Stack Developer",
        date: "May 2022 - Present",
        icon: "mdi:briefcase",
        description:
          "Web3Auth — Building smart wallet SDKs, Global Pay multi-currency wallets, TKey MPC key management across 6 platforms (TS, Node, React, Rust, Android, Swift). Integrated Safe MPC wallet with MetaMask Snap and Trust Wallet. Deployed Solana wallet solutions. Achieved 99.98% uptime with liveness monitoring frameworks.",
      },
      {
        title: "Full-Stack Developer (SDE 3)",
        date: "May 2020 - May 2022",
        icon: "mdi:monitor-dashboard",
        description:
          "Walmart Global Tech — Led development of a chatbot-as-a-service platform using React, Angular, Node, LUIS, PostgreSQL, and ElasticSearch. Answered 10M+ queries. Reduced customer service handling time by 40% through automation.",
      },
      {
        title: "Full Stack Engineer",
        date: "May 2018 - Mar 2020",
        icon: "mdi:code-tags",
        description:
          "Tata Consultancy Services — Built live audio monitoring applications using Vue, Node, Python, Redux. Worked with NRWL/NX monorepo architecture.",
      },
    ],
    technologies: {
      frontend: {
        description:
          "Modern frontend development with React ecosystem.",
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
        description: "Scalable APIs and backend services.",
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
          "I build AI agent infrastructure — MCP servers, agent skills, and orchestration pipelines.",
        tools: [
          { name: "MCP", icon: "simple-icons:anthropic" },
          { name: "Claude SDK", icon: "simple-icons:anthropic" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "ERC-4337", icon: "logos:ethereum" },
        ],
      },
      web3: {
        description:
          "Smart contracts, account abstraction, and wallet infrastructure.",
        tools: [
          { name: "Solidity", icon: "logos:solidity" },
          { name: "Ethers.js", icon: "logos:ethereum" },
          { name: "Hardhat", icon: "simple-icons:ethereum" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "Selected work in AI infrastructure, Web3, and autonomous agent systems",
    work: [
      {
        id: 1,
        title: "Credential MCP Server",
        description:
          "MCP server giving AI agents 15+ tools to create, manage, and verify Web3 credentials with on-chain staking, payments, and x402 integration.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-3",
        ],
        category: "AI Infrastructure",
        details:
          "A Model Context Protocol server that exposes 15+ tools for the complete credential lifecycle — schema creation, pricing, issuance programs, verification programs, and on-chain operations. Supports private key authentication, MOCA chain smart contract interactions via viem, and x402 payment protocol for machine-to-machine payments.",
        github: "https://github.com/guru-web3/credential-mcp-server",
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "MCP", icon: "simple-icons:anthropic" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "Express", icon: "simple-icons:express" },
        ],
      },
      {
        id: 2,
        title: "Feature Onboarding Orchestrator",
        description:
          "Multi-agent pipeline from PRD to shipped code with human-in-the-loop gates, pluggable LLM runtimes, and MCP integrations.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-3",
        ],
        category: "AI Infrastructure",
        details:
          "A 4-stage agentic pipeline (PRD, Architect, Engineer, QA) with deterministic state machine supervisor, pluggable LLM runtimes (Claude SDK, pi-ai), MCP integrations (GitHub, Jira, Notion, Figma), human-in-the-loop approval gates, SSE streaming with typed events, workspace management with cross-repo architecture discovery, and run caching.",
        github: "https://github.com/guru-web3/feature-onboarding-orchestrator",
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
          "Agent skills enabling AI to autonomously control ERC-4337 smart accounts — sign, transfer, approve, and execute on 7 chains.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-3",
        ],
        category: "Web3",
        details:
          "Two agent skills that teach AI models (Claude, GPT, Codex) to operate ERC-4337 smart accounts through AIR's wallet infrastructure. Supports personal signing, typed data, balance checks, token transfers, ERC-20/721/1155 approvals, NFT transfers, and arbitrary contract execution. Dual P-256 signature model for security. Tested on 5 AI models across 7 chains.",
        github: "https://github.com/guru-web3/air-agentic-wallet-skill",
        tech: [
          { name: "ERC-4337", icon: "logos:ethereum" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "P-256", icon: "lucide:key-round" },
          { name: "Viem", icon: "logos:ethereum" },
        ],
      },
      {
        id: 4,
        title: "x402 Payment Protocol Demo",
        description:
          "End-to-end x402 payment demo on MOCA testnet — HTTP APIs that charge per-request via EIP-3009.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-3",
        ],
        category: "Web3",
        details:
          "Standalone demonstration of the x402 HTTP payment protocol. Server gates API endpoints behind 402 Payment Required responses. Client automatically handles payment using EIP-3009 transferWithAuthorization on MOCA testnet. Shows the complete request-payment-response cycle for machine-to-machine payments.",
        github: "https://github.com/guru-web3/x402-payment-demo",
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Express", icon: "simple-icons:express" },
          { name: "Viem", icon: "logos:ethereum" },
          { name: "x402", icon: "lucide:credit-card" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Interested in AI x Web3 infrastructure? Let's connect.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d-122.41941508468191!3d37.774929779759245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbb69f3ef%3A0x4c80b42c33b6a77d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567!5m2!1sen!2sus",
      address: "Remote",
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
      "Building AI x Web3 infrastructure. Open to new opportunities.",
    contact: {
      email: "gururamu4497@gmail.com",
      phone: "",
      location: "Remote",
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
        url: "https://linkedin.com",
        icon: "mdi:linkedin",
      },
    ],
    services: [
      "MCP Servers",
      "Agentic Wallets",
      "Smart Contracts",
      "Full-Stack Development",
    ],
  },
} as const;
