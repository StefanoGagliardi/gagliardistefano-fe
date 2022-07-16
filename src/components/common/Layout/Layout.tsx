// Import core
import { FC, ReactNode } from 'react';

// Import third parts
import cn from 'classnames';

// Import custom
import s from './Layout.module.css';
import Footer from '../Footer';
import Header from '../Header';
import MobileMenu from '../MobileMenu';
import { motion } from 'framer-motion';

/**
 * Script start
 */
const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

//
// Page[] - Studiare Page da next-commerce
//
// pages è una props ritornata dalle singole pagine da "getStaticProps" che chiama
// il metodo "await getAllPages()"che recupera l'elenco delle pagine da delle API (in questo caso STOREFRONT shopify)
type Props = {
  pageProps?: {
    pages?: any[];
  };
  children?: ReactNode;
};
export const Layout: FC<Props> = ({ children, pageProps }) => {
  return (
    <>
      {/* Commerce context */}
      <div className={cn(s.siteRoot)}>
        {/* <Header /> */}
        {/* <MobileMenu /> */}

        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
          className="fit"
        >
          {children}
        </motion.main>

        {/* <Sidebar> Cart or Blog sidebar (mobile ?)</Sidebar> */}

        {/* <Footer /> */}

        {/* <Modal > {modalContent} </Modal> */}
        {/* <FeaturesBar > rendered content (cookie) </FeaturesBar> */}
      </div>
      {/* Close Commerce context */}
    </>
  );
};
export default Layout;
