// import core
import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

// import third parts
import cn from 'classnames';
// import gsap from 'gsap/dist/gsap.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

// import custom
import {
  SvgArrowRightLongLight,
  SvgEcommerce,
  SvgGlobe,
  SvgSmartphone,
} from '@assets/svg';
import Link from 'next/link';
import url from '@services/url';
import useMapRef from '@services/hooks/useMapRef';
import { getWebSiteUrl } from '@config/site';
import ContactsForm from '@services/forms/contacts';
import NewsletterFormView from '@services/forms/newsletter';

const ContactSection: FC = (): ReactElement => {
  return (
    <section className={'py-60px bg-service dark:bg-unset'}>
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
                Richiedi un Audit gratuito sia tecnico che seo del tuo sito web.
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
            <div className="bg-white relative z-3 shadow-2xl p-6 rounded-2xl border-2 mb-10 border-gray-50">
              <h4 className="font-semiBold text-lgm mb-4">
                Cavalca l'onda digitale
              </h4>
              <p className="text-paragraph">
                <strong>Visita il nostro blog</strong>
              </p>

              <div className="post-list">
                <article className={'text-left'}>
                  <a href={`/blog/animazioni-spettacolari-con-gsap/`}>
                    <video
                      loading="lazy"
                      muted={true}
                      src="https://cdnl.iconscout.com/lottie/free/thumb/developer-discussing-different-options-5148935-4308325.mp4"
                      type="video/mp4"
                      autoPlay={true}
                      loop={true}
                      style={{
                        height: '270px',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 50%',
                        marginBottom: '30px',
                      }}
                    ></video>
                    <h3 className={cn('text-dark font-bold text-lg')}>
                      Animazioni spettacolari con Gsap
                    </h3>
                    <p className={'font-medium'}>
                      Animating with code may seem intimidating at first, but
                      don't worry, our platform was engineered to make it simple
                      and intuitive.
                    </p>
                  </a>
                </article>
                <article className={'text-left'}>
                  <a href={`/blog/animazioni-spettacolari-con-gsap/`}>
                    <video
                      loading="lazy"
                      muted={true}
                      src="https://cdnl.iconscout.com/lottie/premium/thumb/woman-working-on-website-script-4733554-3938574.mp4"
                      type="video/mp4"
                      autoPlay={true}
                      loop={true}
                      style={{
                        height: '370px',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 50%',
                        marginBottom: '30px',
                      }}
                    ></video>
                    <h3 className={cn('text-dark font-bold text-lg')}>
                      Bundle loader: Webpack & Rollup
                    </h3>
                    <p className={'font-medium'}>
                      I progetti Web più moderni, le Web App e anche le versioni
                      più moderne di Wordpress si trovano a gestire tantissimi
                      assets,files di progetto, dipendenze ecc. In questa guida
                      confronteremo i due più famosi Bundle Loader: Webpack &
                      React
                    </p>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center ">
            <div className="bg-white relative z-3 shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
              <h4 className="font-semiBold text-lgm mb-4">Consigli gratuiti</h4>
              <p className="text-paragraph font-medium text-left mb-5">
                Iscriviti alla nostra newsletter email per le ultime notizie,
                consigli utili e novità SEO per migliorare il tuo posizionamento
                online direttamente nella tua casella email!
              </p>
              <NewsletterFormView />
            </div>
          </div>
          <div className="col-span-4 text-center">
            <div className="bg-white relative z-3 shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
              <h4 className="font-semiBold text-lgm mb-4">Analisi sitoweb</h4>
              <p className="text-paragraph font-medium text-left mb-5">
                Per ottener un'analisi e audit gratuito, sia tecnico che SEO,
                sul tuo sitoweb o ecommerce, completa il modulo qui sotto e ti
                risponderemo il prima possibile con un'analisi dettagliata
              </p>
              <div className="text-left">
                <ContactsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
