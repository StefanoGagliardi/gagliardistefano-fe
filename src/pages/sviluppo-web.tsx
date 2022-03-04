// import core
import { NextPage } from 'next'
import react, { FC, ReactElement } from 'react'

// Import third
import cn from 'classnames'
import { motion } from 'framer-motion'

// import custom
import s from './SviluppoWeb.module.css'
import { Layout } from '@components/common'

export const SviluppoWebPage = (): ReactElement => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section className={s.firstSetion}>
        <div className={cn('container mx-auto')}>
          {/* <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            layoutId="title"
          >
            Sviluppo web
          </motion.h1> */}
        </div>
      </section>
    </motion.div>
  )
}

SviluppoWebPage.Layout = Layout
export default SviluppoWebPage
