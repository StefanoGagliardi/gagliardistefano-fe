// Import core
import { AppProps } from 'next/app';
import React, { FC, useEffect, useRef, useState } from 'react';

// Import third parts
import mailgo from 'mailgo';

// Import customs
import { ManagedUIContext } from '@components/ui/context';
import themeConfig from '@config/theme';
import setDebug from 'src/utils/debug';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';

// Import global styles: website & third parts
import '../assets/styles/theme/gsap.scss';
import '../assets/styles/main.scss';

// Animations libraries: gsap and framer-motion
// import gsap from 'gsap';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

import { AnimatePresence } from 'framer-motion';
import Cursor from '@components/ui/Cursor';
import useIsomorphicLayoutEffect from '@services/hooks/useIsomorphicLayoutEffect';
import { getWebSiteUrl } from '@config/site';
// import SmootherContext from '@services/gsap/SmootherContext';

/**
 * Script start
 */
const Noop: FC<{ children: any }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps, router }: AppProps) {
  // NB: Layout component è usato a livello di pagina perchè seno non potevo usare FramerMotion
  // const Layout = (Component as any).Layout || Noop;
  const url = `${getWebSiteUrl()}${router.route}`;

  useEffect(() => {
    document.body.classList?.remove('loading');
    if (themeConfig.mailgo === true) {
      mailgo({
        dark: false,
      });
    }

    // if (themeConfig.aos === true && typeof (AOS as any)?.init !== 'undefined') {
    //   AOS.init({
    //     duration: 500, 
    //   });
    // }

    // Set debug
    if (typeof window !== 'undefined') {
      setDebug(true);
    }
  }, []);

  // const [smoother, setSmoother] = useState<null | ScrollSmoother>(null);
  useIsomorphicLayoutEffect(() => {
    // gsap.registerPlugin(ScrollTrigger); // ScrollSmoother

    // let smoother = ScrollSmoother.create({
    //   smooth: 0,
    //   normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    //   ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    //   effects: true,
    //   // preventDefault: true,
    // });

    // setSmoother(smoother);
  }, []);

  return (
    <div id="appRoot">
      <ManagedUIContext>
        {/* <AnimateSharedLayout> */}
        {/* <Layout pageProps={pageProps}> */}
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {/* <SmootherContext.Provider value={{ smoother }}> */}
          <Component {...pageProps} canonical={url} key={url} />
          {/* </SmootherContext.Provider> */}
        </AnimatePresence>

        {/* Header essendo Fixed, si vederà sempre come primo elemento asttacco in alto. Cosi da partire col DOM coi testi della pagina */}
        <Header />
        <Footer />

        {/* Custom cursor bg and hover effect */}
        <Cursor />

        {/* </Layout> */}
        {/* </AnimateSharedLayout> */}
      </ManagedUIContext>
    </div>
  );
}

export default MyApp;
