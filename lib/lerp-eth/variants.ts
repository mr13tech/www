import type { DrawFn } from './shared'
import variant1 from './variant-1'
import variant2 from './variant-2'
import variant4 from './variant-4'
import variant6 from './variant-6'
import variant7 from './variant-7'
import variant8 from './variant-8'
import variant9 from './variant-9'
import variant15 from './variant-15'
import variant16 from './variant-16'
import variant18 from './variant-18'
import variant21 from './variant-21'
import variant23 from './variant-23'
import variant24 from './variant-24'
import variant27 from './variant-27'
import variant29 from './variant-29'
import variant30 from './variant-30'

export const allVariants: DrawFn[] = [
  variant1,
  variant2,
  variant4,
  variant6,
  variant7,
  variant8,
  variant9,
  variant15,
  variant16,
  variant18,
  variant21,
  variant23,
  variant24,
  variant27,
  variant29,
  variant30,
]

export function getRandomVariant(): DrawFn {
  return allVariants[Math.floor(Math.random() * allVariants.length)]
}
