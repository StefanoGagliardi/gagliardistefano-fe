import { IMainMenuLink } from './mainMenuLink';

interface ThemeConfiguration {
  /**
   * List of all availe menu in this theme
   */
  menus: {
    primaryMenu: IMainMenuLink[];
  };

  /**
   * Handle mailto: & tel: with mailgo.js
   */
  mailgo: boolean;

  /**
   * DEBUG Mode
   */
  debug: {
    uiContext: boolean;
  };

  /**
   * Enable AOS - Animate On Scroll
   */
  aos: boolean;

  /**
   * Page list, internal name
   */
  pageList?: string[];
}

export const PagesList = {
  HOMEPAGE: 'homepage' as 'homepage',
  'PRIVACY-POLICY': 'privacy-policy' as 'privacy-policy',
  WEB3: 'blockchain' as 'blockchain',
  'REALIZZAZIONE-SITI-WEB':
    'realizzazione-siti-web' as 'realizzazione-siti-web',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PagesList = typeof PagesList[keyof typeof PagesList];

export default ThemeConfiguration;
