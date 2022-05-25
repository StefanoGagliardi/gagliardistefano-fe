import React, { FC, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavbarItemTitle = styled.a`
  background: transparent;
  align-items: center; 
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  line-height: 1.5rem;
  margin-left: 30px;
  margin-right: 30px;
  transition-duration: 75ms;
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
`;

interface Props {
  onMouseEnter: (index: number) => void;
  title: string;
  index: number;
  children: ReactNode;
}

const NavbarItem: FC<Props> = (props: Props): ReactElement => {
  const { title, children, index } = props;

  const onMouseEnter = () => {
    props.onMouseEnter(index);
  };

  return (
    <NavbarItemEl onMouseEnter={onMouseEnter} onFocus={onMouseEnter}>
      <NavbarItemTitle>{title}</NavbarItemTitle>
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

export default NavbarItem;
