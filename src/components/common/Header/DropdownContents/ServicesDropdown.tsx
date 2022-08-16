// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';
import styled from 'styled-components';
import Link from 'next/link';

// Import customs
import s from './DropdownContents.module.scss';
import url from '@services/url';
import {
  SVGArrowSvg,
  SvgArrowUpWideShortThin,
  SvgBullhornThin,
  SvgGroupArrowsRotateThin,
  SvgLaptopThin,
  SvgLayerPlusThin,
  SvgMobileThin,
  SvgPassportThin,
  SvgPenPaintbrushThin,
  SvgPenToSquareThin,
  SvgShareNodesThin,
  SvgShopLockThin,
  SvgStoreThin,
  SvgVectorPolygonThin,
  SvgWebDesign,
  SvgWebsiteCorporate,
} from '@assets/svg';

const ContentColumn = styled.div`
  width: 240px;
`;
const ContentTitle = styled.span`
  display: block;
  text-align: left;
  font-weight: 600;
  color: #222;
  letter-spacing: 0.4px;
  margin-bottom: 30px;
`;

export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${(props: { noMarginBottom?: boolean; color: string }) =>
    props.noMarginBottom ? 0 : '1rem'};
  color: ${({ color }) => (color ? `var(--${color})` : 'var(--blue)')};
`;

/**
 * Script start
 */
type Props = {
  closeDropdown: () => void;
};
export const ServicesDropdown: FC<Props> = ({
  closeDropdown,
}: Props): ReactElement => {
  return (
    <div className={s.dropdownWrapper}>
      <div data-first-dropdown-section className={s.dropdownContentWrapper}>
        <ContentColumn>
          <ContentTitle>Web design & development</ContentTitle>
          <ul className={s.servicesList}>
            <li>
              <Link href={`${url.websiteCreation()}`}>
                <a href={`${url.websiteCreation()}`} onClick={closeDropdown}>
                  <SvgLaptopThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Sviluppo Sitiweb
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      La tua vetrina online
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`${url.ecommerceCreation()}`}>
                <a
                  href={`${url.ecommerceCreation()}`}
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgStoreThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Soluzioni E-commerce
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Store personalizzati
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`${url.ecommerceCreation()}`}>
                <a href={`${url.ecommerceCreation()}`} onClick={closeDropdown}>
                  <SvgShopLockThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      E-commerce CMS
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Soluzioni preconfigurate
                    </span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={closeDropdown}
                >
                  <SvgPenPaintbrushThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Realizzazione design
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Creazione design web
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={closeDropdown}
                >
                  <SvgVectorPolygonThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Progettazione UI/UX
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Progettazione tecnica
                    </span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </ContentColumn>
        <ContentColumn>
          <ContentTitle color="#222">Marketing & SEO strategy</ContentTitle>
          <ul className={s.servicesList}>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgArrowUpWideShortThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      SEO & Performance
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Analisi e miglioramento
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgBullhornThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Campagne Advertising
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Facebook & Google Ads
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgGroupArrowsRotateThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Email marketing
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Design e automazione
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgPassportThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Brand Identity
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      La tua presenza online
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgShareNodesThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Integrazioni Ecommerce
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Integrazione terze parti
                    </span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </ContentColumn>
        <ContentColumn>
          <ContentTitle color="#222">iOS & Android Application</ContentTitle>
          <ul className={s.servicesList}>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgLayerPlusThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Progettazione grafica
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Design applicazione
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgMobileThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Applicazioni ibride
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Sviluppo iOS e Android
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgPenToSquareThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Modifiche applicazione
                      <SVGArrowSvg />
                    </span>
                    {/* <span className={s.serviceSubtitle}>
                      Modifiche applicazione esistente
                    </span> */}
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </ContentColumn>
      </div>
    </div>
  );
};

export default ServicesDropdown;
