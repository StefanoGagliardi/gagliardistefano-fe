// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';
import Link from 'next/link';
import styled from 'styled-components';

// Import customs
import s from './DropdownContents.module.scss';
import {
  SVGArrowSvg,
  SvgChartUserThin,
  SvgDiceD20Thin,
  SvgFileContractThin,
  SvgHexagonVerticalNFTThin,
} from '@assets/svg';

const ContentColumn = styled.div`
  width: 100%;
`;

/**
 * Script start
 */
type Props = {
  closeDropdown: () => void;
};
export const Web3Dropdown: FC<Props> = ({
  closeDropdown,
}: Props): ReactElement => {
  return (
    <div data-second-dropdown-section className={s.dropdownWrapper}>
      <span className={s.contentTitle}>Web3, Smart contract & Blockchain</span>
      <div className={s.dropdownContentWrapper}>
        <ContentColumn>
          <ul className={s.servicesList}>
            <li>
              <Link href="/servizi/realizzazione-siti-web/">
                <a
                  href="/servizi/realizzazione-siti-web/"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  <SvgFileContractThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Smart contract
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Sviluppo Smart contract
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
                  <SvgDiceD20Thin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Applicazioni Web3
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Sviluppo Applicazioni Web3
                    </span>
                  </div>
                </a>
              </Link>
            </li>          
          </ul>
        </ContentColumn>
        <ContentColumn>
          <ul className={s.servicesList}>
            <li>
              <Link
                href="/servizi/realizzazione-siti-web/"
                onClick={closeDropdown}
              >
                <a href="/servizi/realizzazione-siti-web/">
                  <SvgHexagonVerticalNFTThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      NFT: Non-fungible token
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Generazione e WebApp
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
                  <SvgChartUserThin className={s.serviceIcon} />
                  <div className={s.serviceIntroduction}>
                    <span className={s.serviceTitle}>
                      Consulenza
                      <SVGArrowSvg />
                    </span>
                    <span className={s.serviceSubtitle}>
                      Blockchain, NFT, SM e DeFi
                    </span>
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

export default Web3Dropdown;
