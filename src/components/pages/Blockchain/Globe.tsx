import { FC, ReactElement, useEffect, useRef } from 'react';
import cn from 'classnames';
import s from './Globe.module.scss';
import GlobeClass from './classes/GlobeClass';
import { IRef } from '@interfaces/props';

const Globe: FC = (): ReactElement => {
  const jsGlobeRef: IRef<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When div reference is load
    if (jsGlobeRef.current) {
      // Initialize ThreeJs class for Globe canvas
      const globeClass = new GlobeClass(jsGlobeRef.current);

      // When class is created
      if (globeClass) {
        // Load object, light, scene, camera of Globe from entry function load()
        globeClass.load();

        // Senza le prossime due righe CI SONO COMUNQUE dei paesi impostati.
        // const cstomCountryList = 'it,us'; // @TODO Non sono sicuro funzioni
        // globeClass.setCountryList(cstomCountryList.split(','));

        // When Globe Three.js Object is created render it to screen
        globeClass.play();
      }
    }
  }, []); // NB: Con le ref non servono depss

  return (
    <figure className={s.backgroundGlobe} data-js-controller="BackgroundGlobe">
      <div className={cn('js-globe', s.globe)} ref={jsGlobeRef}></div>
    </figure>
  );
};

export default Globe;
