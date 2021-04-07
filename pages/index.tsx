// Import core
import Head from 'next/head'
import Image from 'next/image'

// Import third parts
import cn from 'classnames'

// Import customs
import Layout from '@components/common/Layout'
import { SVGArrowSvg, SvgScrollIcon } from '@assets/svg'
import { GetStaticPropsContext } from 'next'
import s from './index.module.css'

/**
 * Script start
 */
export async function getStaticProps({
  locale,
  preview,
}: GetStaticPropsContext) {
  return {
    props: {
      pages: ['page_one', 'page_2'],
    },
  }
}

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section
      className={cn('py-5 px-3 relative flex items-center', s.firstSection)}
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <img src={'./scrollIcon.png'} className={s.scrollIcon} />
            <div className={cn('ml-50 py-5')}>
              <h1 className={s.h1}>
                Assumi le skill,<br></br>la qualità e l'sperienza
              </h1>
              <p className={cn(s.subTitle, 'text-white mt-5')}>
                Accellera i tuoi progetti software e digitali con un team
                <br></br>
                all'avanguardia, d'esperienza pronto a valutare ed offire
                soluzioni
                <br></br>
                <span className="font-bold text-logoBlue">competitive</span>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
    <section
      className={cn(s.secondSection, 'py-5 px-3 relative flex items-center')}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div>div card1</div>
          <div>div card2</div>
          <div>div card3</div>
        </div>
      </div>
    </section>
  </>
)

Home.Layout = Layout
export default Home
