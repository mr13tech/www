'use client'

import { About } from '@/components/about'
import { Nav } from '@/components/nav'
import { History } from '@/components/history'
import { LinkState, useNavStore } from '@/app/store'
import { TBD } from '@/components/tbd'

const Home = () => {
  const activeLink = useNavStore((state) => state.activeLink)

  const map: Record<LinkState, JSX.Element> = {
    about: <About />,
    present: (
      <History
        points={[
          {
            logoSrc: 'csp-logo.png',
            title: 'Copernic Space',
            text: 'Diversify access to aero space economy via distributed marketplace. Role: co-founder & CTO',
            link: 'https://copernicspace.com/',
          },
          {
            logoSrc: '0xkyc-logo.png',
            title: '0xKYC',
            text: "created @ ETH WARSAW 2022' hackathon. Helped to go throu startup cohort. Consult with system architecture. Performed smart contract audit.",
            link: 'https://0xKYC.id/',
          },
          {
            logoSrc: 'unid-store-logo.png',
            title: 'unid.store',
            text: 'decentralized file sharing @ HACKFS 23 by ETHGlobal IPFS — Best Use 🥇',
            link: 'https://unid.store/',
          },
        ]}
      />
    ),
    past: <TBD />,
    future: <TBD />,
  }
  return (
    <div>
      <Nav />
      {map[activeLink]}
    </div>
  )
}
export default Home
