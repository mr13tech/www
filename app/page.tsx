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
            logoSrc: 'images/cprs.logo.svg',
            title: 'Copernicspace',
            text: 'diversify access to aero space economy via distributed marketplace. Role: CTO',
            link: 'https://copernicspace.com/',
          },
          {
            logoSrc: 'images/0xkyc.logo.png',
            title: '0xkyc.id',
            text: "created @ETH WARSAW 2022' ZK based identity platform. I've supported startup accelerator program to get first fund round. Helped to build architecture. Performed solidity smart contract audit. Active role in tech consulting.",
            link: 'https://0xKYC.id/',
          },
          {
            logoSrc: 'images/unid-store.logo.png',
            title: 'unid.store',
            text: 'simple, yet decentralized file sharing @HACKFS 2023 Winner: IPFS — Best Use 🥇',
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
