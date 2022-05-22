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
}

export default ThemeConfiguration;
