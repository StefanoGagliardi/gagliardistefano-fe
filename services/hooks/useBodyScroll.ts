// Import core
import React, {
  DependencyList,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'

// Import third Fparts

// Import custom

/**
 * SSR: Integrazione Server Side Rendering
 * In accordo con la doc: useLayoutEffect è solo client side, in caso SSR spostare la logica nel
 */
export const isBrowser: boolean = typeof window !== 'undefined'

// https://reactjs.org/docs/hooks-reference.html#uselayouteffect
// Uguale a useEffect ma aspetta in modo asincrono i cambiamenti del dom
// (non gira ssr, in quel caso spostare la logica in useEffect)
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Types
type ElementRef = MutableRefObject<HTMLElement | undefined>

export interface IScrollProps {
  prevPos: IPosition
  currPos: IPosition
}
interface IPosition {
  x: number
  y: number
}

/**
 * Note, though, that Window.scroll[X|Y] is not supported in IE(11 or below).
 * IE9 and below should (in most cases) not be supported anymore because using them means no security updates for browser or OS.
 * But, If you want to support this browser, replace it by Window.page[X|Y]Offset.
 *
 * According to caniuse it's supported by 98.66% of all modern browsers, including IE9+.
 *
 * @since 1.0.0
 */
const getScrollPosition = ({
  element,
  boundingElement,
  useWindow,
}: {
  element?: ElementRef
  boundingElement?: ElementRef
  useWindow?: boolean
}) => {
  if (!isBrowser) return { x: 0, y: 0 }

  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY }
  }

  const targetPosition = element?.current
    ? element.current.getBoundingClientRect()
    : document.body.getBoundingClientRect()
  const containerPosition = boundingElement?.current.getBoundingClientRect()

  if (!targetPosition) {
    return { x: 0, y: 0 }
  }

  return containerPosition
    ? {
        x: (containerPosition.x || 0) - (targetPosition.x || 0),
        y: (containerPosition.y || 0) - (targetPosition.y || 0),
      }
    : { x: targetPosition.left, y: targetPosition.top }
}

/**
 * @since 1.0.0
 *
 * @param effect {useState<IScrollProps> | undefined} - useState<IScrollProps> hook reference for set result
 * @param deps {Depencedy List | undefined} - Lista di dipendenze da attendere
 * @param element {ElementRef | undefined} - Si può "ascolare" lo scroll su un elemento specific
 * @param useWindow {boolean | undefined} - Global scroll
 * @param wait {number | undefined} - Timeout between scroll event and callback
 */
export const useScrollPosition = ({
  effect,
  deps = [],
  element = undefined,
  useWindow = false,
  wait = null,
  boundingElement = undefined,
}: {
  effect: (props: IScrollProps) => void
  deps?: DependencyList
  element?: ElementRef
  useWindow?: boolean
  wait?: number
  boundingElement?: ElementRef
}): void => {
  const position = useRef(getScrollPosition({ boundingElement, useWindow }))

  // handle timeout
  let throttleTimeout: number | null = null

  // Get and set in "effect" current position
  const callBack = () => {
    const currPos = getScrollPosition({ element, boundingElement, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  // custom hook: useLayoutEffect | useEffect
  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return undefined

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = window.setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    if (boundingElement) {
      boundingElement.current?.addEventListener('scroll', handleScroll, {
        passive: true,
      })
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (boundingElement) {
        boundingElement.current?.removeEventListener('scroll', handleScroll)
      } else {
        window.removeEventListener('scroll', handleScroll)
      }

      if (throttleTimeout) {
        clearTimeout(throttleTimeout)
      }
    }
  }, deps)
}

export default useScrollPosition
