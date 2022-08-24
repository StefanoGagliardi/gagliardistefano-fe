// Import core
import React, { FC, ReactElement, ReactNode, useCallback } from 'react';

// Import third parts
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import AppLink from '@services/routing/AppLink';

const NavbarItemTitle = styled.span`
  background: transparent;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  line-height: 1.5rem;
  margin-left: 30px;
  margin-right: 30px;
  transition-duration: 75ms;

  opacity: 1;
`;

const NavbarItemEl = styled.span`
  position: relative;
  display: inline-block;
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
  top: 40px;
`;

interface Props {
  onMouseEnter: (index: number) => void;
  title: string;
  index: number;
  children: ReactNode;
  url?: string;
  setRef?: (ref: any) => void;
}

const NavbarItem: FC<Props> = (props: Props): ReactElement => {
  const { title, children, index, url, setRef } = props;

  const onMouseEnter = useCallback(() => {
    props.onMouseEnter(index);
  }, []);

  return (
    <NavbarItemEl
      className={cn('navbar-item')}
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      ref={(ref) => {
        if (setRef) {
          setRef(ref);
        }
      }}
    >
      {url ? (
        <AppLink
          href={url}
          title="Header menu item"
          label="Header menu item"
          useCursorHandler={true}
        >
          {/* <a href={url}> */}
          <NavbarItemTitle>{title}</NavbarItemTitle>
          {/* </a> */}
        </AppLink>
      ) : (
        <NavbarItemTitle>{title}</NavbarItemTitle>
      )}
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemEl>
  );
};

NavbarItem.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default React.memo(NavbarItem);
