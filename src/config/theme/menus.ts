// Import custom
import { IMainMenuLink } from '@interfaces/mainMenuLink';
import url from '@services/url';

const navbarMenuData: IMainMenuLink[] = [
  {
    title: 'Servizi web',
    url: url.webServices(),
    megaMenu: 'service',
  },
  {
    title: 'Web3',
    url: url.blockchain(),
    megaMenu: 'blockchain',
  },
  {
    title: 'Formazione',
    url: url.webThree(),
    megaMenu: 'training',
  },
  {
    title: 'Portfolio',
    url: url.portfolio(),
  },
  {
    title: 'Contatti',
    url: url.contacts(),
  },
];

const menus = {
  primaryMenu: navbarMenuData,
};

export default menus;
