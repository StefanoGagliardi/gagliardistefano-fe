// Import core
import { FC } from 'react';

// Import third parts
import Link from 'next/link';
import cn from 'classnames';

// Import custom
import s from './Footer.module.scss';
// import { SvgFacebook, SvgInstagram } from '@assets/svg';
import { IMainMenuLink } from '@interfaces/mainMenuLink';
import footerMenuData from './footerMenuData';
import useThemeWrap from '@services/theme/themeStyleHook';
import url from '@services/url';

export const Footer: FC = () => {
  const [theme] = useThemeWrap();

  return (
    <>
      <footer className={cn(s.footer, 'border-gray-200')}>
        <div className={cn('container mx-auto', s.footerContainer)}>
          <div className="grid grid-cols-5">
            <div className={cn('col-span-2', s.footerLogo)}>
              {theme == false ? (
                <>
                  <img
                    src={'/logo/res/gagliardistefano-logo-light250.png'}
                    width="250"
                    height="49"
                  />
                </>
              ) : (
                <img
                  src={'/logo/res/gagliardistefano-logo-dark250.png'}
                  width="250"
                  height="49"
                />
              )}
              <p className="text-black dark:text-white">
                Sono uno sviluppatore, ricercatore e cosulente in ambito Web,
                Blockchain e Mobile.
                <br />
                <br />
                Divido il mio tempo tra essere sviluppatore in{' '}
                <a
                  href="sitisrl.it"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  SITI srl
                </a>{' '}
                ed essere ricercatore / contributor di progetti in ambito web
              </p>
            </div>
            <div className="col-span-1">
              <h6 className="mb-5 text-black dark:text-white">Pagine utili</h6>
              <ul className={cn('text-dark dark:text-white', s.menuList)}>
                <li>
                  <Link href={url.home() as string}>Homepage</Link>
                </li>
                <li>
                  <Link href={url.about() as string}>Chi sono</Link>
                </li>
                <li>
                  <Link href={url.webServices() as string}>Sviluppo Web</Link>
                </li>
                <li>
                  <Link href={url.blockchain() as string}>Sviluppo Web3</Link>
                </li>
                <li>
                  <Link href={url.portfolio() as string}>Portfolio</Link>
                </li>
                <li>
                  <Link href={url.contacts() as string}>Contatti</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h6 className="mb-5 text-black dark:text-white">
                Servizi e consulenza
              </h6>
              <ul className={cn('text-dark dark:text-white', s.menuList)}>
                <li>
                  <Link href="/">Siti web Corporate</Link>
                </li>
                <li>
                  <Link href="/">Sviluppo WebApp</Link>
                </li>
                <li>
                  <Link href="/">Sviluppo e-commerce</Link>
                </li>
                <li>
                  <Link href="/">Sviluppo Smartcontract</Link>
                </li>
                <li>
                  <Link href="/">WebApp con Web3</Link>
                </li>
                <li>
                  <Link href="/">Web Augmented Reality</Link>
                </li>
                <li>
                  <Link href="/">Sviluppo di terze parti</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h6 className="mb-5 text-black dark:text-white">
                Blog e Formazione
              </h6>
              <ul className={cn('text-dark dark:text-white', s.menuList)}>
                <li>
                  <Link href="/">Bundle loader: Webpack & Rollup</Link>
                </li>
                <li>
                  <Link href="/">Corso base ReactJs</Link>
                </li>
                <li>
                  <Link href="/">Corso ReactJs con Typescript</Link>
                </li>
                <li>
                  <Link href="/">ThreeJs shot tutorial</Link>
                </li>
                <li>
                  <Link href="/">NextJs: sviluppo Plugin Webpack</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.socket}>
          <div className={cn('container mx-auto', s.socketDivider)}>
            <div className="grid grid-col-3 grid-flow-col">
              <div className={cn('text-black dark:text-white', s.socketCopy)}>
                © 2021 Stefano Gagliardi. All rights reserved.
              </div>
              {/* <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/spolaaak/"
                  target="_black"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <SvgInstagram />
                </a>
                <a
                  href="https://www.instagram.com/spolaaak/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  <SvgFacebook />
                </a>
              </div> */}
              <div className="flex justify-end">
                {footerMenuData &&
                  footerMenuData.map((value: IMainMenuLink, index: number) => {
                    return (
                      <Link href={value.url as string} key={index}>
                        <a className="mr-3 text-black dark:text-white">
                          {value.title}
                        </a>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
