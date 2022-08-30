// Import core
import React from 'react';
// Import third parts
import { NextPage } from 'next';
import Head from 'next/head';
import cn from 'classnames';
// Import custom
import { Layout } from '@components/common';
import AppLink from '@services/routing/AppLink';
import { SvgArrowRightLongRegular, SvgNotFound } from '@assets/svg';
import url from '@services/url';

/**
 * Script start
 */
const NotFound: NextPage = (): JSX.Element => {
  return (
    <Layout pageProps={{ useDotsBg: true, wrapperClasses: ['not-found'] }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="py-150px bg-gray-100 flex items-center bg-service justify-center relative">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-45% w-45% relative z-10">
            <figure style={{ maxWidth: '400px' }} className={'ml-auto mr-auto'}>
              <img
                // login-page-blob.png
                src="/login-page-blob.png"
                // className={cn('h-50vh')}
                alt="Servizi web, ecommerce, social a Cremona e provincia"
              />
            </figure>
          </div>
          <div className="max-w-md relative z-10">
            <h1 className="font-bold text-xxl text-accent font-avenir text-[60px]">404</h1>
            <p className="dark:text-white my-5 mx-auto text-paragraphLg font-medium max-w-[60ch]">
              Spiacenti, non siamo riusciti a trovare questa pagina.
              <br /> Oppure questa pagina è in costruzione.
            </p>
            <p className="dark:text-white mx-auto text-paragraphLg font-medium max-w-[60ch] mb-8">
              Ma non preoccuparti, puoi trovare molte altre cose sulla nostra
              homepage.
            </p>

            <AppLink
              href={url.home() as string}
              className={cn(
                'btn btn-components-outline btn-icon',
                'rounded text-paragraphLg font-bold'
              )}
            >
              Scopri i servizi
              <SvgArrowRightLongRegular />
            </AppLink>
            {/* <SvgNotFound /> */}
          </div>
          <h1
            className="font-bold text-xxl text-accent font-avenir"
            style={{
              position: 'absolute',
              top: 'calc(50% - 200px)',
              fontSize: '400px',
              zIndex: '0',
              opacity: '.8',
              lineHeight: '400px',
              color: '#fff',
            }}
          >
            404
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(NotFound);
