export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  duration: string
  description: string
  achievements: string[]
  techStack: string[]
  logoSrc?: string
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: 'smartmerchant',
    company: 'SmartMerchant',
    role: 'Product Engineer (Frontend Lead)',
    startDate: 'Sep 2025',
    endDate: 'Feb 2026',
    duration: '6 months',
    description:
      'Acting as the bridge between Engineering, Design, and Product for a B2B platform connecting shop owners with wholesalers.',
    achievements: [
      'Legacy Migration & Modernization: Orchestrated migration from legacy PHP to modern Next.js architecture with Tailwind, Shadcn UI, and TanStack Query',
      'Product Ownership & UX Strategy: Owned V2 Product Vision and user flow architecture, optimizing UI for higher conversion and retention',
      'Technical Leadership: Led frontend delivery for a 4-person agile squad with component-driven development',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'TanStack Query'],
    current: false,
  },
  {
    id: 'decleanup',
    company: 'DeCleanup Network',
    role: 'Founder & Lead Architect',
    startDate: 'Jan 2024',
    endDate: 'Present',
    duration: '1+ year',
    description:
      'Building a multichain infrastructure transforming environmental cleanups into verifiable on-chain assets. Designed dual-chain system using Base for high-frequency actions and Celo for governance.',
    achievements: [
      'Multichain Architecture: Engineered dual-chain system with Base (L2) for user actions via Farcaster Mini Apps and Celo for governance and reputation management',
      'Impact Protocol: Developed "Impact Product" standard using Dynamic NFTs, integrated Hypercerts (ERC-1155) to auto-mint certificates after verified cleanups',
      'SocialFi Integration: Built native Farcaster Frame for geo-tagged cleanup submissions directly from social feed, driving user acquisition without friction',
      'Governance: Implemented reputation-based voting system using $cDCU and Gardens.fund DAO tooling',
      'Product Leadership: Transitioned from engineering-first to product-led approach with community-driven development',
    ],
    techStack: [
      'Solidity',
      'Farcaster Frames',
      'Base',
      'Celo',
      'Hypercerts',
      'IPFS',
      'React',
      'Next.js',
    ],
    current: true,
  },
  {
    id: 'copernicspace',
    company: 'Copernic Space',
    role: 'CTO → Independent Contractor',
    startDate: 'Jan 2021',
    endDate: 'Jul 2025',
    duration: 'Jan 2021 – Dec 2023 (CTO) · Jan 2024 – Jul 2025 (Contractor)',
    description:
      'Web3 marketplace for tokenizing space industry assets — satellites, payloads, mission capacity. Company raised $1M total funding.',
    achievements: [
      'Architected EVM smart contract protocol using Factory patterns and recursive ERC-1155 token relationships for hierarchical space assets',
      'Designed gas-optimized contracts with comprehensive fuzz testing coverage',
      'Built custom Subgraph indexer for real-time on-chain data and IPFS/Filecoin integration for decentralized metadata storage',
      'Developed full-stack React/Next.js application with Sign-In with Ethereum (SIWE) and Firebase',
      'Led technical decisions and mentored a team of 3-5 engineers across distributed timezones',
    ],
    techStack: [
      'Solidity',
      'Yul/Assembly',
      'Hardhat',
      'Foundry',
      'React',
      'Next.js',
      'The Graph (Subgraph)',
      'IPFS',
      'Filecoin',
      'Firebase',
      'GCP',
      'ERC-1155',
      'TypeScript',
    ],
    logoSrc: '/images/cprs.logo.svg',
    current: false,
  },
  {
    id: 'zeekaptcha',
    company: 'ZeeKaptcha',
    role: 'Zero-Knowledge Protocol Engineer',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    duration: '3 months',
    description:
      'Developed an open-source Zero-Knowledge SNARK protocol to verify CAPTCHA solutions on-chain while preserving user privacy.',
    achievements: [
      'Developed Circom circuits for on-chain CAPTCHA verification without exposing user data',
      'Built proof generation and verification infrastructure from scratch — implemented custom Powers of Tau ceremony setup, proof generator, and verifier smart contract',
      'Prepared open source release of the solution',
    ],
    techStack: ['Circom', 'Golang', 'Zero-Knowledge Proofs', 'Solidity', 'Smart Contracts'],
    current: false,
  },
  {
    id: 'firelabs',
    company: 'Firelabs',
    role: 'Tech Lead',
    startDate: 'May 2021',
    endDate: 'Aug 2021',
    duration: '4 months',
    description:
      'Led a team of 5 engineers to design and deliver a Web3 mirror trading application for external enterprise client.',
    achievements: [
      'Team Leadership: Managed full delivery lifecycle, defined deliverables, structured workflows, and maintained alignment',
      'Requirements Engineering: Conducted feasibility studies and collaborated with client to clarify technical requirements',
      'Project Management: Provided accurate estimates and ensured strict adherence to client deadlines and specifications',
      'Full-Stack Development: Implemented Golang backend services and React frontend with Web3 trading logic',
      'Code Quality: Established code standards and review practices across the team',
    ],
    techStack: ['Golang', 'React', 'Web3', 'TypeScript', 'Smart Contracts'],
    current: false,
  },
  {
    id: 'coinfirm',
    company: 'Coinfirm',
    role: 'Software Engineer — Big Data & Blockchain Analytics',
    startDate: 'Apr 2017',
    endDate: 'Dec 2020',
    duration: '3+ years',
    description:
      'Core engineer for global crypto-compliance platform. Built ETL pipelines processing petabytes of blockchain transaction data for enterprise banking clients.',
    achievements: [
      'Performance Engineering: Built the first Ethereum internal transaction indexer in the AML/compliance industry (2017) — C++ solution processing 4M blocks in 6 hours on 256MB RAM',
      'Data Pipeline Architecture: Designed ETL pipelines mapping Ethereum data to SQL and Neo4j graph databases for compliance investigations',
      'Extended indexing infrastructure to Bitcoin and UTXO chains (Litecoin, Dash)',
      'Engineered MapR and Apache Spark clusters for historical blockchain analysis and automated node operations',
    ],
    techStack: [
      'Python',
      'Scala',
      'Solidity',
      'SQL',
      'Neo4j',
      'Hadoop',
      'MapR',
      'ETL',
      'Smart Contracts',
      'Unix',
      'Docker',
      'PostgreSQL',
    ],
    current: false,
  },
]
