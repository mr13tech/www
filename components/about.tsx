/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import { Twitter, GitHub, Mail, Linkedin } from 'react-feather'

import { getTimeDiff } from '@/utils/timeDiff'

export const About = () => {
  const cid = 'bafybeidv2cgd6obb7vurossq2jmq7fyso6thrujmpaxebuqt6iegmbayci'
  const link = `https://${cid}.ipfs.nftstorage.link/astronaut.jpeg`

  const [userTimeDiff, setUserTimeDiff] = useState<string>()
  useEffect(() => {
    const timeDiff = getTimeDiff().toString() + 'h'
    const isNegative = timeDiff.startsWith('-')
    setUserTimeDiff(isNegative ? timeDiff : `+${timeDiff}`)
  }, [])
  return (
    <div className='card bg-accent-content lg:card-side lg:h-[512px] lg:w-[1000px]'>
      <figure>
        <img
          src={link}
          alt={'logo'}
          className='mt-4 max-h-56 rounded-xl lg:mt-0 lg:max-h-screen'
        />
      </figure>
      <div className='card-body  items-center'>
        <div className='text-2xl'> {'Pylyp Radionov'} </div>
        <div className='text-xl'> {'mr13tech'} </div>
        <article className='prose text-white lg:prose-xl'>
          <div className='divider m-0' />
          <p>{'skills: software engineer'}</p>
          <p>{'origin: 🇺🇦 UA 🌊 Odesa'}</p>
          <p>{`locale: 🇹🇭 TH 🌐 ${userTimeDiff ?? '?h'} from You`}</p>
          <p>{'mypath: family, ⛓️ peers, freedom'}</p>
        </article>

        <p />
        <div className='card-actions items-center'>
          <a
            className='btn-link btn'
            href='https://twitter.com/mr13tech'
            target='_blank'
            rel='external noopener noreferrer'
          >
            <Twitter />
          </a>
          <a
            className='btn-link btn'
            href='https://github.com/mr13tech'
            target='_blank'
            rel='external noopener noreferrer'
          >
            <GitHub />
          </a>
          <a
            className='btn-link btn'
            href='mailto:me@mr13.tech'
            target='_blank'
            rel='external noopener noreferrer'
          >
            <Mail />
          </a>
          <a
            className='btn-link btn'
            href='https://www.linkedin.com/in/mr13tech/'
            target='_blank'
            rel='external noopener noreferrer'
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  )
}
