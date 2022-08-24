import { useEffect, useLayoutEffect } from 'react';

/**  https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 * Uguale a useEffect ma aspetta in modo asincrono i cambiamenti del dom
 * (non gira ssr, in quel caso spostare la logica in useEffect)
 * 
 * NB: Serve anche per la libreria GSAP 
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
