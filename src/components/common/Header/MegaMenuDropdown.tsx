// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';

// Import customs
import s from './MegaMenuDropdown.module.scss';

export const MegaMenuDropdown: FC = (): ReactElement => {
  return (
    <div className={s.dropdownRoot}>
      <div className={s.dropdownBackground}>
        <div className={s.alternateBackground}></div>
      </div>
      <div className={s.dropdownArrow}></div>
      <div className={s.dropdownContainer}>
        <div className={s.dropdownSection} data-dropdown="service">
          <div className={s.dropdownContent}>
            <div className={s.linkGroup}>
              <ul className={s.productsGroup}>
                <li>
                  <a className={cn(s.linkContainer)} href="https://stripe.com/payments">
                  <svg viewBox="0 0 48 48"><path fill="#87BBFD" className={s["hover-fillLight"]} d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"/><path fill="#555ABF" className="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z"/><path fill="#FFF" d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"/></svg>
                  <div className={s.productLinkContent}>
                    <h3 className="linkTitle">Pagos</h3>
                    <p className="linkSub">Un completo juego de herramientas de comercio creado para los&nbsp;desarrolladores.</p>
                  </div></a>
                </li>
                <li>
                  <a className="linkContainer item-subscriptions" href='https://stripe.com/subscriptions'>
                  <svg viewBox="0 0 48 48"><path fill="#74E4A2" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"/><path fill="#FFF" d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z"/><path fill="#159570" className="hover-fillDark" d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z"/></svg>
                  <div className='productLinkContent'>
                    <h3 className="linkTitle">Suscripciones</h3>
                    <p className="linkSub">Lógica integrada en la plataforma para pagos recurrentes.&nbsp;
  </p>
                  </div></a>
                </li>
                <li>
                  <a className="linkContainer item-connect" href='https://stripe.com/connect'>
                  <svg viewBox="0 0 48 48"><path fill="#68D4F8" className="hover-fillLight" d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z"/><path fill="#FFF" d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z"/><path fill="#217AB7" className="hover-fillDark" d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z"/></svg>
                  <div className='productLinkContent'>
                    <h3 className="linkTitle">Connect</h3>
                    <p className="linkSub">Todo lo que necesitan las plataformas para facilitar a sus usuarios la recepción de&nbsp;pagos.</p>
                  </div></a>
                </li>
                <li>
                  <a className="linkContainer item-relay" href='https://stripe.com/relay'>
                  <svg viewBox="0 0 48 48"><path fill="#FFA27B" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"/><path fill="#C23D4B" className="hover-fillDark" d="M24 12.5c8.285 0 15 6.828 15 15.25S32.285 43 24 43c-8.284 0-15-6.828-15-15.25S15.716 12.5 24 12.5z"/><path fill="#FFF" d="M25 38.925v6.288a.787.787 0 0 1-.788.787h-.424a.787.787 0 0 1-.788-.788v-6.287c-3.668-.49-6.5-3.623-6.5-7.425a7.5 7.5 0 0 1 15 0c0 3.802-2.832 6.935-6.5 7.425z"/></svg>
                  <div className='productLinkContent'>
                    <h3 className="linkTitle">Relay</h3>
                    <p className="linkSub">Vende tus productos en otras aplicaciones&nbsp;móviles.</p>
                  </div></a>
                </li>
                <li>
                  <a className="linkContainer item-atlas" href='https://stripe.com/atlas'>
                  <svg viewBox="0 0 48 48"><path fill="#FCD669" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"/><path fill="#CE7C3A" className="hover-fillDark" d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z"/><path fill="#FFF" d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z"/></svg>
                  <div className='productLinkContent'>
                    <h3 className="linkTitle">Atlas</h3>
                    <p className="linkSub">Una forma nueva de crear un negocio a través de&nbsp;Internet.</p>
                  </div></a>
                </li>
                <li>
                  <a className="linkContainer item-radar" href='https://stripe.com/radar'>
                  <svg viewBox="0 0 48 48"><path className="hover-fillLight" fill="#F6A4EB" d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z"/><path fill="#FFF" d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z"/><path className="hover-fillDark" fill="#9251AC" d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z"/></svg>
                  <div className='productLinkContent'>
                    <h3 className="linkTitle">Radar <span className='new-badge'>Nuevo</span></h3>
                    <p className="linkSub">Herramientas modernas para prevenir el fraude, perfectamente integradas con tus&nbsp;pagos.</p>
                  </div></a>
                </li>
              </ul>
            </div>

            <ul className={cn(s.linkGroup, s.prodsubGroup)}>
              <li>
                <a
                  className="linkContainer item-pricing"
                  href="https://stripe.com/pricing"
                >
                  <h3 className={cn(s.linkTitle, s.linkIcon)}>
                    <svg width="17" height="17">
                      <path
                        fill="#6772E5"
                        className="hover-fillDark"
                        d="M15.998 6.98c0 .24-.083.458-.217.635a1.373 1.373 0 0 1-.187.24l-7.736 7.742c-.534.534-1.4.534-1.934 0L1.41 11.08a1.37 1.37 0 0 1 0-1.935l7.736-7.743c.15-.15.33-.255.52-.32a.918.918 0 0 1 .16-.048c.136-.03.275-.034.412-.02l4.192.002c.867 0 1.57.665 1.57 1.486l-.002 4.48zm-2.366-3.62a1.254 1.254 0 0 0-1.772 1.77 1.254 1.254 0 0 0 1.772-1.77z"
                      />
                      <path
                        fill="#87BBFD"
                        className="hover-fillLight"
                        d="M5.143 10.396l3.253-3.254c.2-.2.523-.2.722 0l.723.723c.2.2.2.524.003.723L6.59 11.842c-.2.2-.524.2-.724 0l-.723-.724a.51.51 0 0 1 0-.723z"
                      />
                    </svg>
                    Consulenza
                  </h3>
                  <p className={s.linkSub}>
                    Stai definendo il tuo progetto?
                    <br /> Confrontati con un'esperto
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.dropdownSection} data-dropdown="blockchain"></div>
        <div className={s.dropdownSection} data-dropdown="training"></div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown;
