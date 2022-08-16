// Import core
import { AppProps } from 'next/app';
import React, { FC, useEffect, useRef } from 'react';

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
import gsap from 'gsap/dist/gsap.js';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
import { AnimatePresence } from 'framer-motion';
import Cursor from '@components/ui/Cursor';

/**
 * Script start
 */
const Noop: FC<{ children: any }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps, router }: AppProps) {
  // NB: Layout component è usato a livello di pagina perchè seno non potevo usare FramerMotion
  // const Layout = (Component as any).Layout || Noop;
  const url = `http://localhost:3000${router.route}`;

  // Register scroll plugin for GSAP
  gsap.registerPlugin(ScrollTrigger);

  // This empty ref will use as container for query selection for gsap
  const el = useRef<any>(null);
  const q = gsap.utils.selector(el);

  // Test aniamtion
  useEffect(() => {
    gsap.to(q('.navbar-item'), {
      opacity: 1,
      x: -20,
      delay: 0.5,
      duration: 0.5,
      ease: 'none',
      stagger: 0.2,
    });
  }, []);

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

  return (
    <div ref={el} id="appRoot">
      <ManagedUIContext>
        {/* <AnimateSharedLayout> */}
        {/* <Layout pageProps={pageProps}> */}
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} canonical={url} key={url} />
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
