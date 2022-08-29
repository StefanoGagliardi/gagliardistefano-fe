import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

// generic types

/**
 * This file contains the types and prop-types for Checkbox, Radio and Switch components.
 */

// typescript types
// export type label = string;
// export type icon = ReactNode;
export type ripple = boolean;

// ============= COOL TYPE TO USE START ======================
export type className = string | string[];
export type containerProps = {
  className?: className;
  [key: string]: any;
};
// ============= COOL TYPE TO USE END ======================

export type labelProps = {
  [key: string]: any;
};
export type circleProps = {
  [key: string]: any;
};

/**
 * javascript prop-types - Check at RUNTIME
 * This type (NB: const) is used in his relative tsx component, this case Checkbox.tsx
 */
export const propTypesColor: any = PropTypes.string;
export const propTypesLabel: any = PropTypes.element;
export const propTypesIcon: any = PropTypes.node;
export const propTypesRipple: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesContainerProps: any = PropTypes.instanceOf(Object);
export const propTypesLabelProps: any = PropTypes.instanceOf(Object);
export const propTypesCircleProps: any = PropTypes.instanceOf(Object);
