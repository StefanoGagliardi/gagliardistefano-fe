// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';
import styled from 'styled-components';
import Link from 'next/link';

// Import customs
import s from './DropdownContents.module.scss';
import {
  SVGArrowSvg,
  SvgChartUserThin,
  SvgDiceD20Thin,
  SvgFileContractThin,
  SvgGraduationCapThin,
  SvgHexagonVerticalNFTThin,
  SvgListCheckThin,
  SvgPeopleArrowsThin,
} from '@assets/svg';

const ContentColumn = styled.div`
  width: 100%;
`;
const ContentTitle = styled.span`
  display: block;
  text-align: left;
  font-weight: 600;
  color: #222;
  letter-spacing: 0.4px;
  margin-bottom: 30px;
`;

/**
 * Script start
 */
type Props = {
  closeDropdown: () => void;
};
export const ConsultingDropdown: FC<Props> = ({
  closeDropdown,
}: Props): ReactElement => {
  return (
    <div data-third-dropdown-section className={s.dropdownWrapper}>
      <div className={s.dropdownContentWrapper}>
        <ContentColumn>
          <span className={s.contentTitle}>Web design & development</span>
          <ul className={s.servicesList}>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgGraduationCapThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Corsi di formazione
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Videocorsi sul web e programmazione
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
                  <SvgPeopleArrowsThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Formazione individuale
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Corsi a numero chiuso
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
                  <SvgListCheckThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Consulenza progettuale
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Consulenza progetti
                    </span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </ContentColumn>
        <ContentColumn>
          <span className={s.contentTitle}>NextGen Blog</span>
          <ul className={cn(s.servicesList, s.blogList)}>
            <li>
              <a href="/">Bundle loader: Webpack &amp; Rollup</a>
            </li>
            <li>
              <a href="/">Corso base ReactJs</a>
            </li>
            <li>
              <a href="/">Corso ReactJs con Typescript</a>
            </li>
            <li>
              <a href="/">ThreeJs shot tutorial</a>
            </li>
            <li>
              <a href="/">NextJs: sviluppo Plugin Webpack</a>
            </li>
          </ul>
        </ContentColumn>
      </div>
    </div>
  );
};

export default ConsultingDropdown;
