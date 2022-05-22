import ThemeConfiguration from '@interfaces/themeConfig';
import menus from './menus';

const themeConfig: ThemeConfiguration = {
  menus,
  debug: {
    uiContext: true,
  },
  mailgo: true,
  aos: true
};

export default themeConfig;
