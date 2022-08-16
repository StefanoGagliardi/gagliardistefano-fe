// import core
import React, { FC, ReactElement } from 'react';

// import third parts
import cn from 'classnames';

// import custom
import s from './MainServiceCard.module.css';
import {
  SvgArrowRightLongLight,
  SvgArrowRightLongRegular,
  SvgArrowRightLongThin,
  SvgEcommerce,
  SvgGlobe,
  SvgSmartphone,
} from '@assets/svg';
import Link from 'next/link';
import url from '@services/url';

export const MainServiceCard: FC = (): ReactElement => {
  return (
    <>
      {/* <div className={s.colors1}></div>
      <div className={s.colors2}></div>
      <div className={s.colors3}></div>
      <div className={s.colors4}></div> */}
      <div className="container mx-auto relative">
        <div className={s.square}></div>
        <div className={s.square}></div>
        <div className={s.square}></div>
        <div className={s.square}></div>
        <div className={s.square}></div>
        <div className={s.square}></div>
        <div className={s.square}></div>
        <div className={s.square}></div>
        <div className={s.square}></div>
        {/* <div className={s.square}></div> */}
        <div className="grid grid-cols-3 gap-5">
          <div className={cn(s.serviceCard, 'relative', 'p-50')}>
            <div className={cn('z-10 relative mx-10')}>
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
                  Senza la presenza web, la tua azienda sta perdendo denaro e
                  quote di mercato
                </p>
                <p>
                  Servizi di sviluppo che ti aiuteranno a digitalizzare la tua
                  attività e a rivoluzionare il mercato, a prescindere dalle
                  dimensioni della tua azienda
                </p>
                <Link href={url.websiteCreation() as string}>
                  <a
                    className={cn(
                      'btn-components-outline btn-icon mt-3',
                      'rounded text-sm font-bold'
                    )}
                  >
                    Scopri i servizi
                    <SvgArrowRightLongLight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={cn(s.serviceCard, 'relative', 'p-50', 'glass')}>
            <div className={cn('z-10 relative mx-10')}>
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
                  organizzazione
                </p>
                <p>
                  Diversi fattori incidono nella riuscita di un e-commerce di
                  successo, esperienza di sviluppo è fondamentale per non
                  sbagliare
                </p>
                <Link href={url.ecommerceCreation() as string}>
                  <a
                    className={cn(
                      'btn-components-outline btn-icon mt-3',
                      'rounded text-sm font-bold'
                    )}
                  >
                    Scopri i servizi
                    <SvgArrowRightLongLight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={cn(s.serviceCard, 'relative', 'p-50')}>
            <div className={cn('z-10 relative mx-10')}>
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
                  Con le tecnologie ibride le applicazioni per smartphone
                  diventano accessibili a tutti
                </p>
                <p>
                  Sviluppo mobile multipiattaforma e nativo incentrato su React
                  Native e soluzioni completamente native per creare o far
                  crescere il tuo prodotto software.
                </p>
                <Link href={url.ecommerceCreation() as string}>
                  <a
                    className={cn(
                      'btn-components-outline btn-icon mt-3',
                      'rounded text-sm font-bold'
                    )}
                  >
                    Scopri i servizi
                    <SvgArrowRightLongLight />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServiceCard;
