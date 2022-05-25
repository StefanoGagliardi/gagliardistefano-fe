// Import core
import { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';

// Import third parts
import mailgo from 'mailgo';
import AOS from 'aos'; // Animate on scroll

// Import customs
import { ManagedUIContext } from '@components/ui/context';
import themeConfig from '@config/theme';

// Import global styles: website & third parts
import '../assets/main.css';
import '../assets/chrome-bug.css';
import 'aos/dist/aos.css';
import setDebug from 'src/utils/debug';

/**
 * Script start
 */
const Noop: FC<{ children: any }> = ({ children }) => <>{children}</>;
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

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
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
        {/* </AnimateSharedLayout> */}
      </ManagedUIContext>
    </>
  );
}

export default MyApp;
