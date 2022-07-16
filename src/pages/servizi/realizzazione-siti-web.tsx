// Import core
import React, { FC, ReactElement } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

// Import third parts
import cn from 'classnames';

// Import custom
import s from './realizzazione-siti-web.module.scss';
import Layout from '@components/common/Layout';
import ServiceContactsSection from '@components/pages/services/ServiceContactsSection';
import seo from './../../config/seo.json';

/**
 * Start scripts
 */
export const PageRealizzazioneSitiWeb: NextPage = (): ReactElement => {
  console.log('seo: ', seo);

  return (
    <Layout>
      <Head>
        <title>{seo?.pages?.rSitiWeb?.title || 'Not found in seo.json'}</title>
        <meta
          name="description"
          content={seo?.pages?.rSitiWeb?.desc || 'Not found in seo.json'}
        />
      </Head>
      <section className={cn('relative ', s.firstSection, 'bg-service')}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-start-3  col-end-11">
              <h1 data-aos="fade-up">Realizzazione siti web | Cremona</h1>
              <p
                className={cn(
                  'text-center',
                  'dark:text-white',
                  'my-5',
                  s.firstP
                )}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Tutti i nostri siti web sono progettati e adattati per una vasta
                gamma di dispotivi, adattando ogni elemento ai tuoi obiettivi e
                sfide.
                <br /> Inolte tutti i nostri siti web sono ottimizzati per la
                SEO secondo i costanti e periodici aggiornamenti da parte di
                Google al suo "Motore di ricerca"
              </p>
              <p
                className={cn(
                  'text-center',
                  'dark:text-white',
                  'my-5',
                  'text-lg',
                  'font-bold',
                  s.firstP,
                  'mb-0'
                )}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <strong>
                  Tutti i nostri siti web hanno un{' '}
                  <strong>design responsive</strong> e ottimizzati per la{' '}
                  <strong>SEO</strong>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={cn('relative ', s.secondSection, 'bg-service')}>
        <div className="xl:container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-3">
              <p className={cn(s.pHeading, 'font-avenir')}>
                NextGen Dev care of everything...
              </p>
            </div>
            <div className={cn('col-span-9', s.focusGrid)}>
              <div className={cn('grid', s.focus)}>Design e creazione</div>
              <div className={cn('grid', s.focus)}>Scrittura contenuti</div>
              <div className={cn('grid', s.focus)}>Aggiornamenti</div>

              <div className={cn('grid', s.focus)}>Manutenzione</div>
              <div className={cn('grid', s.focus)}>Gestione domini</div>
              <div className={cn('grid', s.focus)}>Hosting</div>

              <div className={cn('grid', s.focus)}>Caselle email</div>
              <div className={cn('grid', s.focus)}>E molto altro!</div>
            </div>
          </div>
        </div>
      </section>
      <section className={cn('relative ', s.secondSection, 'bg-service')}>
        <div className="container mx-auto pl-[5%] pr-[5%]">
          <div className="grid grid-cols-12 gap-1">
            <div className={cn('col-span-6', s.showcaseWrapper)}>
              <h2>Showcase e siti web corporate </h2>
              <p>
                Un <strong>sito web showcase o vetrina</strong> presenta la tua
                azienda e ne risalta le informazioni importanti dei servizi
                offerti, le realizzazioni fatte, aggiornamenti e informazioni di
                contatto.
              </p>
              <p>
                Di questi tempi,{' '}
                <strong>un design responsive è fondamentale</strong>, quindi il
                tuo sito web deve apparire perfetto su tutti gli schermi se i
                tuoi clienti hanno un computer, table o smartphone.
              </p>
              <p>
                Un sito <strong>web corporate</strong> è il tuo strumento di
                comunicazione di prima linea per posizionare te stesso, il tuo
                brand, attrarre nuovi clienti e{' '}
                <strong>potenziare la tua immagine aziendale</strong>.
              </p>
              <p>
                Una vetrina online è importante tanto quanto il posizionamento
                di mattoni e malta nelle costruzioni.{' '}
              </p>
              <p>
                <strong>Next Generation Developers</strong> è un insieme di
                professionisti <strong>giovani e d'esperienza</strong>,
                all'avanguardia che potrà creare il tuo sito web con un design
                ad-hoc e speciale, con tutte le caratteristiche necessarie che
                possano <strong>migliorare la tua attività</strong>
              </p>
            </div>
            <div className="col-span-6">
              <figure className={s.figureWrapper}>
                <img
                  src="https://www.linkeomiami.com/ressources/images/57e23bd8e342.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className={cn('relative', 'section-service', 'bg-service')}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-start-3 col-span-8">
              <p
                className={cn(
                  'text-center',
                  'dark:text-white',
                  'my-5',
                  'text-xl'
                )}
              >
                Accedi alla tua <strong>area gestionale</strong> in qualsiasi momento.
                <br />
                Da li, potrai apportare cambiamenti a <strong>prodotti e contenuti</strong> in
                ogni momento e avere accesso alle <strong>statistiche</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={cn('relative', 'section-service', 'bg-service')}>
        <div className="container mx-auto pl-[5%] pr-[5%]">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <figure className={cn(s.figureWrapper)}>
                <img
                  src="https://www.linkeomiami.com/ressources/images/13314c1569cf.jpg"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-span-6">
              <div className={cn('col-span-6', s.showcaseWrapper, s.ecommerce)}>
                <h2>e-Commerce Site</h2>
                <p>
                  Con un sito web E-commerce,{' '}
                  <strong>
                    la tua attività diventa accessibile e attiva 24/7!
                  </strong>
                </p>
                <p>
                  Tutti i tuoi prodotti saranno disponibili per{' '}
                  <strong>l'acquisto online</strong>
                  tramite un sistema di "Carrello degli acqusti" dove i tuoi
                  clienti potranno effettuare i loro{' '}
                  <strong>pagamenti in totale sicurezza</strong>.
                </p>
                <p>
                  Amplia i servizi offerti dando la possibilità ai tuoi clienti
                  di
                  <strong>prenotare il ritiro degli ordini</strong> direttamente
                  presso la tua attività. Non vendi prodotti fisici? Le
                  soluzioni E-commerce possono anche essere{' '}
                  <strong>soluzioni di pagamento</strong> per prodotti digitali
                  come le <strong>consulenze</strong> e gli{' '}
                  <strong>info-prodotti</strong>.
                </p>
                <p>
                  Completa il tuo negozio con un{' '}
                  <strong>motore di ricerca</strong>,{' '}
                  <strong>gestione dell'inventario</strong>, degli utenti e dei{' '}
                  <strong>clienti</strong>, dello{' '}
                  <strong>storico ordini</strong> e molto altro...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceContactsSection classNames={['bg-service']} />
    </Layout>
  );
};

// PageRealizzazioneSitiWeb.Layout = Layout;
// PageRealizzazioneSitiWeb.displayName = "realizzazione-siti-web"

export default PageRealizzazioneSitiWeb;