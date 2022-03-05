// Import core
import { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';

// Import third parts
import AOS from 'aos';
import mailgo from 'mailgo';

// Import customs
import { ManagedUIContext } from '@components/ui/context';

// Import global styles
import '../assets/main.css';
import '../assets/chrome-bug.css';
import 'aos/dist/aos.css';

const mailgoConfig = {
  dark: true,
};

/**
 * Script start
 */
const Noop: FC = ({ children }) => <>{children}</>;
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  useEffect(() => {
    document.body.classList?.remove('loading');
    mailgo(mailgoConfig);
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
