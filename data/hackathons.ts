export interface Hackathon {
  id: string
  name: string
  event: string
  date: string
  description: string
  award?: string
  techStack: string[]
  link?: string
  logoSrc?: string
}

export const hackathons: Hackathon[] = [
  {
    id: '12h-finance',
    name: '12h.finance',
    event: 'StarkHack (ETHGlobal)',
    date: 'Jun 2024',
    description:
      'Created a project using RWA collateral from traditional stock markets to enable crypto borrowing.',
    techStack: ['Starknet', 'RWA', 'DeFi', 'Smart Contracts'],
    link: 'https://github.com',
  },
  {
    id: 'even-cost',
    name: 'even.cost',
    event: 'Superhack (ETHGlobal)',
    date: 'Aug 2023',
    description: 'Built a GDA (Gradual Dutch Auction) investment dApp during a hackathon.',
    techStack: ['Solidity', 'React', 'GDA', 'DeFi'],
    link: 'https://github.com',
  },
  {
    id: 'unid-store',
    name: 'unid.store',
    event: 'HackFS (ETHGlobal)',
    date: 'Aug 2023',
    description: 'Created a decentralized file-sharing application leveraging Filecoin and IPFS.',
    award: 'IPFS Best Use 🥇',
    techStack: ['IPFS', 'Filecoin', 'React', 'Web3'],
    link: 'https://unid.store',
    logoSrc: '/images/unid-store.logo.png',
  },
  {
    id: '0xkyc',
    name: '0xKYC',
    event: 'ETHWarsaw',
    date: 'Sep 2022',
    description:
      'Co-founded and served as CTO for a ZK-based identity platform. Later joined a VC accelerator and transitioned to consulting role.',
    techStack: ['Zero-Knowledge Proofs', 'Solidity', 'React', 'Identity'],
    link: 'https://0xKYC.id',
    logoSrc: '/images/0xkyc.logo.png',
  },
  {
    id: 'green-team',
    name: 'Green Team',
    event: 'Warsaw',
    date: '2018',
    description: 'Blockchain hackathon project with Coinfirm team.',
    techStack: ['Solidity', 'Blockchain'],
  },
  {
    id: 'ethwarsaw-2017',
    name: 'ETHWarsaw 2017',
    event: 'ETHWarsaw',
    date: '2017',
    description: 'Early hackathon participation with Coinfirm team.',
    techStack: ['Solidity', 'Ethereum'],
  },
]
