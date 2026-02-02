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
    role: 'Frontend Developer',
    startDate: 'Sep 2025',
    endDate: 'Feb 2026',
    duration: '6 months',
    description:
      'B2B platform connecting shop owners with wholesalers, enabling efficient wholesale relationship management.',
    achievements: [
      'Built React/Next.js platform aggregator enabling shop owners to manage wholesaler relationships',
      'Implemented robust interface for order management, inventory sync, and supplier communications',
      'Developed responsive design supporting mobile and desktop workflows',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'B2B Platform'],
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
    role: 'Lead Blockchain Architect & Founding Engineer',
    startDate: 'Jan 2021',
    endDate: 'Jan 2024',
    duration: '3 years',
    description:
      'Architected a B2B marketplace for tokenizing space industry assets (satellites, payload data). Led technical team from whitepaper to production, managing daily operations and strategic planning.',
    achievements: [
      'System Architecture: Designed full Web3 infrastructure with custom ERC-1155 RWA standards and factory patterns for scalable asset deployment on Ethereum/Polygon',
      'Performance Optimization: Achieved 30% gas reduction through low-level EVM optimization (Yul/Assembly), enabling cost-effective on-chain operations',
      'Data Infrastructure: Built custom Subgraph chain data indexer and decentralized storage layer (IPFS/Filecoin) for sensitive satellite payload data',
      'Authentication: Implemented Firebase for user profiles with SIWE (Sign In With Ethereum) JWT authentication flows',
      'Frontend Architecture: Built React/Next.js web client with optimal performance for complex data visualization',
      'Technical Leadership: Managed cross-functional team of 5 engineers, established CI/CD pipelines, documentation standards, and code review processes',
      'Transitioned to specialized advisory contractor role (Jan 2024) to focus on high-level architectural modules',
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
    role: 'Senior Cryptography Engineer',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    duration: '3 months',
    description:
      'Developed an open-source Zero-Knowledge SNARK protocol to verify CAPTCHA solutions on-chain while preserving user privacy.',
    achievements: [
      'Cryptographic Protocol: Designed and implemented Circom circuits for CAPTCHA zero-knowledge proof generation',
      'Backend Verification: Built high-performance Golang backend verifier for on-chain proof validation',
      'Privacy Engineering: Enabled CAPTCHA verification without revealing user identity or solution to blockchain',
      'Open Source: Contributed to protocol standards and tooling for ZK privacy infrastructure',
    ],
    techStack: ['Circom', 'Golang', 'Zero-Knowledge Proofs', 'Solidity', 'Smart Contracts'],
    current: false,
  },
  {
    id: 'firelabs',
    company: 'Firelabs',
    role: 'Tech Team Lead',
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
    role: 'Big Data Engineer & Blockchain Analyst',
    startDate: 'Apr 2017',
    endDate: 'Dec 2020',
    duration: '3+ years',
    description:
      'Core engineer for global crypto-compliance platform. Built ETL pipelines processing petabytes of blockchain transaction data for enterprise banking clients.',
    achievements: [
      'ETL Pipeline Architecture: Designed and implemented scalable ingestion systems for Bitcoin (UTXO), Ethereum Mainnet, Ripple, and other blockchains',
      'Big Data Infrastructure: Engineered solutions using Scala, Hadoop, and MapR for processing massive transaction datasets',
      'Analytics Platform: Implemented Neo4j graph databases to visualize complex money-laundering patterns for compliance teams',
      'SQL Analytics: Built SQL-based transaction analysis systems for real-time AML (Anti-Money Laundering) detection',
      'Smart Contract Analysis: Developed Solidity smart contracts and analytics for DeFi compliance',
      'Systems Expertise: Gained hands-on DevOps experience with blockchain node operations and system scalability optimization',
      'Production Impact: Delivered durable ETL framework that continues supporting multiple blockchain networks for institutional clients',
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
