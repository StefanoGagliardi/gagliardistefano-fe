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
  SvgBarcodeReadRegular,
  SvgBitcoinSignRegular,
  SvgChartPieRegular,
  SvgEightThin,
  SvgEnvelopeOpenDollarRegular,
  SvgFacebookFBrands,
  SvgFileInvoiceRegular,
  SvgFilterCircleDollarRegular,
  SvgFiveThin,
  SvgFourThin,
  SvgGoogleBrands,
  SvgHeadsetRegular,
  SvgLanguageRegular,
  SvgOneThin,
  SvgSevenThin,
  SvgSixThin,
  SvgThreeThin,
  SvgTruckFastRegular,
  SvgTwoThin,
} from '@assets/svg';
import FocusBox from '@components/pages/services/FocusBox';
import DevelopmentProcess from '@components/pages/sections/DevelopmentProcess';
import ImageBanner from '@components/pages/services/ImageBanner';

export const PageRealizzazioneEcommerce: NextPage = (): ReactElement => {
  return (
    <Layout
      pageProps={{
        useDotsBg: true,
        wrapperClasses: [
          'single-service-template',
          'service-figure-width-[70%]',
        ],
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
                <img src="/services/realizzazione-ecommerce-two.jpg" alt="" />
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
                      Puoi costruire il tuo database di clienti, possedendo i
                      dati, e usarlo per vendere altri prodotti/servizi e
                      fornire offerte ad-hoc a costo quasi zero.
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
                      Puoi scegliere liberamente i metodi di pagamento e
                      spedizione per i tuoi clienti: Carte, Contanti, Bonifico,
                      AmazonPay, PayPal, spedizione standard, ritiro in sede.
                    </span>
                  </li>
                  <li>
                    <SvgSixThin />
                    <span>
                      Puoi vendere al tuo target di riferimento senza avere
                      decine di competitor intorno che ti rubano clienti
                      abbassando il prezzo.
                    </span>
                  </li>
                  <li>
                    <SvgSevenThin />
                    <span>
                      Puoi aumentare i guadagni riducendo tutti quei costi fissi
                      che un’azienda tradizionale deve sostenere per vendere.
                    </span>
                  </li>
                  <li>
                    <SvgEightThin />
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
              Al tuo prossimo ecommerce non mancherà nulla!
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
              Scopri alcune delle possibilità supportate dai nostri ecommerce.
              <br />
              Potenzia il tuo negozio, e incrementa il tuo fatturato!
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
            />
            <FocusBox
              text={'Integrazione spedizionieri'}
              icon={<SvgTruckFastRegular />}
            />
            <FocusBox
              text={'Email marketing'}
              icon={<SvgEnvelopeOpenDollarRegular />}
            />

            <FocusBox text={'Google Merchant'} icon={<SvgGoogleBrands />} />
            <FocusBox
              text={'Customer live chat'}
              icon={<SvgHeadsetRegular />}
            />
            <FocusBox
              text={'Multilingua e multi-regione'}
              icon={<SvgLanguageRegular />}
            />

            <FocusBox
              text={'Facebook & Instagram Shop'}
              icon={<SvgFacebookFBrands />}
            />
            <FocusBox
              text={'Campagne Advertising Social'}
              icon={<SvgFilterCircleDollarRegular />}
            />
            <FocusBox
              text={'Codici promozionali'}
              icon={<SvgBarcodeReadRegular />}
            />

            <FocusBox
              text={'Fatture PDF e Fatturazione automatica'}
              icon={<SvgFileInvoiceRegular />}
            />
            <FocusBox
              text={'Supporto Web3 e Crypto'}
              icon={<SvgBitcoinSignRegular />}
            />
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
        <DevelopmentProcess
          introColumnContent={
            <>
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
                Scopri le fasi, del nostro processo produttivo, attraversate da
                un progetto durante la sua realizzazione.
                <br /> Durante tutte le fasi di sviluppo teniamo un frequente
                confronto con il cliente,
                <br /> cosi da avere sempre una forte attenzione e focus sugli
                obbiettivi del progetto
              </p>
              <small className={cn('italic', 'block', 'text-center', 'dark:text-white')}>
                Premi sui cerchi e scopri tutte le fasi di sviluppo!
              </small>
            </>
          }
        />
      </section>
      <section
        className={cn(
          'relative',
          'pt-60px',
          'pb-60px',
          'bg-service',
          'dark:bg-unset'
        )}
      >
        <div className="container mx-auto pl-[5%] pr-[5%]">
          <div className={cn('grid grid-cols-12')}>
            <ImageBanner
              firstColumnContent={{
                wrapperClassnames: [],
                columnChild: (
                  <>
                    <h3>Hai un negozio fisico?</h3>
                    <p>
                      Scopri come possiamo creare il tuo{' '}
                      <Link href={'/'}>catalogo online</Link> e offire ai tuoi
                      clienti il ritiro locale degli ordini
                    </p>
                    <button
                      className="btn btn-components-outline py-2 px-4 rounded text-sm font-bold w-[200px]"
                      type="button"
                      role="button"
                      onClick={() => {}}
                    >
                      Contattaci!
                    </button>
                  </>
                ),
              }}
              secondColumnContent={{
                wrapperClassnames: [],
                columnChild: (
                  <figure>
                    <img src="/shop-banner-pos.jpg" alt="" />
                  </figure>
                ),
              }}
            />
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
