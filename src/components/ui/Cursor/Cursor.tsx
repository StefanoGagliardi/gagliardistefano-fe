// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';
import themeConfig from '@config/theme';
import useMousePosition from '@services/hooks/useMousePosition';
import usePageHeightProgress from '@services/hooks/usePageHeightProgress';
import { useUI } from '../context';

interface Props {}
const Cursor: FC = (): ReactElement => {
  const { x, y } = useMousePosition();
  const progressPercentage = usePageHeightProgress();

  const { cursorType } = useUI();

  return (
    <>
      {themeConfig.customCursor === true && (
        <div
          className={cn('cursore-uq', {
            hover: cursorType === 'hover',
          })}
          style={{ transform: `translate3d(${x}px, ${y}px, 0px)` }}
        >
          <svg height="36px" width="36px">
            <circle
              className={cn('radial-progress-cover')}
              r="16px"
              cx="17px"
              cy="17px"
              fill="transparent"
              strokeDasharray="100px"
              strokeDashoffset={`${progressPercentage.toFixed(2)}px`}
            ></circle>
          </svg>
        </div>
      )}
    </>
  );
};

export default Cursor;
