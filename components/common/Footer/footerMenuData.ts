// Import custom
import { IMainMenuLink } from '@interfaces/mainMenuLink'
import url from '@services/url'

const footerMenuData: IMainMenuLink[] = [
  {
    title: 'Contattami',
    url: url.contacts(),
  },
  {
    title: 'Privacy Policy',
    url: url.PrivacyPolicy(),
  },
]

export default footerMenuData
