// Import core
import { FC } from 'react'

// Import third parts
import Link from 'next/link'
import cn from 'classnames'

// Import custom
import s from './Footer.module.scss'
import { SvgFacebook, SvgInstagram } from '@assets/svg'
import { IMainMenuLink } from '@interfaces/mainMenuLink'
import footerMenuData from './footerMenuData'

export const Footer: FC = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className="container mx-auto">
          <div className="grid grid-cols-6">
            <div className="col-span-2">
              <h6 className="mb-5">
                Risorse
              </h6>
            </div>
            <div className="col-span-1">
              <h6 className="mb-5">Menu</h6>
            </div>
            <div className="col-span-3">
              <h6 className="mb-5">Servizi</h6>
            </div>
          </div>
        </div>
        <div className={s.socket}>
          <div className="container mx-auto">
            <div className="grid grid-col-3 grid-flow-col">
              <div>© 2021 Stefano Gagliardi. All rights reserved.</div>
              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/spolaaak/"
                  target="_black"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <SvgInstagram />
                </a>
                <a
                  href="https://www.instagram.com/spolaaak/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  <SvgFacebook />
                </a>
              </div>
              <div className="flex justify-etnd">
                {footerMenuData &&
                  footerMenuData.map((value: IMainMenuLink, index: number) => {
                    return (
                      <Link href={value.url as string} key={index}>
                        <a className="mr-3">{value.title}</a>
                      </Link>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
