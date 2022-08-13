// Import core
import React, { FC, ReactElement, useEffect, useMemo } from 'react';

// Import third parts
import cn from 'classnames';
import Link from 'next/link';

interface Props {
  columnWidth?: number;
  // Column content
  firstColumnContent: {
    columnChild: JSX.Element | ReactElement;
    wrapperClassnames?: string[];
  };
  secondColumnContent: {
    columnChild: JSX.Element | ReactElement;
    wrapperClassnames?: string[];
  };
}
const ImageBanner: FC<Props> = (props: Props): ReactElement => {
  const { columnWidth = 8, firstColumnContent, secondColumnContent } = props;
  return (
    <div
      className={cn(
        `col-span-${columnWidth.toFixed(0)} col-start-${(
          (12 - columnWidth) / 2 +
          1
        ).toFixed(0)}`
      )}
    >
      <div className={cn('grid grid-cols-12', 'cta-image-banner')}>
        <div
          className={cn(
            'col-span-6',
            Array.isArray(firstColumnContent?.wrapperClassnames)
              ? [...firstColumnContent.wrapperClassnames]
              : ''
          )}
        >
          {firstColumnContent.columnChild}
        </div>
        <div
          className={cn(
            'col-span-6',
            Array.isArray(secondColumnContent?.wrapperClassnames)
              ? [...secondColumnContent.wrapperClassnames]
              : ''
          )}
        >
          {secondColumnContent.columnChild}
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
