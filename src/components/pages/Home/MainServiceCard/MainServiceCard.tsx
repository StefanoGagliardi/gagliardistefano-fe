// import core
import React, { FC, ReactElement } from 'react';

// import third parts
import cn from 'classnames';

// import custom
import s from './MainServiceCard.module.css';
import { SvgEcommerce, SvgGlobe, SvgSmartphone } from '@assets/svg';
import Link from 'next/link';

export const MainServiceCard: FC = (): ReactElement => {
  return (
    <>
      <div className={s.colors1}></div>
      <div className={s.colors2}></div>
      <div className={s.colors3}></div>
      <div className={s.colors4}></div>
      <div className="container mx-auto relative">
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="400"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="400"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="400"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="400"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="200"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="100"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="400"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
          data-aos-offset="600"
        ></div>
        <div
          className={s.square}
          data-aos-delay="500"
          data-aos="zoom-out-up"
        ></div>
        {/* <div className={s.square}></div> */}
        <div className="grid grid-cols-3 gap-5">
          <div
            ata-aos="fade-right"
            data-aos-offset="400"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className={cn(s.serviceCard, 'relative', 'p-50')}
          >
            <div className={cn('z-10 relative mx-10', s.glass)}>
              <div className={s.focusCardHeader}>
                <span>
                  <SvgGlobe />
                </span>
                <h5>
                  siti web<br></br>corporate
                </h5>
              </div>
              <div className={s.focusCardBody}>
                <p>
                  Senza un'app Web, la tua azienda sta perdendo denaro e quote
                  di mercato.
                </p>
                <p>
                  Servizi di sviluppo end-to-end che ti aiuteranno a
                  digitalizzare la tua attività e a rivoluzionare il mercato,
                  indipendentemente dalle dimensioni della tua azienda.
                </p>
                <Link href="/sviluppo-web">
                  <a href="/sviluppo-web" className={s.btnSeeMore}>
                    Scopri di più
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            ata-aos="fade-right"
            data-aos-offset="400"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className={cn(s.serviceCard, 'relative', 'p-50')}
          >
            <div className={cn('z-10 relative mx-10', s.glass)}>
              <div className={s.focusCardHeader}>
                <span>
                  <SvgEcommerce />
                </span>
                <h5>
                  Soluzioni<br></br>E-commerce
                </h5>
              </div>
              <div className={s.focusCardBody}>
                <p>
                  Possiamo portare online e accativare i prodotti della tua
                  organizzaziones
                </p>
                <p>
                  Diversi fattori incidono nella riuscita di un e-commerce di
                  successo, esperienza di sviluppo è fondamentale per non
                  sbagliare
                </p>
              </div>
            </div>
          </div>
          <div
            ata-aos="fade-right"
            data-aos-offset="400"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className={cn(s.serviceCard, 'relative', 'p-50')}
          >
            <div className={cn('z-10 relative mx-10', s.glass)}>
              <div className={s.focusCardHeader}>
                <span>
                  <SvgSmartphone />
                </span>
                <h5>
                  Applicazioni<br></br>per smartphone
                </h5>
              </div>
              <div className={s.focusCardBody}>
                <p>
                  Grazie alla tecnologia ibrida le applicazioni per smartphone
                  diventano accessibili a tutti
                </p>
                <p>
                  Sviluppo mobile multipiattaforma e nativo incentrato su React
                  Native e soluzioni completamente native per creare o far
                  crescere il tuo prodotto software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServiceCard;
