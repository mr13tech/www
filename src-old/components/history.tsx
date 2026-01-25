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
  <div className="flex flex-col gap-4 lg:flex-row">
    {historyPoints.map((point, index) => (
      <Link
        key={index}
        href={point.link}
        target="_blank"
        rel="noreferrer"
        className="flex w-full max-w-[588px] flex-col items-start justify-start  gap-8  rounded-3xl bg-black p-6 hover:bg-gray-300 hover:bg-opacity-10 lg:max-w-[330px]"
      >
        <img src={point.logoSrc} alt={point.logoSrc} className="" />
        <div className="flex-1 pl-4 text-left">
          <p className="text-3xl">{point.title}</p>
          <p className="text-sm lg:text-base">{point.text}</p>
        </div>
      </Link>
    ))}
  </div>
)
