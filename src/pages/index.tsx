// Import core
import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, NextPage } from 'next';

// Import third parts
import cn from 'classnames';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Import customs
import s from './index.module.css';
import Layout from '@components/common/Layout';
import HomeComponents from '@components/pages/Home';
import Link from 'next/link';
import url from '@services/url';
import {
  SvgArrowRightLongRegular,
  SvgChartUserRegular,
  SvgDiceD20Regular,
  SvgFileContractRegular,
  SvgHexagonVerticalNFTRegular,
  SvgBarcodeReadRegular,
  SvgBitcoinSignRegular,
  SvgChartPieRegular,
  SvgEnvelopeOpenDollarRegular,
  SvgFacebookFBrands,
  SvgFileInvoiceRegular,
  SvgFilterCircleDollarRegular,
  SvgGoogleBrands,
  SvgHeadsetRegular,
  SvgLanguageRegular,
  SvgTruckFastRegular,
} from '@assets/svg';
import DevelopmentProcess from '@components/pages/sections/DevelopmentProcess';
import useMapRef from '@services/hooks/useMapRef';
import FocusBox from '@components/pages/services/FocusBox';
import useArrayRef from '@services/hooks/useArrayRefs';
import { useIsomorphicLayoutEffect } from 'framer-motion';

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

export const Home: NextPage = (): JSX.Element => {
  // Generate list of ref
  const [gsapRef, setGsapRef] = useMapRef<HTMLElement>();

  // First section animation Refs
  //Note that we are using useState instead of useRef with the timeline. This is to ensure the timeline will be available when the child renders for the first time.
  const [tl, setTl] = useState(() => gsap.timeline({ repeat: 0 }));

  // First Section Timeline animation
  useIsomorphicLayoutEffect(() => {
    const animationRefs = gsapRef.current;
    // tl.to([imationRefs.get(4)], { scale: 0.6, duration: 2 });
    tl.add('first-section')
      .from(
        [animationRefs.get(4)],
        { x: 100, duration: 12, scale: 0.8 },
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

  /**
   * Gsap menu item stagger animation
   */
  const [gsapRefArray, setGsapRefArray] = useArrayRef();
  useIsomorphicLayoutEffect(() => {
    // hide(gsapRefArray.current);
    // Register scroll plugin for GSAP
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      gsapRefArray.current,
      {
        autoAlpha: 0,
        y: -100,
      },
      {
        // NB: REMOVE PROPS FROM HERE Beacuse Define animation in onEnter callback,
        // This double fromTo() cause double render
        // autoAlpha: 1,
        // y: 0,
        immediateRender: false, // Prevent animation, and startwith scrollTrigger
        scrollTrigger: {
          trigger: gsapRefArray.current[0],
          markers: false,
          end: '+=300px',
          onEnter: (self: ScrollTrigger) => {
            gsap.fromTo(
              gsapRefArray.current,
              {
                autoAlpha: 0,
                y: -100,
              },
              {
                autoAlpha: 1,
                y: 0,
                stagger: {
                  from: 'start', // "start", "center", "edges", "random", or "end"
                  each: 0.2,
                },
              }
            );
          },
          onEnterBack: (self: ScrollTrigger) => {
            gsap.fromTo(
              gsapRefArray.current,
              {
                autoAlpha: 0,
                y: 100,
              },
              {
                autoAlpha: 1,
                y: 0,
                stagger: {
                  from: 'end', // "start", "center", "edges", "random", or "end"
                  each: 0.2,
                },
              }
            );
          },
          onLeaveBack: (self: ScrollTrigger) => {
            hide(gsapRefArray.current);
          },
          onLeave: (self: ScrollTrigger) => {
            hide(gsapRefArray.current);
          },
        },
      }
    );
  }, []);

  /**
   * Web3 Section TAB - Animation
   */
  const [activeWeb3, setActiveWeb3] = useState<number>(1); // Active TAB of Web3 section
  const [gsapRefWeb, setGsapRefWeb3] = useMapRef<HTMLElement>();
  useIsomorphicLayoutEffect(() => {
    const animationRefs = gsapRefWeb.current;
    // NB: Da una refs, posso accedere agli elementi figli trami .children().
    // Posso usarli accendendoci come Array oppure usare direttamente l'array nel caso di uno stagger
    if (activeWeb3 === 1) {
      gsap.fromTo(
        animationRefs.get(0).children,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15 }
      );
    }
    if (activeWeb3 === 2) {
      gsap.fromTo(
        animationRefs.get(1).children,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15 }
      );
    }
    if (activeWeb3 === 3) {
      gsap.fromTo(
        animationRefs.get(2).children,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15 }
      );
    }
    if (activeWeb3 === 4) {
      gsap.fromTo(
        animationRefs.get(3).children,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15 }
      );
    }
  }, [activeWeb3]);

  /**
   * Hide HTMLElement with Gsap via alpha (opacity) 0 to ensure right show of animation
   * @param elem: HTMLElement | HTMLElement[] | Map<number, HTMLElement>
   * @returns void
   */
  const hide = (elem: HTMLElement | Map<number, HTMLElement>): void => {
    // JS Map with DOM Reference
    if (elem instanceof Map) {
      elem.forEach((value, key) => {
        gsap.killTweensOf(value);
        gsap.set(value, { autoAlpha: 0 });
      });
      return;
    }

    // Array of DOM reference
    if (Array.isArray(elem) && elem.length > 0) {
      for (let i = 0; i < elem.length; i++) {
        gsap.killTweensOf(elem[i]);
        gsap.set(elem[i], { autoAlpha: 0 });
      }
      return;
    }

    // Single element
    gsap.killTweensOf(elem);
    gsap.set(elem, { autoAlpha: 0 });
  };

  return (
    <Layout pageProps={{ useDotsBg: true, wrapperClasses: ['homepage'] }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section
        className={cn(
          'py-5 px-3 relative flex items-center pt-[170px] pb-60px bg-service dark:bg-unset',
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
                      'btn btn-components-outline btn-icon icon-hover',
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
      <section
        className={cn(
          s.secondSectionBefore,
          'py-60px',
          'bg-service dark:bg-unset'
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
          'relative flex items-center bg-service dark:bg-unset pt-[80px] pb-[120px]'
        )}
      >
        <HomeComponents.MainServiceCard />
      </section>
      <section
        className={cn(
          s.secondSectionBefore,
          'py-60px',
          'bg-service dark:bg-unset'
        )}
      >
        {/* <div className="container mx-auto"> */}
        <DevelopmentProcess
          introColumnContent={
            <>
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
            </>
          }
        />
        {/* </div> */}
      </section>
      <section
        className={cn(
          s.secondSectionBefore,
          'py-60px',
          'bg-service dark:bg-unset'
        )}
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
            <div
              className={cn(
                'col-start-3',
                'col-span-8',
                'flex',
                'flex-wrap',
                'focus-tag-grid',
                'focus-text-inline',
                'pt-60px'
              )}
            >
              <FocusBox
                text={'Analytics Sitoweb & Ecommerce'}
                icon={<SvgChartPieRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Integrazione spedizionieri'}
                icon={<SvgTruckFastRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Email marketing'}
                icon={<SvgEnvelopeOpenDollarRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Google Merchant'}
                icon={<SvgGoogleBrands />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Customer live chat'}
                icon={<SvgHeadsetRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Multilingua e multi-regione'}
                icon={<SvgLanguageRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Facebook & Instagram Shop'}
                icon={<SvgFacebookFBrands />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Campagne Advertising Social'}
                icon={<SvgFilterCircleDollarRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Codici promozionali'}
                icon={<SvgBarcodeReadRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Fatture PDF e Fatturazione automatica'}
                icon={<SvgFileInvoiceRegular />}
                setRef={setGsapRefArray}
              />
              <FocusBox
                text={'Supporto Web3 e Crypto'}
                icon={<SvgBitcoinSignRegular />}
                setRef={setGsapRefArray}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={cn(
          s.secondSectionBefore,
          'py-60px',
          'bg-service dark:bg-unset',
          'dark'
        )}
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
                  'font-medium',
                  'mb-[40px]  '
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
              <div
                className={cn(
                  'grid text-primary bg-primary dark:bg-secondary focus',
                  {
                    'active-focus': activeWeb3 === 1,
                  }
                )}
                onClick={() => setActiveWeb3(1)}
              >
                <SvgFileContractRegular />
                <span>Smart contract</span>
              </div>
              <div
                className={cn(
                  'grid text-primary bg-primary dark:bg-secondary focus',
                  {
                    'active-focus': activeWeb3 === 2,
                  }
                )}
                onClick={() => setActiveWeb3(2)}
              >
                <SvgDiceD20Regular />
                <span>Applicazioni Web3</span>
              </div>
              <div
                className={cn(
                  'grid text-primary bg-primary dark:bg-secondary focus',
                  {
                    'active-focus': activeWeb3 === 3,
                  }
                )}
                onClick={() => setActiveWeb3(3)}
              >
                <SvgHexagonVerticalNFTRegular />
                <span>NFT: Non-fungible token</span>
              </div>
              <div
                className={cn(
                  'grid text-primary bg-primary dark:bg-secondary focus',
                  {
                    'active-focus': activeWeb3 === 4,
                  }
                )}
                onClick={() => setActiveWeb3(4)}
              >
                <SvgChartUserRegular />
                <span>Consulenza Blockchain, SM, crypto, nft</span>
              </div>
            </div>
            <div className="col-span-5 pl-[50px]">
              {activeWeb3 === 1 && (
                <div ref={(ref) => setGsapRefWeb3(ref, 0)}>
                  <h3
                    className={cn(
                      'font-bold',
                      'text-lgm',
                      'text-accent',
                      'font-avenir',
                      'mb-0'
                    )}
                  >
                    Sviluppo Smart Contract
                  </h3>
                  <p
                    className={cn(
                      'dark:text-white',
                      'mt-5',
                      'text-paragraph',
                      'font-medium'
                      // 'max-w-[60ch]'
                    )}
                  >
                    Next Generation offers Smart Contract Development services,
                    the luxury of making Customized Smart Contract is within
                    your grasp! With a wealth of experience in building advanced
                    protocols and Virtual Machines, we have gained a deep
                    understanding of smart contracts’ inter-dependencies and
                    efficiency triggers, which helps us underpin your solution
                    by educated tech know-how.
                  </p>
                  <Link href={`${url.blockchain() as string}#smart-contract`}>
                    <a
                      className={cn(
                        'btn btn-components-outline btn-icon icon-hover',
                        'rounded text-paragraph font-bold mt-10'
                      )}
                      // ref={(ref) => setGsapRef(ref, 3)}
                    >
                      Approfondisci
                      <SvgArrowRightLongRegular />
                    </a>
                  </Link>
                </div>
              )}
              {activeWeb3 === 2 && (
                <div ref={(ref) => setGsapRefWeb3(ref, 1)}>
                  <h3
                    className={cn(
                      'font-bold',
                      'text-lgm',
                      'text-accent',
                      'font-avenir'
                    )}
                  >
                    Sviluppo applicazioni Web 3.0
                  </h3>
                  <p
                    className={cn(
                      'dark:text-white',
                      'mt-5',
                      'text-paragraph',
                      'font-medium'
                      // 'max-w-[60ch]'
                    )}
                  >
                    Next Generation offers Smart Contract Development services,
                    the luxury of making Customized Smart Contract is within
                    your grasp! With a wealth of experience in building advanced
                    protocols and Virtual Machines, we have gained a deep
                    understanding of smart contracts’ inter-dependencies and
                    efficiency triggers, which helps us underpin your solution
                    by educated tech know-how.
                  </p>
                  <Link href={`${url.blockchain() as string}#app-web3`}>
                    <a
                      className={cn(
                        'btn btn-components-outline btn-icon icon-hover',
                        'rounded text-paragraph font-bold mt-10'
                      )}
                      // ref={(ref) => setGsapRef(ref, 3)}
                    >
                      Approfondisci
                      <SvgArrowRightLongRegular />
                    </a>
                  </Link>
                </div>
              )}
              {activeWeb3 === 3 && (
                <div ref={(ref) => setGsapRefWeb3(ref, 2)}>
                  <h3
                    className={cn(
                      'font-bold',
                      'text-lgm',
                      'text-accent',
                      'font-avenir'
                    )}
                  >
                    Sviluppo e consulenza NFT: Non-fungible Token
                  </h3>
                  <p
                    className={cn(
                      'dark:text-white',
                      'mt-5',
                      'text-paragraph',
                      'font-medium'
                      // 'max-w-[60ch]'
                    )}
                  >
                    Next Generation offers Smart Contract Development services,
                    the luxury of making Customized Smart Contract is within
                    your grasp! With a wealth of experience in building advanced
                    protocols and Virtual Machines, we have gained a deep
                    understanding of smart contracts’ inter-dependencies and
                    efficiency triggers, which helps us underpin your solution
                    by educated tech know-how.
                  </p>
                  <Link href={`${url.blockchain() as string}#nft  `}>
                    <a
                      className={cn(
                        'btn btn-components-outline btn-icon icon-hover',
                        'rounded text-paragraph font-bold mt-10'
                      )}
                      // ref={(ref) => setGsapRef(ref, 3)}
                    >
                      Approfondisci
                      <SvgArrowRightLongRegular />
                    </a>
                  </Link>
                </div>
              )}
              {activeWeb3 === 4 && (
                <div ref={(ref) => setGsapRefWeb3(ref, 3)}>
                  <h3
                    className={cn(
                      'font-bold',
                      'text-lgm',
                      'text-accent',
                      'font-avenir'
                    )}
                  >
                    Consulenza su Blockchain, SM, NFT e Web 3.0
                  </h3>
                  <p
                    className={cn(
                      'dark:text-white',
                      'mt-5',
                      'text-paragraph',
                      'font-medium'
                      // 'max-w-[60ch]'
                    )}
                  >
                    Next Generation offers Smart Contract Development services,
                    the luxury of making Customized Smart Contract is within
                    your grasp! With a wealth of experience in building advanced
                    protocols and Virtual Machines, we have gained a deep
                    understanding of smart contracts’ inter-dependencies and
                    efficiency triggers, which helps us underpin your solution
                    by educated tech know-how.
                  </p>
                  <Link href={`${url.blockchain() as string}#consulting`}>
                    <a
                      className={cn(
                        'btn btn-components-outline btn-icon icon-hover',
                        'rounded text-paragraph font-bold mt-10'
                      )}
                      // ref={(ref) => setGsapRef(ref, 3)}
                    >
                      Approfondisci
                      <SvgArrowRightLongRegular />
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <HomeComponents.ContactSection />
    </Layout>
  );
};
// </motion.div>
// </AnimatePresence>

// Home.Layout = Layout;
export default React.memo(Home);
