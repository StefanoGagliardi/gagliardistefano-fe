import React from 'react';
import { IRef, IRefs } from "@interfaces/props";

/**
 * Context for MegaMenu
 */
type ContextProps = {
  dropdownRefs: IRefs<IRef<HTMLAnchorElement>[]>;
  setDropdownRefs: (dropdownRefs: IRefs<IRef<HTMLAnchorElement>[]>) => void;
}

export const HeaderContext = React.createContext<ContextProps>({
  dropdownRefs: [],
  setDropdownRefs: (dropdownRefs) => {} 

})
export default HeaderContext;
