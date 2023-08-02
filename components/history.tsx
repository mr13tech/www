import Link from 'next/link'

type HistoryPoint = {
  logoSrc: string
  title: string
  text: string
  link: string
}

type HistoryProps = {
  points: HistoryPoint[]
}

export const History = ({ points: historyPoints }: HistoryProps) => (
  <article className='prose text-white lg:prose-xl'>
    <div className='flex flex-col items-center justify-center space-y-6 rounded-2xl bg-accent-content px-4'>
      {historyPoints.map((point, index) => (
        <Link
          key={index}
          href={point.link}
          target='_blank'
          rel='noreferrer'
          className='flex w-full items-center rounded-xl no-underline transition-all duration-300 ease-in-out hover:bg-gray-300 hover:bg-opacity-10'
        >
          <img
            src={point.logoSrc}
            alt={point.logoSrc}
            className='w-1/4 flex-shrink-0 object-contain'
          />
          <div className='flex-1 pl-4 text-left'>
            <h3 className='xl'>{point.title}</h3>
            <p>{point.text}</p>
          </div>
        </Link>
      ))}
    </div>
  </article>
)
