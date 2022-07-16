// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';

// Import customs
import s from './DropdownContents.module.scss';

/**
 * Script start
 */
export const Web3Dropdown: FC = (): ReactElement => {
  return (
    <div className={s.dropdownWrapper}>
      <h4>Web3 Dropdown content</h4>
    </div>
  );
};

export default Web3Dropdown;
