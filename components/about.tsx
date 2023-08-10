/* eslint-disable @next/next/no-img-element */
'use client'

import { getTimeDiffLabel } from '@/utils/timeDiff'

export const About = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 lg:flex-row'>
        {avatar}
        {personal}
      </div>
      {skills}
    </div>
  )
}

const avatar = (
  <div className='relative flex items-center justify-center rounded-3xl bg-black p-4 lg:p-6'>
    <div className='absolute left-6 top-6 inline-flex items-start justify-start rounded-3xl bg-black lg:left-8 lg:top-8'>
      <p className='mx-2 text-center text-sm text-white lg:text-base'>
        mr13tech
      </p>
    </div>

    <div className='absolute inset-0 flex items-center justify-center'>
      <img src='/images/focus.svg' />
    </div>

    <img
      className='grow rounded-3xl lg:hidden'
      src='images/me.mr13.mobile.png'
      alt='me.mr13.mobile.png?'
    />
    <img
      className='hidden rounded-3xl lg:block'
      src='images/me.mr13.png'
      alt='me.mr13.png?'
    />
  </div>
)

const personal = (
  <div className='flex min-h-[373px] w-full flex-col  items-start  justify-between rounded-3xl bg-black text-start text-sm font-medium text-white lg:w-[504px] lg:text-xl xl:max-w-[504px]'>
    <div id='name' className='flex flex-col gap-2 p-6 '>
      <p className='text-2xl lg:text-4xl'> {'Pylyp Radionov'}</p>
      <p className='opacity-50'>{'software engineer'}</p>
    </div>
    <div id='details' className='flex flex-col gap-2 p-6'>
      <div className='flex'>
        <p className='opacity-50'>{'origin:'}</p>
        <p className='whitespace-pre'>{' UA Odesa'}</p>
      </div>
      <div className='flex'>
        <p className='opacity-50'>{'locale:'}</p>
        <p className='whitespace-pre'>{` TH ${getTimeDiffLabel()} from You!`}</p>
      </div>
      <div className='flex'>
        <p className='opacity-50'>{'mypath:'}</p>
        <p className='whitespace-pre'>{' family, peers, freedom'}</p>
      </div>
    </div>
  </div>
)

const skills = (
  <div className='flex flex-col items-start justify-start gap-4 lg:flex-row'>
    <div className='flex items-start justify-start gap-6 self-stretch rounded-3xl bg-black p-6 lg:w-[244px]'>
      <div className='flex shrink grow basis-0 flex-col items-start justify-start gap-7'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <div className='text-center text-base font-medium text-white text-opacity-50'>
            Skill
          </div>
          <div className='text-center text-2xl font-medium text-white'>Web</div>
        </div>
        <div className='flex h-[116px] flex-col items-start justify-start gap-4 self-stretch'>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 1
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 2
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 3
          </div>
        </div>
      </div>
    </div>
    <div className='inline-flex items-start justify-start gap-6 self-stretch rounded-3xl bg-black p-6 lg:w-[504px]'>
      <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-7'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <div className='text-center text-base font-medium text-white text-opacity-50'>
            Skill
          </div>
          <div className='text-center text-2xl font-medium text-white'>
            🏆 Web3
          </div>
        </div>
        <div className='flex h-[204px] flex-col items-start justify-start gap-4 self-stretch'>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            EVM SOlidity Hardhat\Foundry C\C++
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 2
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 3
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 4
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 5
          </div>
        </div>
      </div>
    </div>
    <div className='inline-flex items-start justify-start gap-6 self-stretch rounded-3xl bg-black p-6 lg:w-[244px]'>
      <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-7'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <div className='text-center text-base font-medium text-white text-opacity-50'>
            Skill
          </div>
          <div className='text-center text-2xl font-medium text-white'>
            Java
          </div>
        </div>
        <div className='flex h-[116px] flex-col items-start justify-start gap-4 self-stretch'>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 1
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 2
          </div>
          <div className='self-stretch text-lg font-medium leading-7 text-white'>
            Skill 3
          </div>
        </div>
      </div>
    </div>
  </div>
)
