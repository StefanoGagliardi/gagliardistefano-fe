import ThemeConfiguration from '@interfaces/themeConfig';
import menus from './menus';

const themeConfig: ThemeConfiguration = {
  menus,
  debug: {
    uiContext: false,
  },
  customCursor: true,
  mailgo: true,
  aos: false,
  gsap: true,
};

export default themeConfig;
