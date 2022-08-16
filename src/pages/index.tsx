// Import core
import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

// Import third parts
import cn from 'classnames';

// Import customs
import s from './index.module.css';
import Layout from '@components/common/Layout';
import HomeComponents from '@components/pages/Home';
import Image from 'next/image';
import Link from 'next/link';
import url from '@services/url';
import { SvgArrowRightLongRegular } from '@assets/svg';
import DevelopmentProcess from '@components/pages/sections/DevelopmentProcess';
// import { SVGArrowSvg, SvgGlobe, SvgScrollIcon } from '@assets/svg';

/**
 * Script start
 */
export async function getStaticProps({
  locale,
  preview,
}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

export const Home = (): JSX.Element => {
  return (
    <Layout pageProps={{ useDotsBg: true }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section
        className={cn(
          'py-5 px-3 relative flex items-center pt-[170px] pb-60px bg-service',
          s.firstSection
        )}
      >
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-6 relative self-center">
              <img src={'/scrollIcon.png'} className={s.scrollIcon} />
              <div className={cn('ml-50 py-5')}>
                <h1 className={cn(s.h1, 'text-dark dark:text-white')}>
                  Assumi le skill,<br></br>la qualità e l'sperienza
                </h1>
                <p
                  className={cn(
                    'text-paragraphLg',
                    'my-20px',
                    'font-semiBold',
                    'text-dark dark:text-white mt-5'
                  )}
                >
                  Accellera i tuoi progetti software e digitali con un team
                  <br></br>
                  all'avanguardia, d'esperienza pronto a valutare ed offire
                  <br></br>
                  <span className="font-bold text-logoBlue">
                    soluzioni competitive
                  </span>
                </p>
                <Link href={url.websiteCreation() as string}>
                  <a
                    className={cn(
                      'btn-components-outline btn-icon icon-hover',
                      'rounded text-paragraphLg font-bold'
                    )}
                  >
                    Scopri i servizi
                    <SvgArrowRightLongRegular />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-6 relative">
              <img
                src="/login-page-blob.png"
                className={cn('h-50vh')}
                alt="Servizi web, ecommerce, social a Cremona e provincia"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={cn(s.secondSectionBefore, 'py-60px', 'bg-service')}>
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
              >
                Next Generation, il tuo leader nella creazione di siti web e
                e-commerce. Il tuo canale di ingresso per soluzioni di business
                easy-to-use
              </h1>
              <p
                className={cn(
                  'text-center',
                  'dark:text-white',
                  'my-5',
                  'mx-auto',
                  'text-paragraphLg',
                  'font-medium'
                  // 'max-w-[60ch]'
                )}
              >
                Se vuoi far crescere il tuo business, tutti sanno che hai
                bisogno di un sito web vincente. E un'immagine di marca
                stellare. E favolose campagne pubblicitarie. E un buon seguito
                sui social media.
                <br /> È difficile sapere da dove cominciare.
                <br />
                <br />
                <strong>
                  Next Generation, questo è quello per il quale siamo qui.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={cn(
          s.secondSection,
          'relative flex items-center bg-service pt-[80px] pb-[120px]'
        )}
      >
        <HomeComponents.MainServiceCard />
      </section>
      <section className={cn(s.secondSectionBefore, 'py-60px', 'bg-service')}>
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
              >
                Next Generation: come lavoriamo
              </h1>
              <p
                className={cn(
                  'text-center',
                  'dark:text-white',
                  'my-5',
                  'mx-auto',
                  'text-paragraphLg',
                  'font-medium'
                  // 'max-w-[60ch]'
                )}
              >
                Scopri il nostro approggio verso nuovi clienti e nuovi progetti.
                <br />
                <strong>
                  Rivolto sia a piccole ditte che grandi aziende, digitalizziamo la tua attività.
                </strong>
              </p>
            </div>
          </div>
          <DevelopmentProcess />
        </div>
      </section>
      <section className={cn(s.secondSectionBefore, 'py-60px', 'bg-service')}>
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
              >
                I nostri servizi Marketing & SEO
              </h1>
              <p
                className={cn(
                  'text-center',
                  'dark:text-white',
                  'my-5',
                  'mx-auto',
                  'text-paragraphLg',
                  'font-medium'
                  // 'max-w-[60ch]'
                )}
              >
                Scopri il nostro approggio verso nuovi clienti e nuovi progetti.
                <br />
                <strong>
                  Rivolto sia a piccole ditte che grandi aziende, digitalizziamo la tua attività.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
// </motion.div>
// </AnimatePresence>

// Home.Layout = Layout;
export default Home;
