// Import custom
import { IAppLinkHref } from '@interfaces/appLinkHref';

/**
 * Function for manage static page link (url)
 *
 * @since 1.0.0
 */
export const url = {
  // First level url
  home: (): IAppLinkHref => `/`,
  about: (): IAppLinkHref => `/chi-sono`,
  webServices: (): IAppLinkHref => `/servizi-web`,
  blockchain: (): IAppLinkHref => `/blockchain`,
  portfolio: (): IAppLinkHref => `/portfolio`,
  contacts: (): IAppLinkHref => `/contatti`,

  blog: (): IAppLinkHref => `/blog`,
  PrivacyPolicy: (): IAppLinkHref => `/privacy-policy`,
  webThree: (): IAppLinkHref => `/web3`,

  // Service URL
  baseServices: (): IAppLinkHref => `/servizi`,
  websiteCreation: (): IAppLinkHref => `${url.baseServices()}/realizzazione-siti-web`,
  ecommerceCreation: (): IAppLinkHref => `${url.baseServices()}/realizzazione-ecommerce`,
};

export default url;
