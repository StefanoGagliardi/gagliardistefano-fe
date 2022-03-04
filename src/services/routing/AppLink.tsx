import Link from 'next/link';
import React, { ReactElement, FC } from 'react';

interface AppLinkProps {
  href: string;
  label: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: any;
  title?: string;
  onClick?: () => void;
}

export const AppLink: FC<AppLinkProps> = (
  props: AppLinkProps
): ReactElement => {
  const { href, label, external, children, className, title, onClick } = props;

  if (onClick) {
    if (children) {
      return (
        <a href="#" onClick={onClick} className={className}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={'#'}
        className={className}
        title={title || ''}
        onClick={() => {
          onClick();
        }}
      >
        {label}
      </a>
    );
  }

  if (children) {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" className={className} title={title || ''}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a href={href} className={className} title={title || ''}>
        {label}
      </a>
    </Link>
  );
};

export default AppLink;
