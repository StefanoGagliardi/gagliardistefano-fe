// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';
import styled from 'styled-components';
import Link from 'next/link';

// Import customs
import s from './DropdownContents.module.scss';
import { SVGArrowSvg, SvgWebDesign, SvgWebsiteCorporate } from '@assets/svg';

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
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    console.log('Click on link');
                    closeDropdown();
                  }}
                >
                  <SvgWebsiteCorporate className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Corporate E-commerce
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Soluzioni E-commerce avanzate
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/servizi/realizzazione-siti-web/"
                onClick={closeDropdown}
              >
                <a href="/servizi/realizzazione-siti-web/">
                  <SvgWebsiteCorporate className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Integrazione E-commerce
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Soluzioni e-commerce preconfigurate
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/servizi/realizzazione-siti-web/"
                onClick={closeDropdown}
              >
                <a href="/servizi/realizzazione-siti-web/">
                  <SvgWebsiteCorporate className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Sitiweb Corporate
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Presenta la tua azienda
                    </span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/servizi/realizzazione-siti-web/"
                onClick={closeDropdown}
              >
                <a href="/servizi/realizzazione-siti-web/">
                  <SvgWebDesign className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Corporate design
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Progettazione grafica
                    </span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </ContentColumn>
        <ContentColumn>
          <ContentTitle color="#222">Marketing & SEO strategy</ContentTitle>
        </ContentColumn>
        <ContentColumn>
          <ContentTitle color="#222">iOS & Android Application</ContentTitle>
        </ContentColumn>
      </div>
    </div>
  );
};

export default ServicesDropdown;
