import { IMainMenuLink } from './mainMenuLink';

interface ThemeConfiguration {
  /**
   * List of all availe menu in this theme
   */
  menus: {
    primaryMenu: IMainMenuLink[];
  };
}

export default ThemeConfiguration;
