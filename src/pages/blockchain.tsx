// Import core
import Head from 'next/head';
import React, { FC, ReactElement } from 'react';
import { NextPage } from 'next';

// Import third parts
import cn from 'classnames';

// Import customs
import Layout from '@components/common/Layout';
import s from './blockchain.module.scss';
import Globe from '@components/pages/Blockchain/Globe';
import ContactsSection from '@components/pages/sections/Contacts';

export const Blockchain: NextPage & { Layout: FC } = (): ReactElement => {
  return (
    <>
      <Head>
        <title>
          Sviluppo Blockchain, Smart contract e solidity - Next Generation
          Developers
        </title>
      </Head>
      <section className={cn('relative ', s.firstSection)}>
        <div className={s.sectionMask}>
          <div className={s.sectionBackgroundMask}>
            <div className={s.sectionBackground}>
              <Globe />
              <div className={s.guides} aria-hidden="true">
                <div className={cn('container', s.guideContainer)}>
                  <div className={s.guide}></div>
                  <div className={s.guide}></div>
                  <div className={s.guide}></div>
                  <div className={s.guide}></div>
                  <div className={s.guide}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn('container mx-auto h-full', s.contentContainer)}>
            <div className={cn(s.content)}>
              <div className={cn(s.firstRow)}>
                <div className={cn('col-span-2', s.pointerAuto)}>
                  <span className="block text-secondary font-bold text-base mb-3">
                    Blockchain & Smart Contract consultanting
                  </span>
                  <h1 className="text-white text-xl font-bold mb-5">
                    Il tuo partner per il
                    <br />
                    prossimo grande salto
                  </h1>
                  <h2 className="text-white text-lg font-semibold">
                    Portiamo strategie, design e tecnologie per consegnare
                    <br />
                    piattaforme ed esperienze che guidino<br /> la trasformazione
                    digitale
                  </h2>
                </div>
              </div>
              <div className={cn(s.secondRow)}>
                <div className="">
                  <h3 className="text-secondary font-bold text-lg mb-4">
                    Blockchain
                  </h3>
                  <p className="text-white font-regular text-base">
                    Our Blockchain <strong>consulting services</strong> help
                    shape your idea into a viable product, leveraging the
                    expertise of leaders in distributed ledger technologies.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-secondary font-bold text-lg mb-4">
                    Web3
                  </h3>
                  <p className="text-white font-regular text-base">
                    Our Blockchain <strong>consulting services</strong> help
                    shape your idea into a viable product, leveraging the
                    expertise of leaders in distributed ledger technologies.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-secondary font-bold text-lg mb-4">
                    Web Augmented Reality
                  </h3>
                  <p className="text-white font-regular text-base">
                    Our Blockchain <strong>consulting services</strong> help
                    shape your idea into a viable product, leveraging the
                    expertise of leaders in distributed ledger technologies.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-secondary font-bold text-lg mb-4">
                    WebGL for AR App or Games
                  </h3>
                  <p className="text-white font-regular text-base">
                    Our Blockchain <strong>consulting services</strong> help
                    shape your idea into a viable product, leveraging the
                    expertise of leaders in distributed ledger technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cn(s.secondSection, s.defaultSection)}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className={s.sectionTitle}>
              <div className={s.colHead}>
                <h2 className="text-secondary font-bold text-left text-base">
                  Blockchain and Web3 App development
                </h2>
                <span className="text-black dark:text-white text-xl text-left block font-bold">
                  About our mission
                </span>
              </div>
              <div className={s.colBody}>
                <p className={cn('text-dark dark:text-white text-lgm')}>
                  Our mission is to nurture cutting-edge applications for
                  decentralized web software protocols.
                </p>
                <p className={cn('text-dark dark:text-white text-lgm')}>
                  Our passion is delivering Web 3.0, a decentralized and fair
                  internet where users control their own data, identity and
                  destiny.
                </p>
              </div>
            </div>
            <div className={cn('flex items-center')}>
              <div className={cn('transform -skew-y-3 p-8 w-1/2', s.webCard)}>
                <div className={cn('transform skew-y-3', s.contentWebCard)}>
                  <h3>Web3 Foundation believes in an internet where:</h3>
                  <ul>
                    <li>
                      <p>
                        We connect web apps and UIs to the blockchain ecosystem
                        through our own smart contracts
                      </p>
                    </li>
                    <li>
                      <p>Global digital transactions are secure</p>
                    </li>
                    <li>
                      <p>
                        Online exchanges of information and value are
                        decentralized
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cn(s.thirdSection, s.defaultSection)}>
        <div className="container">
          <h1>Blockchain app developer</h1>
          <h2>1. Smartcontract</h2>
          <h2>2. WebApp integration</h2>
        </div>
      </section>
      <section className={cn(s.fourthSection, s.defaultSection)}>
        <div className="container">
          <h1>Web3 Developer</h1>
        </div>
      </section>
      <section className={cn(s.fifthSection, s.defaultSection)}>
        <div className="container">
          <h1>WEB AR</h1>
        </div>
      </section>
      <section className={cn(s.sixSection, s.defaultSection)}>
        <div className="container">
          <h1>WEB AR</h1>
        </div>
      </section>
      <ContactsSection />
    </>
  );
};

Blockchain.Layout = Layout;
export default Blockchain;
