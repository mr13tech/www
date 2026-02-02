interface BadgeProps {
  label: string
  variant?: 'award' | 'duration' | 'default'
}

export const Badge = ({ label, variant = 'default' }: BadgeProps) => {
  const variantClasses = {
    award:
      'bg-gradient-to-r from-[#b3d574] to-[#24b391] text-zinc-950 font-semibold text-xs sm:text-xs md:text-sm px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full',
    duration:
      'bg-zinc-800/50 text-zinc-300 text-xs sm:text-xs md:text-sm px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full border border-zinc-700/50',
    default:
      'bg-zinc-800 text-zinc-50 text-xs sm:text-xs md:text-sm px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full',
  }

  return <span className={variantClasses[variant]}>{label}</span>
}
