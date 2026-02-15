import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'copernicspace',
    logoSrc: '/images/cprs.logo.svg',
    title: 'Copernicspace',
    description: 'Web3 marketplace for tokenizing space industry assets. Role: CTO. $1M raised.',
    link: 'https://copernicspace.com/',
  },
  {
    id: '0xkyc',
    logoSrc: '/images/0xkyc.logo.png',
    title: '0xkyc.id',
    description:
      'ZK-based identity platform. Co-founded and served as CTO. Led architecture, smart contract audit, and VC accelerator program.',
    link: 'https://0xKYC.id/',
  },
  {
    id: 'unid-store',
    logoSrc: '/images/unid-store.logo.png',
    title: 'unid.store',
    description:
      'Decentralized file-sharing application on Filecoin and IPFS. HackFS 2023 Winner: IPFS Best Use.',
    link: 'https://unid.store/',
  },
]
