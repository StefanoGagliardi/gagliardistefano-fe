// Import custom
import { IMainMenuLink } from '@interfaces/mainMenuLink';
import url from '@services/url';

const navbarMenuData: IMainMenuLink[] = [
  {
    title: 'Servizi',
    url: url.services(),
  },
  {
    title: 'Blockchain / Web3',
    url: url.blockchain(),
  },
  {
    title: 'Formazione',
    url: url.webThree(),
  },
  // {
  //   title: 'Portfolio',
  //   url: url.portfolio(),
  // },
  // {
  //   title: 'Prodotti',
  //   url: url.products(),
  // },
  // {
  //   title: 'Blog',
  //   url: url.blog(),
  // },
  {
    title: 'Contatti',
    url: url.contacts(),
  },
];

const menus = {
  primaryMenu: navbarMenuData,
}

export default menus;
