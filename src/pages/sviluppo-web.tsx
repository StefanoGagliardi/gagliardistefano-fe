// import core
import { NextPage } from 'next';
import react, { FC, ReactElement } from 'react';

// Import third
import cn from 'classnames';

// import custom
import s from './SviluppoWeb.module.css';
import { Layout } from '@components/common';

export const SviluppoWebPage = (): ReactElement => {
  return (
    <section className={s.firstSetion}>
      <div className={cn('container mx-auto')}>

      </div>
    </section>
  );
};

SviluppoWebPage.Layout = Layout;
export default SviluppoWebPage;
