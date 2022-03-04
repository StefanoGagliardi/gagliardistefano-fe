import { IAppLinkHref } from '@interfaces/appLinkHref'

export interface IMainMenuLink {
  title: string
  url: IAppLinkHref
  class?: string
}

export interface INavigaionMenu {
  links: IMainMenuLink[],
  visible: boolean;
}