import { useUI } from '@components/ui/context';
import Link from 'next/link';
import React, { ReactElement, FC, useMemo, useCallback } from 'react';

interface AppLinkProps {
  href: string;
  label?: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: any;
  title?: string;
  rel?: string;
  onClick?: () => void;
  useCursorHandler?: boolean;
}

export const AppLink: FC<AppLinkProps> = (
  props: AppLinkProps
): ReactElement => {
  const {
    href,
    label,
    external,
    children,
    className,
    title,
    rel,
    onClick,
    useCursorHandler = false,
  } = props;

  const { setCursortType } = useUI();

  if (onClick) {
    return (
      <a
        href={'#'}
        className={className}
        title={title || ''}
        onClick={() => {
          useCallback(() => onClick(), []);
        }}
      >
        {children ? children : label}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        className={className}
        title={title || ''}
        rel={rel ? rel : ''}
      >
        {children ? children : label}
      </a>
    );
  }

  const mouseEvent = useMemo(() => {
    if (useCursorHandler === true) {
      return {
        onMouseEnter: () => {
          setCursortType('hover');
        },
        onMouseLeave: () => {
          setCursortType('initial');
        },
      };
    }
    return {};
  }, []);

  return (
    <Link href={href}>
      <a
        href={href}
        className={className}
        title={title || ''}
        rel={rel ? rel : ''}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        {...mouseEvent}
      >
        {children ? children : label}
      </a>
    </Link>
  );
};

export default AppLink;
