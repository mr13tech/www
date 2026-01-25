/* eslint-disable @next/next/no-img-element */
'use client'

import { getTimeDiffLabel } from '@/utils/timeDiff'

export const About = () => {
  return (
    <div className="flex w-full max-w-[588px] flex-col gap-4 lg:max-w-[1024px]">
      <div className="flex flex-col gap-4 lg:flex-row">
        {avatar}
        {personal}
      </div>
      {skills}
    </div>
  )
}

const avatar = (
  <div className="relative flex items-center justify-center rounded-3xl bg-black p-4 lg:p-6">
    <div className="absolute left-6 top-6 inline-flex items-start justify-start rounded-3xl bg-black lg:left-8 lg:top-8">
      <p className="mx-2 text-center text-sm text-white lg:text-base">mr13tech</p>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <img src="images/focus.svg" alt="images/focus.svg?" />
    </div>

    <img
      className="grow rounded-3xl lg:hidden"
      src="images/me.mr13.mobile.png"
      alt="me.mr13.mobile.png?"
    />
    <img className="hidden rounded-3xl lg:block" src="images/me.mr13.png" alt="me.mr13.png?" />
  </div>
)

const personal = (
  <div className="flex min-h-[373px] w-full flex-col  items-start  justify-between rounded-3xl bg-black text-start text-sm font-medium text-white lg:w-[504px] lg:text-xl xl:max-w-[504px]">
    <div id="name" className="flex flex-col gap-2 p-6 ">
      <p className="text-2xl lg:text-4xl"> {'Pylyp Radionov'}</p>
      <p className="opacity-50">{'software engineer'}</p>
    </div>
    <div id="details" className="flex flex-col gap-2 p-6">
      <div className="flex">
        <p className="opacity-50">{'origin:'}</p>
        <p className="whitespace-pre">{' UA Odesa'}</p>
      </div>
      <div className="flex">
        <p className="opacity-50">{'locale:'}</p>
        <p className="whitespace-pre">{` TH ${getTimeDiffLabel()} from You!`}</p>
      </div>
      <div className="flex">
        <p className="opacity-50">{'mypath:'}</p>
        <p className="whitespace-pre">{' family, peers, freedom'}</p>
      </div>
    </div>
  </div>
)

const skills = (
  <div className="flex flex-col gap-4 lg:flex-row">
    <div className="flex w-full flex-col items-start  justify-start  gap-4 rounded-3xl bg-black p-4 text-start text-sm font-medium leading-7 text-white lg:w-[244px] lg:text-xl">
      <p className="opacity-50">{'Skill'}</p>
      <p className="pb-[28px] pt-3 text-2xl"> Code </p>
      <p>C/C++, Python, Solidity</p>
      <p>JS\TS, Nextjs, Tailwind</p>
      <p>CI\CD, Cloud, Databases</p>
      <p>Unix, Git, Docker</p>
    </div>
    <div className="flex w-full flex-col items-start  justify-start  gap-4 rounded-3xl bg-black p-4 text-start text-sm font-medium leading-7 text-white lg:w-[504px] lg:text-xl">
      <p className="opacity-50">{'Skill'}</p>
      <p className="pb-[28px] pt-3 text-2xl font-medium ">🏆 Web3</p>
      <p>
        <span className="opacity-50">_0</span>: ETH, OP, MATIC, ARB, BTC
      </p>
      <p>
        <span className="opacity-50">_1:</span> ethers, oz, hardhat, foundry
      </p>
      <p>
        <span className="opacity-50">_2:</span> ipfs, ens, thegraph
      </p>
      <p>
        <span className="opacity-50">_3:</span> mythx, diligence, solhint
      </p>
      <p>
        <span className="opacity-50">_4:</span> mm, walletconnect, gnosis
      </p>
      <p>
        <span className="opacity-50">_5:</span> opensea, uniswap, aave
      </p>
    </div>
    <div className="flex w-full flex-col items-start  justify-start  gap-4 rounded-3xl bg-black p-4 text-start text-sm font-medium leading-7 text-white lg:w-[244px] lg:text-xl">
      <p className="opacity-50">{'Skill'}</p>
      <p className="pb-[28px] pt-3 text-2xl"> Communication</p>
      <p>Present</p>
      <p>Team Lead</p>
      <p>Plan & Estimate</p>
    </div>
  </div>
)
