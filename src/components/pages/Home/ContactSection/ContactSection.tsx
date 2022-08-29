// import core
import React, { FC, ReactElement } from 'react';

// import third parts
import cn from 'classnames';

// import custom
import ContactsForm from '@services/forms/contacts';
import WebsiteAnalysisFormView from '@services/forms/website-analysis';

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
                      src="https://cdnl.iconscout.com/lottie/premium/thumb/woman-working-on-website-script-4733554-3938574.mp4"
                      type="video/mp4"
                      autoPlay={true}
                      loop={true}
                      className={'post-lottie'}
                    ></video>
                  </a>
                  <h3 className={cn('text-dark font-bold text-lg')}>
                    Animazioni spettacolari con Gsap
                  </h3>
                  <p className={'font-medium'}>
                    Animating with code may seem intimidating at first, but
                    don't worry, our platform was engineered to make it simple
                    and intuitive.
                  </p>
                  <a
                    className="btn btn-link btn-link-primary btn-icon mt-3 rounded text-sm font-bold pl-0 hover:font-bold"
                    href="/servizi/realizzazione-ecommerce/"
                  >
                    Leggi l'articolo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="m363.3 100.7 144 144c3.1 3.1 4.7 7.2 4.7 10.4s-1.562 8.188-4.688 11.31l-144 144c-6.25 6.25-16.38 6.25-22.62 0s-6.25-16.38 0-22.62l116.7-116.7H16c-8.844 0-16-7.156-16-15.1 0-8.844 7.156-16 16-16h441.4l-116.7-116.7c-6.25-6.25-6.25-16.38 0-22.62s16.4-6.23 22.6.03z"></path>
                    </svg>
                  </a>
                </article>
                <article
                  className={'text-left none'}
                  style={{ display: 'none' }}
                >
                  <a href={`/blog/animazioni-spettacolari-con-gsap/`}>
                    <video
                      loading="lazy"
                      muted={true}
                      src="https://cdnl.iconscout.com/lottie/free/thumb/developer-discussing-different-options-5148935-4308325.mp4"
                      type="video/mp4"
                      autoPlay={true}
                      loop={true}
                      className={'post-lottie'}
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
              <h4 className="font-semiBold text-lgm mb-4">Analisi sitoweb</h4>
              <p className="text-paragraph font-medium text-left mb-5">
                Per ottener un'analisi e audit gratuito, sia tecnico che SEO,
                sul tuo sitoweb o ecommerce, completa il modulo qui sotto e ti
                risponderemo il prima possibile con un'analisi dettagliata
              </p>
              <div className="text-left">
                <WebsiteAnalysisFormView />
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center">
            <div className="bg-white relative z-3 shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
              <h4 className="font-semiBold text-lgm mb-4">
                Contata un professionista
              </h4>
              <p className="text-paragraph font-medium text-left mb-5">
                Hai un progetto in mente? Devi presentare la tua azienda? Hai un
                negozio e vorresti vendere online?
                <br /> Per qualsiasi esigenza il team di NextGeneration è a tua
                disposizione per indicarti la soluzione migliore alla tua
                esigenza!
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
