// Import custom
import { IAppLinkHref } from '@interfaces/appLinkHref'

/**
 * Function for manage static page link (url)
 *
 * @since 1.0.0
 */
export const url = {
  home: (): IAppLinkHref => `/`,
  services: (): IAppLinkHref => `/servizzi`,
  about: (): IAppLinkHref => `/about`,
  portfolio: (): IAppLinkHref => `/portfolio`,
  products: (): IAppLinkHref => `/prodotti`,
  blog: (): IAppLinkHref => `/blog`,
  contacts: (): IAppLinkHref => `/contatti`,
  PrivacyPolicy: (): IAppLinkHref => `/privacy-policy`,
  blockchain: (): IAppLinkHref => `/blockchain`,
  webThree: (): IAppLinkHref => `/web3`,
}

export default url
