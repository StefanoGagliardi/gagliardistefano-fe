// Import core
import React, { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';

// Import third parts
import cn from 'classnames';

// Imoport custom
import s from './ServiceContactsSection.module.scss';

/**
 * Script start
 */
type Props = {
  classNames?: string[];
};
export const ServiceContactsSection: FC<Props> = ({
  classNames = [],
}: Props): ReactElement => {
  // const router = useRouter();

  return (
    <section className={cn('relative ', s.sectionContacts, ...classNames)}>
      serivce contacts
    </section>
  );
};

export default ServiceContactsSection;
