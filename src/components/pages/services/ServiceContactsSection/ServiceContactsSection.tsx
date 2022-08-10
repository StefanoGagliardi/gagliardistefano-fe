// Import core
import React, { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';

// Import third parts
import cn from 'classnames';

// Imoport custom
import s from './ServiceContactsSection.module.scss';
import {
  SvgDuoEnvelope,
  SvgDuoMapPin,
  SvgDuoPhone,
  SvgEnvelopeRegular,
  SvgGithub,
  SvgLinkedin,
  SvgMapPinLight,
  SvgPhoneArrowUpRegular,
  SvgTwitter,
} from '@assets/svg';
import ContactsForm from '@services/forms/contacts';
import AppLink from '@services/routing/AppLink';
import useThemeWrap from '@services/theme/themeStyleHook';
import Link from 'next/link';

/**
 * Script start
 */
type Props = {
  classNames?: string[];
};
export const ServiceContactsSection: FC<Props> = ({
  classNames = [],
}: Props): ReactElement => {
  // const router = useRouter();

  const [theme] = useThemeWrap();

  return (
    <section className={cn('relative', 'pt-60px pb-60px', ...classNames)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-start-3 col-span-8 text-center">
            <h3 className={cn('font-bold', 'text-xl', 'text-center')}>
              Hai un progetto in mente?
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
              Se hai un progetto in mente e desideri approfondire alcuni aspetti
              tecnico - amministrativi
              <br />
              il nostro team è a tua disposizione senza impegni.
            </p>
            <a
              href=""
              className={cn(
                'text-center',
                'inline-block',
                'underline',
                'dark:text-white',
                'relative',
                'pr-[20px]',
                'dot-divider',
              )}
            >
              <small>
                Hai bisogno di siglare un{' '}
                <span className={cn('italic')}>NDA</span>?
              </small>
            </a>
            <Link
              href="/simulazione-preventivo-web/"
            >
              <small
                className={cn(
                  'text-center',
                  'inline-block',
                  'underline',
                  'dark:text-white',
                  // 'text-sm'
                )}
              >
                Hai già simulato il tuo preventivo?
              </small>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-20 gap-1">
          <div className="col-start-3 col-span-4">
            <div className={cn(s.colBody, "pr-[50px]")}>
              <ul>
                <li>
                  <AppLink
                    href={'tel:+393470064005'}
                    label="Chiamaci per informazioni"
                  >
                    <>
                      <SvgPhoneArrowUpRegular />
                      <span
                        className={cn(
                          'dark:text-white',
                          'font-regular',
                          'text-paragraph'
                        )}
                      >
                        +39 3470064005
                      </span>
                    </>
                  </AppLink>
                </li>
                <li>
                  <AppLink
                    href={'mailto:stefano.gagliardi@sitisrl.it'}
                    label="Scrivici per informazioni!"
                  >
                    <>
                      <SvgEnvelopeRegular />
                      <span
                        className={cn(
                          'dark:text-white',
                          'font-regular',
                          'text-paragraph'
                        )}
                      >
                        stefano.gagliardi@sitisrl.it
                      </span>
                    </>
                  </AppLink>
                </li>
                <li>
                  <AppLink
                    href={
                      'https://www.google.com/maps/place/Via+Adige,+3,+26100+Cremona+CR/@45.1336563,10.0081647,17z/data=!4m13!1m7!3m6!1s0x4780fe776fd8ffa1:0x6e1f6eeeb2859e69!2sVia+Adige,+3,+26100+Cremona+CR!3b1!8m2!3d45.1336563!4d10.0103534!3m4!1s0x4780fe776fd8ffa1:0x6e1f6eeeb2859e69!8m2!3d45.1336563!4d10.0103534'
                    }
                    label="Scopri il team"
                    external={true}
                    rel={'noopener noreferrer'}
                  >
                    <>
                      <SvgMapPinLight />
                      <span
                        className={cn(
                          'dark:text-white',
                          'font-regular',
                          'text-paragraph'
                        )}
                      >
                        Il team è interamente nel Cloud.
                        {/* <br /> Utilizziamo uffici popup per poterci incontrare. */}
                        <br /> La nostra sede operativa è a Cremona.
                      </span>
                    </>
                  </AppLink>
                </li>
              </ul>
            </div>
            <div className={s.colFoot}>
              <ul className={cn('flex', 'mt-[40px]', 'pl-[10px]')}>
                <li className={cn('mr-[50px]')}>
                  <AppLink
                    href={
                      'https://www.linkedin.com/in/stefano-gagliardi-2a6aa7133/'
                    }
                    label="Vai a Linkedin"
                    external={true}
                    rel={'noopener noreferrer'}
                  >
                    <SvgLinkedin />
                  </AppLink>
                </li>
                <li className={cn('mr-[50px]')}>
                  <AppLink
                    href={'https://github.com/StefanoGagliardi'}
                    label="Vai a Github"
                    external={true}
                    rel={'noopener noreferrer'}
                  >
                    <SvgGithub />
                  </AppLink>
                </li>
                <li>
                  <AppLink
                    href={'https://twitter.com/spolakg_staging'}
                    label="Vai a Twitter"
                    external={true}
                    rel={'noopener noreferrer'}
                  >
                    <SvgTwitter />
                  </AppLink>
                </li>
              </ul>
            </div>
          </div>
          {/* class: relative and z-3 are required for bypass "dots" fixed background */}
          <div className={cn('col-span-4', 'form-wrapper', 'relative', 'z-3')}>
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactsSection;
