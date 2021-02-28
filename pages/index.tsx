// Import core
import Head from 'next/head'
import Image from 'next/image'

// Import third parts

// Import customs
import Layout from '@components/common/Layout'
import { SVGArrowSvg } from '@assets/svg'
import { GetStaticPropsContext } from 'next'

/**
 * Script start
 */
export async function getStaticProps({
  locale,
  preview,
}: GetStaticPropsContext) {
  return {
    props: {
      pages: ["page_one", "page_2"],
    },
  }
}

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div>
          <h1>1</h1>
        </div>
        <div>
          <h1>2</h1>
        </div>
        <div>
          <h1>3</h1>
        </div>
        <div>
          <h1>4</h1>
        </div>
        <div>
          <h1>5</h1>
        </div>
        <div>
          <h1>6</h1>
        </div>
      </div>
      <SVGArrowSvg />
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
      </a>
    </footer>
  </div>
)

Home.Layout = Layout
export default Home
