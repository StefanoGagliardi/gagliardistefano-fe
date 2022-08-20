// import core
import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

// import third parts
import cn from 'classnames';
// import gsap from 'gsap/dist/gsap.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

// import custom
import s from './MainServiceCard.module.css';
import {
  SvgArrowRightLongLight,
  SvgEcommerce,
  SvgGlobe,
  SvgSmartphone,
} from '@assets/svg';
import Link from 'next/link';
import url from '@services/url';
import useMapRef from '@services/hooks/useMapRef';

export const MainServiceCard: FC = (): ReactElement => {
  // Custom hook per salvare un Array (Map) di referenze in un'unica
  // Le referenze vengono storate con una chiave perchè l'ordine portrebbe cambiare in base al tempo di caricamento di alcuni componenti
  const [gsapRef, setGsapRef] = useMapRef<HTMLElement>();
  const [tl, setTl] = useState(() => gsap.timeline({ repeat: 0 }));
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const refElements: Map<number, HTMLElement> = gsapRef.current; // Array of dom references

    // Ensure to hide all elements before show animation
    hide(refElements.get(0));
    hide(refElements.get(1));
    hide(refElements.get(2));

    tl.to(refElements.get(0), {
      // autoAlpha: 1,
      duration: 3,
      immediateRender: false, // Prevent animation, and startwith scrollTrigger
      scrollTrigger: {
        trigger: refElements.get(0),
        // start: 'top +=100px',
        start: 'center bottom', // center of trigger touch bottom of viewporet
        markers: false,
        scrub: false,
        onEnter: function () {
          fadeIdDown(refElements.get(0), 1);
        },
        onEnterBack: function () {
          // Se arrivo dal basso el card entrano dall'altro, figata :)\
          fadeIdDown(refElements.get(0), -1);
        },
        onLeave: function ({ progress, direction, isActive }: ScrollTrigger) {
          // Nascondo l'elemento quando esco dalla sezione\
          hide(refElements.get(0));
        }, // assure that the element is hidden when scrolled into view
        onLeaveBack: function ({
          progress,
          direction,
          isActive,
        }: ScrollTrigger) {
          hide(refElements.get(0));
        }, // assure that the element is hidden when scrolled into view
      },
    })
      .to(refElements.get(1), {
        // autoAlpha: 1,
        duration: 3,
        immediateRender: false, // Prevent animation, and startwith scrollTrigger
        scrollTrigger: {
          trigger: refElements.get(1),
          // start: 'top +=100px',
          start: 'center bottom', // center of trigger touch bottom of viewporet
          markers: false,
          scrub: false,
          onEnter: function () {
            fadeIdDown(refElements.get(1), 1, 0.6);
          },
          onEnterBack: function () {
            // Se arrivo dal basso el card entrano dall'altro, figata :)\
            fadeIdDown(refElements.get(1), -1, 0.6);
          },
          onLeave: function () {
            // Nascondo l'elemento quando esco dalla sezione\
            hide(refElements.get(1));
          }, // assure that the element is hidden when scrolled into view
          onLeaveBack: function () {
            hide(refElements.get(1));
          }, // assure that the element is hidden when scrolled into view
        },
      })
      .to(refElements.get(2), {
        // autoAlpha: 1,
        duration: 3,
        immediateRender: false, // Prevent animation, and startwith scrollTrigger
        scrollTrigger: {
          trigger: refElements.get(2),
          // start: 'top +=100px',
          start: 'center bottom', // center of trigger touch bottom of viewporet
          markers: false,
          scrub: false,
          onEnter: function () {
            fadeIdDown(refElements.get(2), 1, 1.2);
          },
          onEnterBack: function () {
            // Se arrivo dal basso el card entrano dall'altro, figata :)\
            fadeIdDown(refElements.get(2), -1, 1.2);
          },
          onLeave: function () {
            // Nascondo l'elemento quando esco dalla sezione\
            hide(refElements.get(2));
          }, // assure that the element is hidden when scrolled into view
          onLeaveBack: function () {
            // Nascondo l'elemento quando esco dalla sezione\
            hide(refElements.get(2));
          }, // assure that the element is hidden when scrolled into view
        },
      })
      .fromTo(
        refElements.get(3),
        {
          autoAlpha: 0,
          y: -100,
        },
        {
          autoAlpha: 1,
          y: 100,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(3),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(4),
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: -100,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(4),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(5),
        {
          autoAlpha: 0,
          y: -100,
        },
        {
          autoAlpha: 1,
          y: 100,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(5),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(6),
        {
          autoAlpha: 0,
          y: 300,
        },
        {
          autoAlpha: 1,
          y: -100,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(6),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(7),
        {
          autoAlpha: 0,
          y: 200,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(7),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(8),
        {
          autoAlpha: 0,
          y: -100,
        },
        {
          autoAlpha: 1,
          y: 100,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(8),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(9),
        {
          autoAlpha: 0,
          y: -100,
        },
        {
          autoAlpha: 1,
          y: 300,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(9),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(10),
        {
          autoAlpha: 0,
          y: -200,
        },
        {
          autoAlpha: 1,
          y: 100,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(10),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      )
      .fromTo(
        refElements.get(11),
        {
          autoAlpha: 0,
          y: -200,
        },
        {
          autoAlpha: 1,
          y: 100,
          duration: 3,
          immediateRender: false, // Prevent animation, and startwith scrollTrigger
          scrollTrigger: {
            trigger: refElements.get(11),
            // start: 'top +=100px',
            // start: 'bottom bottom', // center of trigger touch bottom of viewporet
            markers: false,
            scrub: true,
            onEnter: function () {
              // fadeIdDown(refElements.get(3), 1, 1.2);
            },
            onEnterBack: function () {
              // Se arrivo dal basso el card entrano dall'altro, figata :)\
              // fadeIdDown(refElements.get(3), -1, 1.2);
            },
            onLeave: function ({
              progress,
              direction,
              isActive,
            }: ScrollTrigger) {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
            onLeaveBack: function () {
              // hide(refElements.get(3));
            }, // assure that the element is hidden when scrolled into view
          },
        }
      );

    // ScrollTrigger (possibile usarlo nella timeline)
    // ScrollTrigger.create({
    //   trigger: refElements.get(0),
    //   onEnter: function () {
    //     animateFrom(refElements.get(0));
    //   },
    //   onEnterBack: function () {
    //     // Se arrivo dal basso el card entrano dall'altro, figata :)\
    //     animateFrom(refElements.get(0), -1);
    //   },
    //   onLeave: function () {
    //     // Nascondo l'elemento quando esco dalla sezione\
    //     hide(refElements.get(0));
    //   }, // assure that the element is hidden when scrolled into view
    // });
  }, []);

  const fadeIdDown = useCallback(
    (elem: HTMLElement, direction: 1 | -1 = 1, delay: number = 0): void => {
      // Coords from
      const x = 0;
      const y = 100 * direction;

      elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      elem.style.opacity = '0';

      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 2,
          x: 0,
          y: 0,
          delay,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto',
        }
      );
    },
    []
  );

  const animateFrom = (elem: HTMLElement, direction?: number) => {
    direction = direction || 1;
    var x = 0,
      y = direction * 100;
    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 100;
      y = 0;
    }

    elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    elem.style.opacity = '0';

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
      }
    );
  };

  /**
   * Hide HTMLElement with Gsap via alpha (opacity) 0 to ensure right show of animation
   * @param elem: HTMLElement | Map<number, HTMLElement>
   * @returns void
   */
  const hide = (elem: HTMLElement | Map<number, HTMLElement>): void => {
    if (elem instanceof Map) {
      elem.forEach((value, key) => {
        // console.log(key, value);
        gsap.killTweensOf(value);
        gsap.set(value, { autoAlpha: 0 });
      });

      return;
    }
    gsap.killTweensOf(elem);
    gsap.set(elem, { autoAlpha: 0 });
  };

  return (
    <>
      {/* <div className={s.colors1}></div>
      <div className={s.colors2}></div>
      <div className={s.colors3}></div>
      <div className={s.colors4}></div> */}
      <div
        className="container mx-auto relative"
        // ref={(ref: HTMLDivElement) => setGsapRef(ref, 0)}
      >
        <div
          className={cn(s.square, 'sass')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 6)}
        ></div>
        <div
          className={cn(s.square, 'docker')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 5)}
        ></div>
        <div
          className={cn(s.square, 'wordpress')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 4)}
        ></div>
        <div
          className={cn(s.square, 'square-first-icon')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 3)}
        ></div>
        <div
          className={cn(s.square, 'ts')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 7)}
        ></div>
        <div
          className={cn(s.square, 'react')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 8)}
        ></div>
        <div
          className={cn(s.square, 'redux')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 9)}
        ></div>
        <div
          className={cn(s.square, '')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 10)}
        ></div>
        <div
          className={cn(s.square, '')}
          ref={(ref: HTMLDivElement) => setGsapRef(ref, 11)}
        ></div>
        {/* <div className={s.square}></div> */}
        <div className="grid grid-cols-3 gap-5">
          <div
            className={cn(s.serviceCard, 'relative', 'p-50')}
            ref={(ref: HTMLDivElement) => setGsapRef(ref, 0)}
          >
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
          <div
            className={cn(s.serviceCard, 'relative', 'p-50')}
            ref={(ref: HTMLDivElement) => setGsapRef(ref, 1)}
          >
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
          <div
            className={cn(s.serviceCard, 'relative', 'p-50')}
            ref={(ref: HTMLDivElement) => setGsapRef(ref, 2)}
          >
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
