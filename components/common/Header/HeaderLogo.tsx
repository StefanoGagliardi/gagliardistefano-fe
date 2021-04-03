// Import core
import { FC, ReactElement, useState } from 'react'

// Import third parts
import cn from 'classnames'

// Impot customs
import useScrollPosition, { IScrollProps } from '@services/hooks/useBodyScroll'
import s from './HeaderLogo.module.css'

export const HeaderLogo: FC = (): ReactElement => {
  const [scrollClass, setScrollClass] = useState<boolean>(false)

  // Get scroll position and set class
  useScrollPosition({
    effect: (props: IScrollProps) => {
      const { prevPos, currPos } = props

      if (currPos.y && Math.abs(currPos.y) > 70) {
        setScrollClass(true)
      } else {
        setScrollClass(false)
      }
    },
    deps: [scrollClass],
    element: null,
    useWindow: false,
    wait: 300,
  })

  return (
    <div
      className={cn(s.logoWrapper, "relative", {
        [s.scrolled]: scrollClass,
      })}
    >
      <img
        className="dark:opacity-100 opacity-0 transition-opacity absolute top-0 left-0"
        src={'/logo/res/gagliardistefano-logo-light250.png'}
        width="250"
        height="49"
      />
      <img
        className="dark:opacity-0 opacity-100 transition-opacity absolute top-0 left-0"
        src={'/logo/res/gagliardistefano-logo-dark250.png'}
        width="250"
        height="49"
      />
    </div>
  )
}

export default HeaderLogo
