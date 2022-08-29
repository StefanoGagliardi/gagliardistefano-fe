// Import core
import React from 'react';
// Import third parts
import { NextPage } from 'next';
import Head from 'next/head';
import cn from 'classnames';
// Import custom
import { Layout } from '@components/common';
import AppLink from '@services/routing/AppLink';
import { SvgNotFound } from '@assets/svg';

/**
 * Script start
 */
const NotFound: NextPage = (): JSX.Element => {
  return (
    <Layout pageProps={{ useDotsBg: true, wrapperClasses: ['not-found'] }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="py-200px bg-gray-100 flex items-center bg-service justify-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <figure>
              <img
                // login-page-blob.png
                src="/login-page-blob.png"
                // className={cn('h-50vh')}
                alt="Servizi web, ecommerce, social a Cremona e provincia"
              />
            </figure>
          </div>
          <div className="max-w-md pl-[8%]">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{' '}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              back to homepage
            </button>
            {/* <SvgNotFound /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(NotFound);
