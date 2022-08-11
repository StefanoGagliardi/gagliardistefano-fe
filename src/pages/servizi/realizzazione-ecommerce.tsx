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
import ContentAndImage from '@components/pages/services/ContentAndImage';
import {
  SvgChalkboardRegular,
  SvgCheckRegular,
  SvgCloudArrowDownRegular,
  SvgDatabaseRegular,
  SvgEraserRegular,
  SvgFiveThin,
  SvgFourThin,
  SvgGearRegular,
  SvgInboxFullRegular,
  SvgNetworkWiredRegular,
  SvgOneThin,
  SvgSevenThin,
  SvgSixThin,
  SvgThreeThin,
  SvgTwoThin,
} from '@assets/svg';
import FocusBox from '@components/pages/services/FocusBox';

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
                Anni di esperienza negli ecommerce, uniti a molteplici progetti
                sviluppati, ad oggi ci permettono di offrire le soluzioni più
                adatte e moderne ai bussiness e agli obiettivi dei nostri
                clienti.
                {/* <br />
                Offriamo due macro soluzione per ecommerce: piattaforma ad-hoc
                oppure utilizzo di un CMS. */}
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
      <section
        className={cn(
          'relative',
          'bg-service',
          'dark:bg-unset',
          'section-service',
          'pt-60px',
          'pb-60px'
        )}
      >
        <ContentAndImage
          useContainer={true}
          containerClasses={['pl-[5%]', 'pr-[5%]']}
          firstColumnContent={{
            columnChild: (
              <>
                <div className="heading-icon icon-website">
                  <h2>Perchè hai bisogno di un e-commerce?</h2>
                </div>
                <p>
                  <strong>
                    Perché il mercato globale degli acquisti online ha raggiunto
                    il valore di 4.13 trilioni di Dollari nel 2020, secondo gli
                    esperti.
                  </strong>
                </p>
                <p>
                  <strong>
                    Entro il 2022, la stragrande maggioranza degli acquisti
                    avverrà online…
                  </strong>
                </p>
                <p>
                  E i dati dimostrano come, a prescindere dal settore, i clienti
                  di tutte le fasce d’età amino sempre di più acquistare online…
                </p>
                <p>
                  <strong>
                    E tutte le aziende ancora non strutturate per conquistare
                    una fetta di questo enorme mercato, stiano perdendo una
                    grossa opportunità.
                  </strong>
                </p>
                <p>
                  L’E-Commerce, rispetto alla vendita tradizionale o su
                  piattaforme terze (Es: Amazon), presenta numerosi vantaggi:
                </p>
              </>
            ),
            wrapperClassnames: ['self-center'],
          }}
          secondColumnContent={{
            columnChild: (
              <figure className={cn('figure-wrapper')}>
                <img src="/services/realizzazione-ecommerce-three.jpg" alt="" />
              </figure>
            ),
            wrapperClassnames: ['self-center'],
          }}
        />
        <ContentAndImage
          useContainer={true}
          containerClasses={['pl-[5%]', 'pr-[5%]', 'pt-60px']}
          firstColumnContent={{
            columnChild: (
              <figure className={cn('figure-wrapper')}>
                <img
                  src="/services/realizzazione-ecommerce-two.jpg"
                  alt=""
                />
              </figure>
            ),
            wrapperClassnames: ['self-center'],
          }}
          secondColumnContent={{
            columnChild: (
              <>
                {/* <div className="heading-icon icon-website">
                  <h2>Showcase e siti web corporate </h2>
                </div> */}
                <ul className={cn('focus-list')}>
                  <li>
                    <SvgOneThin />
                    <span>
                      Puoi vendere senza limiti geografici raggiungendo milioni
                      di potenziali clienti in Italia e all’Estero.
                    </span>
                  </li>
                  <li>
                    <SvgTwoThin />
                    <span>
                      Puoi vendere senza limiti di tempo, 24 ore su 24 e 7
                      giorni su 7, senza che i costi fissi aumentino.
                    </span>
                  </li>
                  <li>
                    <SvgThreeThin />
                    <span>
                      Puoi costruire il tuo database di clienti, possedendo
                      tutti i dati, e usarlo per vendere altri prodotti/servizi
                      a costo quasi zero.
                    </span>
                  </li>
                  <li>
                    <SvgFourThin />
                    <span>
                      Puoi eliminare le pesanti commissioni che erodono i
                      profitti, richieste dalle piattaforme più famose come
                      Amazon.
                    </span>
                  </li>
                  <li>
                    <SvgFiveThin />
                    <span>
                      Puoi vendere al tuo target di riferimento senza avere
                      decine di competitor intorno che ti rubano clienti
                      abbassando il prezzo.
                    </span>
                  </li>
                  <li>
                    <SvgSixThin />
                    <span>
                      Puoi aumentare i guadagni riducendo tutti quei costi fissi
                      che un’azienda tradizionale deve sostenere per vendere.
                    </span>
                  </li>
                  <li>
                    <SvgSevenThin />
                    <span>
                      Hai la possibilità di raccogliere i contatti mail dei tuoi
                      clienti in un database, e utilizzarli per svolgere le tue
                      attività di marketing
                    </span>
                  </li>
                </ul>
              </>
            ),
            wrapperClassnames: ['self-center'],
          }}
        />
      </section>
      <section
        className={cn(
          'relative',
          'bg-service',
          'dark:bg-unset',
          'section-service',
          'pt-60px',
          'pb-60px'
        )}
      >
        <div className="grid grid-cols-12 gap-1">
          <div className="col-start-3 col-span-8 text-center">
            <h3 className={cn('font-bold', 'text-xl', 'text-center')}>
              Al tuo prossimo ecommerce non macherà nulla!
            </h3>
            <p
              className={cn(
                'text-center',
                'dark:text-white',
                'font-regular',
                'text-paragraph',
                'mb-2',
                'mt-2'
              )}
            >
              Scopri alcune delle possibilità supportate dai nostri ecommerce
              <br />
              per incrementare il tuo fatturato
            </p>
          </div>
          <div
            className={cn(
              'col-start-3',
              'col-span-8',
              'flex',
              'flex-wrap',
              'focus-tag-grid',
              'pt-60px'
            )}
          >
            <FocusBox
              text={'Design e creazione'}
              icon={<SvgChalkboardRegular />}
            />
            <FocusBox
              text={'Scrittura contenuti'}
              icon={<SvgEraserRegular />}
            />
            <FocusBox
              text={'Aggiornamenti'}
              icon={<SvgCloudArrowDownRegular />}
            />
            <FocusBox text={'Manutenzione'} icon={<SvgGearRegular />} />
            <FocusBox
              text={'Gestione domini'}
              icon={<SvgNetworkWiredRegular />}
            />
            <FocusBox text={'Hosting'} icon={<SvgDatabaseRegular />} />
            <FocusBox text={'Casella email'} icon={<SvgInboxFullRegular />} />
            <FocusBox text={'E molto altro!'} icon={<SvgCheckRegular />} />
          </div>
        </div>
      </section>
      <section
        className={cn(
          'relative',
          'bg-service',
          'dark:bg-unset',
          'section-service',
          'pt-60px',
          'pb-60px'
        )}
      >
        <div className="grid grid-cols-12 gap-1">
          <div className="col-start-3 col-span-8 text-center">
            <h3 className={cn('font-bold', 'text-xl', 'text-center')}>
              Il nostro processo produttivo
            </h3>
            <p
              className={cn(
                'text-center',
                'dark:text-white',
                'font-regular',
                'text-paragraph',
                'mb-2',
                'mt-2'
              )}
            >
              Scopri le fasi del nostro processo produttivo, attraversate da un
              progetto durante la sua realizzazione.
              <br /> Durante tutte le fasi di sviluppo teniamo un frequente
              confronto col cliente
              <br /> in modo da esser certi di centrare gli obbiettivi al meglio
            </p>
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
