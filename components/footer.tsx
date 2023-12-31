export const Footer = () => (
  <div className='relative mb-4 flex w-full max-w-[588px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-black px-2.5 py-6 lg:w-full lg:max-w-[1024px]'>
    <ElipseGradient />
    <div className='flex flex-col items-center justify-center gap-3'>
      <div className='bg-gradient-to-t from-[#B3D574] to-[#24B391] bg-clip-text text-center text-2xl font-medium text-transparent'>
        {'✅ Available for hiring'}
      </div>
      <div className='text-center text-2xl font-medium text-white text-opacity-50'>
        {'Contact me:'}
      </div>
    </div>
    <div className='flex flex-col items-center justify-center gap-12 pt-12 lg:flex-row'>
      {contacts.map(({ label, link }) => contact(label, link))}
    </div>
  </div>
)

const contacts = [
  { label: 'GitHub', link: 'https://github.com/mr13tech' },
  { label: 'Twitter', link: 'https://twitter.com/mr13tech' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mr13tech/' },
  { label: 'Email', link: 'mailto:me@mr13.tech' },
]

const contact = (label: string, link: string) => (
  <a
    className='hover:cursor-pointer'
    href={link}
    target='_blank'
    rel='external noopener noreferrer'
  >
    <div className='text-center text-2xl font-medium leading-normal text-white'>
      {label}
    </div>
  </a>
)
const ElipseGradient = () => (
  <div className='absolute -left-[276px] -top-[114px] rotate-[30deg]  lg:-left-[213px] lg:-top-16 lg:rotate-0'>
    <img src='images/footer-elipse.svg' alt='footer-elipse' />
  </div>
)
