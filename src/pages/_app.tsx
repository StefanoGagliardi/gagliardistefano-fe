// Import core
import { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';

// Import third parts
import AOS from 'aos';
import 'aos/dist/aos.css';
import mailgo from 'mailgo';

// Import customs
import { ManagedUIContext } from '@components/ui/context';
import '../assets/main.css';
import '../assets/chrome-bug.css';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

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

  const { locale, locales, asPath } = useRouter();
  console.log('LOCALE useRouter: ', locale);
  console.log('LOCALES useRouter: ', locales);
  console.log('ASPATH useRouter: ', asPath);
  useEffect(() => {

  }, [])

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

export default appWithTranslation(MyApp);
