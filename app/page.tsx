'use client'

import { About } from '@/components/about'
import { Nav } from '@/components/nav'
import { Present } from '@/components/present'
import { LinkState, useNavStore } from '@/app/store'

const Home = () => {
  const activeLink = useNavStore((state) => state.activeLink)

  const map: Record<LinkState, JSX.Element> = {
    about: <About />,
    present: <Present />,
    past: <Present />,
    future: <Present />,
  }
  return (
    <div>
      <Nav />
      {map[activeLink]}
    </div>
  )
}
export default Home
