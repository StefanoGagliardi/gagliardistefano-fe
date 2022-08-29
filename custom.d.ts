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

declare module 'react' {
  // (property) JSX.IntrinsicElements.video: React.TMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>

  interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    loading: string;
    type: string;
  }

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
  }
}
