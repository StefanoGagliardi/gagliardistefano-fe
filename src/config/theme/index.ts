import ThemeConfiguration from '@interfaces/themeConfig';
import menus from './menus';

const themeConfig: ThemeConfiguration = {
  menus,
  debug: {
    uiContext: false,
    menu: {
      enabled: false, // Enable mode
      open: [1, 2], // Set active dropdown: first is previous, second is current
    },
  },
  customCursor: true,
  mailgo: true,
  aos: false,
  gsap: true,
};

export default themeConfig;
