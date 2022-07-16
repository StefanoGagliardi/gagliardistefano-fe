import ThemeConfiguration from '@interfaces/themeConfig';
import menus from './menus';

const themeConfig: ThemeConfiguration = {
  menus,
  debug: {
    uiContext: false,
  },
  mailgo: true,
  aos: true
};

export default themeConfig;
