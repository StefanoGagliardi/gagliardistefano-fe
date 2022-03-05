import { IAppLinkHref } from '@interfaces/appLinkHref';

export interface IMainMenuLink {
  title: string;
  url: IAppLinkHref;
  class?: string;
  megaMenu?: typeof MegaMenu[keyof typeof MegaMenu];
}

export interface INavigaionMenu {
  links: IMainMenuLink[];
  visible: boolean;
}

export const MegaMenu = {
  SERVICE: 'service ' as 'service',
  BLOCKCHAIN: 'blockchain' as 'blockchain',
  TRAINING: 'training' as 'training',
};
