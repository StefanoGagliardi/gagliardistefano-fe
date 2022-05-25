declare module '*.svg' {
  import { FunctionComponent } from 'react';

  const content: FunctionComponent<{
    className?: string;
  }>;

  // noinspection JSDuplicatedDeclaration
  export default content;
}

type Enumerable<T> = {
  [P in keyof T]: T[P];
};

declare module '*.jpeg';
declare module '*.jpg';

/**
 * Interface for i18n translations
 */
export interface Dictionary {
  title: string;
  subtitle: string;
  link: string;
  greet: string;
}

declare global {
  interface Window {
    debug: any;
  }
}

window.MyNamespace = window.MyNamespace || {};
