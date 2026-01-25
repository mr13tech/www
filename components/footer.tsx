const CONTACTS = [
  { label: 'GitHub', link: 'https://github.com/mr13tech' },
  { label: 'Twitter', link: 'https://twitter.com/mr13tech' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mr13tech/' },
  { label: 'Email', link: 'mailto:me@mr13.tech' },
]

export const Footer = () => (
  <div className="relative mb-4 flex w-full max-w-[588px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-black px-2.5 py-6 lg:w-full lg:max-w-[1024px]">
    <ElipseGradient />
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="text-gradient-green text-center text-2xl font-medium">
        ✅ Available for hiring
      </div>
      <div className="text-center text-2xl font-medium text-white text-opacity-50">Contact me:</div>
    </div>
    <div className="flex flex-col items-center justify-center gap-12 pt-12 lg:flex-row">
      {CONTACTS.map(({ label, link }) => (
        <a
          key={label}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          href={link}
          target="_blank"
          rel="external noopener noreferrer"
        >
          <div className="text-center text-2xl font-medium leading-normal text-white">{label}</div>
        </a>
      ))}
    </div>
  </div>
)

const ElipseGradient = () => (
  <div className="absolute -left-[276px] -top-[114px] rotate-30 lg:-left-[213px] lg:-top-16 lg:rotate-0">
    <img src="/images/footer-elipse.svg" alt="footer-elipse" />
  </div>
)
