'use client'

import { navState, Nav, useNavStore } from '@/components/nav'
import { About } from '@/components/about'
import { History } from '@/components/history'
import { TBD } from '@/components/tbd'
import { Footer } from '@/components/footer'

const Home = () => {
  const activeState = useNavStore((state) => state.state)

  const map: Record<navState, JSX.Element> = {
    About: <About />,
    Present: (
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
    Past: <TBD />,
    Future: <TBD />,
  }
  return (
    <>
      <Nav />
      {map[activeState]}
      <Footer />
    </>
  )
}
export default Home
