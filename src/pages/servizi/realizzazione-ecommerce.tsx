// Import core
import React, { FC, ReactElement } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

// Import third parts
import cn from 'classnames';
import Link from 'next/link';

// Import custom
import s from './realizzazione-siti-web.module.scss';
import Layout from '@components/common/Layout';
import seo from './../../config/seo.json';
import ServiceContactsSection from '@components/pages/services/ServiceContactsSection';

export const PageRealizzazioneEcommerce: NextPage = (): ReactElement => {
  return (
    <Layout
      pageProps={{
        useDotsBg: true,
        wrapperClasses: ['single-service-template'],
      }}
    >
      <Head>
        <title>
          {seo?.pages?.rEcommerce?.title || 'Not found in seo.json'}
        </title>
        <meta
          name="description"
          content={seo?.pages?.rEcommerce?.desc || 'Not found in seo.json'}
        />
      </Head>
      <section
        className={cn(
          'relative ',
          'bg-service',
          'dark:bg-unset',
          'pb-[60px]',
          'pt-[170px]'
        )}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-start-3  col-end-11">
              <h1
                className={cn(
                  'font-bold',
                  'text-center',
                  'text-xl',
                  'text-accent',
                  'font-avenir'
                )}
                data-aos="fade-up"
              >
                Realizzazione Ecommerce a Cremona
              </h1>
              <p
                className={cn(
                  'text-center',
                  'my-5',
                  'mx-auto',
                  'dark:text-white',
                  'text-paragraphLg',
                  'font-medium',
                  'max-w-[60ch]'
                )}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Anni di esperienza negli ecommerce, uniti a
                molteplici progetti sviluppati, ad oggi ci permettono di offrire
                le soluzioni più adatte e moderne ai bussiness e agli obiettivi dei nostri clienti.
                <br />
                Offriamo due macro soluzione per ecommerce: piattaforma ad-hoc
                oppure utilizzo di un CMS.
                {/* <br />
                Il mondo ecommerce è vasto ed è sempre più difficile orientarsi.
                Questo sia per la complessità intrinseca sia perché sempre più
                frequentemente escono delle nuove soluzioni e metodologie per
                creare il tuo negozio online. */}
              </p>
              <p
                className={cn(
                  'text-center',
                  'my-5',
                  'mx-auto',
                  'dark:text-white',
                  'text-paragraphLg',
                  'font-medium',
                  'max-w-[60ch]',
                  'mb-0',
                  'hidden'
                )}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <strong>
                  Offriamo due macro soluzioni Ecommerce per esigenze diverse:
                </strong>
              </p>

              <ul
                className={cn(
                  'text-left',
                  'px-0 py-0 mx-0 ml-auto mr-auto',
                  'max-w-[650px]',
                  'dark:text-white',
                  'text-lg',
                  'font-medium',
                  'hidden'
                )}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <li>
                  1. Piattaforma{' '}
                  <span className="text-accent_stop">ad-hoc</span> completamente{' '}
                  <span className="text-accent_stop">personalizzata</span>{' '}
                </li>
                <li>
                  2. Ecommerce{' '}
                  <span className="text-accent_stop">basato su CMS</span>{' '}
                  (Content management system){' '}
                </li>
              </ul>

              <h2
                className={cn(
                  'text-center',
                  'my-5',
                  'mx-auto',
                  'text-dark',
                  'dark:text-white',
                  'text-paragraphLg',
                  'font-medium',
                  'max-w-[60ch]',
                  'mb-0'
                )}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <strong>
                  In questa pagina vedremo i vantaggi della realizzazione di una
                  <br />
                  <span className="text-accent">
                    piattaforma e-commerce proprietaria
                  </span>
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <ServiceContactsSection
        title="Vuoi aprire un ecommerce?"
        subTitle={
          <>
            Se hai in mente un ecommerce e desideri approfondire le soluzioni
            disponibili,
            <br /> step operativi o altri aspetti; il nostro team è a tua
            disposizione, senza impegni.
          </>
        }
        classNames={['bg-service', 'dark:bg-unset']}
      />
    </Layout>
  );
};

// PageRealizzazioneSitiWeb.Layout = Layout;
// PageRealizzazioneSitiWeb.displayName = "realizzazione-siti-web"

export default PageRealizzazioneEcommerce;
