// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';
import styled from 'styled-components';

// Import customs
import s from './DropdownContents.module.scss';

const ProductsSection = styled.ul`
  li {
    display: flex;
    margin-bottom: 50px;
  }
`;

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `${color}`};
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
export const ConsultingDropdown: FC = (): ReactElement => {
  return (
    <div className={s.dropdownWrapper}>
      <ProductsSection>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="blue">Payments</Heading>
            <p>A complete payments platform</p>
          </div>
        </li>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="green">Billing</Heading>
            <p>Build and scale your recurring business model</p>
          </div>
        </li>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="teal">Connect</Heading>
            <p style={{ marginBottom: 0 }}>
              Everything platforms need to get sellers paid
            </p>
          </div>
        </li>
      </ProductsSection>
      <ProductsSection>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="blue">Payments</Heading>
            <p>A complete payments platform</p>
          </div>
        </li>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="green">Billing</Heading>
            <p>Build and scale your recurring business model</p>
          </div>
        </li>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="teal">Connect</Heading>
            <p style={{ marginBottom: 0 }}>
              Everything platforms need to get sellers paid
            </p>
          </div>
        </li>
      </ProductsSection>
      <ProductsSection>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="blue">Payments</Heading>
            <p>A complete payments platform</p>
          </div>
        </li>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="green">Billing</Heading>
            <p>Build and scale your recurring business model</p>
          </div>
        </li>
        <li>
          <div>
            <Logo color="#6772e5" />
          </div>
          <div>
            <Heading color="teal">Connect</Heading>
            <p style={{ marginBottom: 0 }}>
              Everything platforms need to get sellers paid
            </p>
          </div>
        </li>
      </ProductsSection>
    </div>
  );
};

export default ConsultingDropdown;
