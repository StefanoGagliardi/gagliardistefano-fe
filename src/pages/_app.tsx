// Import core
import { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';

// Import third parts
import mailgo from 'mailgo';
import AOS from 'aos'; // Animate on scroll

// Import customs
import { ManagedUIContext } from '@components/ui/context';
import themeConfig from '@config/theme';
import setDebug from 'src/utils/debug';

// Import global styles: website & third parts
import '../assets/main.css';
import 'aos/dist/aos.css';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import { AnimatePresence } from 'framer-motion';

/**
 * Script start
 */
const Noop: FC<{ children: any }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps, router }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const url = `http://localhost:3000${router.route}`;

  useEffect(() => {
    document.body.classList?.remove('loading');
    if (themeConfig.mailgo === true) {
      mailgo({
        dark: false,
      });
    }

    if (themeConfig.aos === true) {
      AOS.init({
        duration: 500,
      });
    }

    // Set debug
    if (typeof window !== 'undefined') {
      setDebug(true);
    }
  }, []);

  return (
    <>
      <ManagedUIContext>
        {/* <AnimateSharedLayout> */}
        {/* <Layout pageProps={pageProps}> */}
        <Header />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} canonical={url} key={url} />
        </AnimatePresence>
        <Footer />
        {/* </Layout> */}
        {/* </AnimateSharedLayout> */}
      </ManagedUIContext>
    </>
  );
}

export default MyApp;
