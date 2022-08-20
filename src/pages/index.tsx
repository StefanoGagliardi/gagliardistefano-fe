// Import core
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

// Import third parts
import cn from 'classnames';
import gsap from 'gsap/dist/gsap.js';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

// Import customs
import s from './index.module.css';
import Layout from '@components/common/Layout';
import HomeComponents from '@components/pages/Home';
import Link from 'next/link';
import url from '@services/url';
import { SvgArrowRightLongRegular, SvgFileContractThin } from '@assets/svg';
import DevelopmentProcess from '@components/pages/sections/DevelopmentProcess';
import useMapRef from '@services/hooks/useMapRef';

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
  // Generate list of ref
  const [gsapRef, setGsapRef] = useMapRef<HTMLElement>();

  // First section animation Refs
  //Note that we are using useState instead of useRef with the timeline. This is to ensure the timeline will be available when the child renders for the first time.
  const [tl, setTl] = useState(() => gsap.timeline({ repeat: 0 }));
  const [tl2, setTl2] = useState(() => gsap.timeline({ repeat: 0 }));

  // First Section Timeline animation
  useEffect(() => {
    const animationRefs = gsapRef.current;
    // tl.to([imationRefs.get(4)], { scale: 0.6, duration: 2 });
    tl.add('first-section')
      .from(
        [animationRefs.get(4)],
        { x: '30%', duration: 5, scale: 0.8 },
        'first-section'
      )
      .from(
        [animationRefs.get(1)],
        { y: -100, opacity: 0, duration: 1 },
        'first-section'
      )
      .from(
        [animationRefs.get(2)],
        { y: -100, opacity: 0, duration: 1, delay: 0.5 },
        'first-section'
      )
      .from(
        [animationRefs.get(3)],
        { y: -100, opacity: 0, duration: 1, delay: 0.8 },
        'first-section'
      )
      .from(
        [animationRefs.get(0)],
        { x: -50, opacity: 0, duration: 1, delay: 0.5 },
        'first-section'
      );
  }, []);

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
              <img
                src={'/scrollIcon.png'}
                className={s.scrollIcon}
                ref={(ref) => setGsapRef(ref, 0)}
              />
              <div className={cn('ml-50 py-5')}>
                <h1
                  className={cn(s.h1, 'text-dark dark:text-white')}
                  ref={(ref) => setGsapRef(ref, 1)}
                  // style={{ opacity: '1' }}
                >
                  Assumi le skill,<br></br>la qualità e l'sperienza
                </h1>
                <p
                  className={cn(
                    'text-paragraphLg',
                    'my-20px',
                    'font-semiBold',
                    'text-dark dark:text-white mt-5'
                  )}
                  ref={(ref) => setGsapRef(ref, 2)}
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
                    ref={(ref) => setGsapRef(ref, 3)}
                  >
                    Scopri i servizi
                    <SvgArrowRightLongRegular />
                  </a>
                </Link>
              </div>
            </div>
            <div className={cn(s.figureMask, 'col-span-6 relative')}>
              <figure ref={(ref) => setGsapRef(ref, 4)}>
                <img
                  // login-page-blob.png
                  src="/home-gradient-v2.jpg"
                  className={cn('h-50vh')}
                  alt="Servizi web, ecommerce, social a Cremona e provincia"
                />
              </figure>
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
                  Rivolto sia a piccole ditte che grandi aziende, digitalizziamo
                  la tua attività.
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
              <h3
                className={cn(
                  'font-bold',
                  'text-center',
                  'text-xl',
                  'text-accent',
                  'font-avenir'
                )}
              >
                I nostri servizi Marketing & SEO
              </h3>
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
                  Rivolto sia a piccole ditte che grandi aziende, digitalizziamo
                  la tua attività.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={cn(s.secondSectionBefore, 'py-60px', 'bg-service', 'dark')}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-start-3  col-end-11">
              <h3
                className={cn(
                  'font-bold',
                  'text-center',
                  'text-xl',
                  'text-accent',
                  'font-avenir'
                )}
              >
                Pionieri nel Web 3.0
              </h3>
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
                <strong>
                  NextGeneration è sempre pronta ad innovare ed oggi lo facciamo
                  col Web 3.0
                </strong>
                <br />
                Scopri come le nuove tecnoclogie, il web 3.0, la blockchain, gli
                NFT e le cryptovalute possono rivoluzionare il tuo bussiness, la
                sicurezza e la raccolta e ridistribuzione dei finanziamenti e
                molto altro
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-1 focus-tag-grid">
            <div className="col-start-3 col-span-3">
              <div className="grid text-primary bg-primary dark:bg-secondary focus">
                <SvgFileContractThin />
                <span>Smart contract</span>
              </div>
              <div className="grid text-primary bg-primary dark:bg-secondary focus">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M304 240V16.58C304 7.555 310.1 0 320 0c123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16H304zm189.1-48c-14-71.5-69.6-127.96-141.1-141.1V192h141.1zM256 49.61V288l156.5 156.5c6.7 6.7 6.2 17.7-1.5 23.2-39.2 27.9-87.2 44.3-139 44.3-132.5 0-240-107.4-240-240 0-121.3 90.1-221.66 206.1-237.75 10.1-1.26 17.9 6.11 17.9 15.36zM208 307.9V90.91C133.4 117.3 80 188.4 80 272c0 106 85.1 192 192 192 27.2 0 52.1-5.6 76.4-15.8L208 307.9zM558.4 288c9.2 0 16.6 7.8 15.4 17-7.7 55.9-34.7 105.6-73.9 142.3-6 4.8-15.4 5.2-21.2-.6L320 288h238.4z"></path>
                </svg>
                <span>Applicazioni Web3</span>
              </div>
              <div className="grid text-primary bg-primary dark:bg-secondary focus">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M304 240V16.58C304 7.555 310.1 0 320 0c123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16H304zm189.1-48c-14-71.5-69.6-127.96-141.1-141.1V192h141.1zM256 49.61V288l156.5 156.5c6.7 6.7 6.2 17.7-1.5 23.2-39.2 27.9-87.2 44.3-139 44.3-132.5 0-240-107.4-240-240 0-121.3 90.1-221.66 206.1-237.75 10.1-1.26 17.9 6.11 17.9 15.36zM208 307.9V90.91C133.4 117.3 80 188.4 80 272c0 106 85.1 192 192 192 27.2 0 52.1-5.6 76.4-15.8L208 307.9zM558.4 288c9.2 0 16.6 7.8 15.4 17-7.7 55.9-34.7 105.6-73.9 142.3-6 4.8-15.4 5.2-21.2-.6L320 288h238.4z"></path>
                </svg>
                <span>NFT: Non-fungible token</span>
              </div>
              <div className="grid text-primary bg-primary dark:bg-secondary focus">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M304 240V16.58C304 7.555 310.1 0 320 0c123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16H304zm189.1-48c-14-71.5-69.6-127.96-141.1-141.1V192h141.1zM256 49.61V288l156.5 156.5c6.7 6.7 6.2 17.7-1.5 23.2-39.2 27.9-87.2 44.3-139 44.3-132.5 0-240-107.4-240-240 0-121.3 90.1-221.66 206.1-237.75 10.1-1.26 17.9 6.11 17.9 15.36zM208 307.9V90.91C133.4 117.3 80 188.4 80 272c0 106 85.1 192 192 192 27.2 0 52.1-5.6 76.4-15.8L208 307.9zM558.4 288c9.2 0 16.6 7.8 15.4 17-7.7 55.9-34.7 105.6-73.9 142.3-6 4.8-15.4 5.2-21.2-.6L320 288h238.4z"></path>
                </svg>
                <span>Consulenza Blockchain, SM, crypto, nft</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cn(s.secondSectionBefore, 'py-60px', 'bg-service')}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-start-3  col-end-11">
              <h3
                className={cn(
                  'font-bold',
                  'text-center',
                  'text-xl',
                  'text-accent',
                  'font-avenir'
                )}
              >
                Entra in contatto con il team!
              </h3>
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
                <strong>
                  Richiedi un Audit gratuito sia tecnico che seo del tuo sito
                  web.
                </strong>
                <br />
                Inoltre ti consigliamo di iscriverti alla nostra newsletter per
                ottenere importanti consigli, suggerimenti e aggiornamenti sulle
                migliori pratiche da adottare per il tuo sitoweb o e-commerce.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[40px] mt-10">
            <div className="col-span-4 text-center">
              <div className="bg-white relative z-3 shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                <h4 className="font-semiBold text-lgm mb-4">
                  Cavalca l'onda digitale
                </h4>
                <p className="text-paragraph">
                  <strong>Visita il nostro blog</strong>
                </p>
              </div>
            </div>
            <div className="col-span-4 text-center">
              <div className="bg-white relative z-3 shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                <h4 className="font-semiBold text-lgm mb-4">
                  Consigli gratuiti
                </h4>
                <p className="text-paragraph">
                  Iscriviti alla nostra newsletter email per le ultime notizie,
                  consigli utili e novità SEO per migliorare il tuo
                  posizionamento online direttamente nella tua casella email!
                </p>
              </div>
            </div>
            <div className="col-span-4 text-center">
              <div className="bg-white relative z-3 shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                <h4 className="font-semiBold text-lgm mb-4">Analisi sitoweb</h4>
                <p className="text-paragraph">
                  Per ottener un'analisi e audit gratuito, sia tecnico che SEO,
                  sul tuo sitoweb o ecommerce, completa il modulo qui sotto e ti
                  risponderemo il prima possibile con un'analisi dettagliata
                </p>
              </div>
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
