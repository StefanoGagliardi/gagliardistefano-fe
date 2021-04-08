// import core
import React, { FC, ReactElement } from 'react'

// import third parts
import cn from 'classnames'

// import custom
import s from './MainServiceCard.module.css'
import { SvgGlobe } from '@assets/svg'

export const MainServiceCard: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div
        ata-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        className={cn(s.serviceCard, 'relative', 'p-50')}
      >
        <div className="z-10 relative">
          <div className={s.focusCardHeader}>
            <SvgGlobe />
            <h3>
              siti web<br></br>corporate
            </h3>
          </div>
          <div className={s.focusCardBody}>
            <p>
              Senza un'app Web, la tua azienda sta perdendo denaro e quote di
              mercato.
            </p>
            <p>
              Servizi di sviluppo end-to-end che ti aiuteranno a digitalizzare
              la tua attività e a rivoluzionare il mercato, indipendentemente
              dalle dimensioni della tua azienda.
            </p>
          </div>
        </div>
      </div>
      <div
        ata-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        className={cn(s.serviceCard, 'relative', 'p-50')}
      >
        <div className="z-10 relative">div card1</div>
      </div>
      <div
        ata-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        className={cn(s.serviceCard, 'relative', 'p-50')}
      >
        <div className="z-10 relative">div card1</div>
      </div>
    </div>
  )
}

export default MainServiceCard
