// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';
import Head from 'next/head';
import { NextPage } from 'next';
import { Layout } from '@components/common';

// Import custom
import seo from './../config/seo.json';
import s from './privacy-policy.module.scss';

export const PrivacyPolicyPage: NextPage & {
  Layout: FC;
} = (): ReactElement => {
  console.log('seo: ', seo);

  return (
    <>
      <Head>
        <title>
          {seo?.pages?.['privacy-policy']?.title || 'Not found in seo.json'}
        </title>
        <meta
          name="description"
          content={
            seo?.pages?.['privacy-policy']?.desc || 'Not found in seo.json'
          }
        />
      </Head>
      <section className={cn('relative ', s.firstSection, 'bg-service')}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-start-3  col-end-11">
              <h1>Realizzazione siti web | Milano</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

PrivacyPolicyPage.Layout = Layout;
export default PrivacyPolicyPage;
