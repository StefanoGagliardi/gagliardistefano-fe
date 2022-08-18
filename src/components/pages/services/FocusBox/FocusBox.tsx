// Import core
import React, { FC, ReactElement } from 'react';
import cn from 'classnames';

interface Props {
  text: string;
  icon?: JSX.Element;
}
const FocusBox: FC<Props> = (props: Props): ReactElement => {
  const { text, icon } = props;

  return (
    <div
      className={cn(
        'grid',
        'text-primary',
        'bg-primary',
        'dark:bg-secondary',
        'focus'
        // s.focus
      )}
    >
      {icon ? icon : <></>}
      <span>{text}</span>
    </div>
  );
};

export default FocusBox;