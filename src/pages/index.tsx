// Import core
import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

// Import third parts
import cn from 'classnames';

// Import customs
import s from './index.module.css';
import Layout from '@components/common/Layout';
import HomeComponents from '@components/pages/Home';
// import { SVGArrowSvg, SvgGlobe, SvgScrollIcon } from '@assets/svg';

/**
 * Script start
 */
export async function getStaticProps({
  locale,
  preview,
}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section
        className={cn('py-5 px-3 relative flex items-center', s.firstSection)}
      >
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <img src={'/scrollIcon.png'} className={s.scrollIcon} />
              <div className={cn('ml-50 py-5')}>
                <h1 className={s.h1} data-aos="fade-up">
                  Assumi le skill,<br></br>la qualità e l'sperienza
                </h1>
                <p
                  className={cn(s.subTitle, 'text-white mt-5')}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Accellera i tuoi progetti software e digitali con un team
                  <br></br>
                  all'avanguardia, d'esperienza pronto a valutare ed offire
                  soluzioni
                  <br></br>
                  <span
                    className="font-bold text-logoBlue"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    competitive
                  </span>
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section className={cn(s.secondSectionBefore)}></section>
      <section
        className={cn(s.secondSection, 'py-5 px-3 relative flex items-center')}
      >
        <HomeComponents.MainServiceCard />
      </section>
      <section className={cn(s.secondSectionAfter)}>
        {/* <button 
          onClick={() => {
            alert('With typescript and Jest');
          }}
        >
          Test Button
        </button> */}
      </section>
    </Layout>
  );
};
// </motion.div>
// </AnimatePresence>

// Home.Layout = Layout;
export default Home;
