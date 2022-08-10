// Import core
import React, { FC, ReactElement, useEffect, useMemo } from 'react';

// Import third parts
import cn from 'classnames';

/**
 * Script starts
 * Default service section: text content on on side, and image on other.
 */
interface Props {
  // Container
  useContainer?: boolean;
  containerClasses?: string[];
  // Column width
  firstColumn?: number;
  columnGap?: number;
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
export const ContentAndImage: FC<Props> = (props: Props): ReactElement => {
  const {
    useContainer = true,
    containerClasses = [],
    firstColumn = 6,
    columnGap = 1,
    firstColumnContent,
    secondColumnContent,
  } = props;

  usePropsValidation(props);

  console.log('firstColumn props:', firstColumn);

  return (
    <div
      className={cn(
        useContainer ? 'container mx-auto' : 'w-100',
        Array.isArray(containerClasses) ? [...containerClasses] : ''
      )}
    >
      <div className={`grid grid-cols-12 gap-${columnGap.toFixed(0)}`}>
        <div
          className={cn(
            `col-span-${firstColumn.toFixed(0)}`,
            Array.isArray(firstColumnContent?.wrapperClassnames)
              ? [...firstColumnContent.wrapperClassnames]
              : ''
          )}
        >
          {firstColumnContent.columnChild}
        </div>
        <div
          className={cn(
            `col-span-${(12 - firstColumn).toFixed(0)}`,
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

const usePropsValidation = (props: Props) => {
  // Error haindling
  const { firstColumn } = props;
  useMemo(() => {
    if (
      (typeof firstColumn === 'number' && firstColumn < 1) ||
      (typeof firstColumn === 'number' && firstColumn > 11)
    ) {
      throw new Error('Column must be between 1 and 11 or default is 6');
    } else if (
      typeof firstColumn !== 'number' &&
      typeof firstColumn !== 'undefined'
    ) {
      throw new Error('firstColumn must be a number');
    }
  }, [firstColumn]);
};

export default ContentAndImage;
