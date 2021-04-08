// Import custom
import { IMainMenuLink } from '@interfaces/mainMenuLink'
import url from 'src/services/url'

const navbarMenuData: IMainMenuLink[] = [
  {
    title: 'Servizzi',
    url: url.services(),
  },
  {
    title: 'About',
    url: url.about(),
  },
  {
    title: 'Portfolio',
    url: url.portfolio(),
  },
  {
    title: 'Prodotti',
    url: url.products(),
  },
  {
    title: 'Blog',
    url: url.blog(),
  },
  {
    title: 'Contatti',
    url: url.contacts(),
  },
]

export default navbarMenuData
