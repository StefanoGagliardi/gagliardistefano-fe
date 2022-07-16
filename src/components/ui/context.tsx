// Import core
import React, { FC, useContext, useMemo } from 'react';
// next-themes ?

// Import third parts
// Theme mode with transition
//
import { ThemeProvider } from 'next-themes';
import { MegaMenu } from '@interfaces/mainMenuLink';
import themeConfig from '@config/theme';

// Import custom packages

/**
 * Script start - main ui context
 */
export interface UIState {
  displaySidebar: boolean;
  displayDropdown: boolean;
  displayModal: boolean;
  displayToast: boolean;
  modalView: string;
  toastText: string;
  // V2 Mega Menu
  displayMegamenu: boolean;
  megamenuOpen: string;
}

const initialState = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  modalView: 'LOGIN_VIEW',
  displayToast: false,
  toastText: '',
  displayMegamenu: false,
  megamenuOpen: '',
};

/**
 * Reducer actions
 */
type MODAL_VIEWS = 'SIGNUP_VIEW' | 'LOGIN_VIEW' | 'FORGOT_VIEW';
type ToastText = string;
type Action =
  | {
      type: 'OPEN_SIDEBAR';
    }
  | {
      type: 'CLOSE_SIDEBAR';
    }
  | {
      type: 'OPEN_TOAST';
    }
  | {
      type: 'CLOSE_TOAST';
    }
  | {
      type: 'SET_TOAST_TEXT';
      text: ToastText;
    }
  | {
      type: 'OPEN_DROPDOWN';
    }
  | {
      type: 'CLOSE_DROPDOWN';
    }
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'OPEN_MEGA_MENU';
      value: typeof MegaMenu[keyof typeof MegaMenu];
    }
  | {
      type: 'CLOSE_MEGA_MENU';
    }
  | {
      type: 'SET_MODAL_VIEW';
      view: MODAL_VIEWS;
    }
  | {
      type: 'SET_USER_AVATAR';
      value: string;
    };
export const UIContext = React.createContext<UIState | any>(initialState);
UIContext.displayName = 'UIContext';

function uiReducer(state: UIState, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      };
    }
    case 'OPEN_DROPDOWN': {
      return {
        ...state,
        displayDropdown: true,
      };
    }
    case 'CLOSE_DROPDOWN': {
      return {
        ...state,
        displayDropdown: false,
      };
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    case 'OPEN_TOAST': {
      return {
        ...state,
        displayToast: true,
      };
    }
    case 'CLOSE_TOAST': {
      return {
        ...state,
        displayToast: false,
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case 'SET_TOAST_TEXT': {
      return {
        ...state,
        toastText: action.text,
      };
    }
    case 'SET_USER_AVATAR': {
      return {
        ...state,
        userAvatar: action.value,
      };
    }
    case 'OPEN_MEGA_MENU': {
      return {
        ...state,
        displayMegamenu: true,
        megamenuOpen: action.value,
      };
    }
    case 'CLOSE_MEGA_MENU': {
      return {
        ...state,
        displayMegamenu: false,
        megamenuOpen: '',
      };
    }
  }
}

export const UIProvider: FC<{ children: any }> = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: 'CLOSE_SIDEBAR' })
      : dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebarIfPresent = () =>
    state.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' });

  const openDropdown = () => dispatch({ type: 'OPEN_DROPDOWN' });
  const closeDropdown = () => dispatch({ type: 'CLOSE_DROPDOWN' });

  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const openToast = () => dispatch({ type: 'OPEN_TOAST' });
  const closeToast = () => dispatch({ type: 'CLOSE_TOAST' });

  const setUserAvatar = (value: string) =>
    dispatch({ type: 'SET_USER_AVATAR', value });

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: 'SET_MODAL_VIEW', view });

  const openMegaMenu = (value: typeof MegaMenu[keyof typeof MegaMenu]) =>
    dispatch({ type: 'OPEN_MEGA_MENU', value });

  const closeMegaMenu = () => dispatch({ type: 'CLOSE_MEGA_MENU' });

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openDropdown,
      closeDropdown,
      openModal,
      closeModal,
      setModalView,
      openToast,
      closeToast,
      setUserAvatar,
      openMegaMenu,
      closeMegaMenu,
    }),
    [state]
  );

  if (themeConfig?.debug?.uiContext === true) {
    console.log('uiContext STATE: ', state);
  }

  return <UIContext.Provider value={value} {...props} />;
};

// Context to use in app - integra ui provider
export const ManagedUIContext: FC<{ children: any }> = ({ children }) => (
  <UIProvider>
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  </UIProvider>
);

// Custom hook per accedere al context
export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
