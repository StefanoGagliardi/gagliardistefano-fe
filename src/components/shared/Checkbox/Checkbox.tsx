import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

// utils
// import Ripple from "material-ripple-effects";
import classnames from 'classnames';
// import { twMerge } from "tailwind-merge";
// import findMatch from "../../utils/findMatch";
// import objectsToString from "../../utils/objectsToString";

// context
// import { useTheme } from "../../context/theme";

// types
// import type {
//   ripple,
//   containerProps,
//   labelProps,
// } from '@interfaces/components/checkbox';

import {
  propTypesColor,
  propTypesLabel,
  propTypesIcon,
  propTypesRipple,
  propTypesClassName,
  propTypesContainerProps,
  propTypesLabelProps,
} from '@interfaces/components/checkbox';

/**
 * Checkbox component interface, extend input props
 */
export interface CheckboxProps extends React.ComponentProps<'input'> {
  rootClass?: string | string[];
  color?: string;
  label?: string | JSX.Element; // label
  icon?: ReactNode; // icon;
  ripple?: boolean; // ripple;
  className?: string;
  containerProps?: { [key: string]: any }; // containerProps;
  labelProps?: { [key: string]: any }; // labelProps;
}

const rootClassname = `inline-flex items-center`;
const containerClassname = `relative flex items-center cursor-pointer p-3 rounded-full`;
const inputClassname = `peer
relative
appearance-none
w-6
h-6
border
rounded-md
border-blue-gray-200
cursor-pointer
transition-all
before:content['']
before:block
before:bg-blue-gray-500
before:w-12
before:h-12
before:rounded-full
before:absolute
before:top-2/4
before:left-2/4
before:-translate-y-2/4
before:-translate-x-2/4
before:opacity-0
hover:before:opacity-10
before:transition-opacity
checked:bg-blue-500
checked:border-blue-500
before:bg-blue-500`;
const labelClassname = `text-gray-700 font-light select-none cursor-pointer mt-px`;

/**
 * Checkbox Component is forwardRef - This is perfect also for Gsap\
 * forwardRef: <refType, componentProps>
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      rootClass = '',
      color = '#1663c1',
      label = '',
      className = '',
      containerProps = {
        className: '',
      },
      icon,
      ripple,
      labelProps,
      ...rest
    },
    ref
  ) => {
    // 1. init
    // const { checkbox } = useTheme();
    // const { defaultProps, valid, styles } = checkbox;
    // const { base, colors } = styles;

    // 2. set default props
    // color = color ?? defaultProps.color;
    // className = className ?? defaultProps.className;
    // ripple = ripple ?? defaultProps.ripple; // TO IMPLEMENT

    /**
     * 3. set ripple effect instance
     *
     * NB: TODO - To implement- Ripple is "Google effect" shadow that grow (inside background shape color). Shadow have origin on mouse click point
     */
    // const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    const rootClasses = classnames(
      rootClassname,
      Array.isArray(rootClass)
        ? [...rootClass]
        : rootClass
    );
    // const rootClasses = classnames(objectsToString(base.root));

    const containerClasses = classnames(
      containerClassname,
      Array.isArray(containerProps?.className)
        ? [...containerProps?.className]
        : containerProps?.className
    );

    // const containerClasses =  twMerge(
    //   classnames(objectsToString(base.container)),
    //   containerProps?.className
    // );

    const inputClasses = classnames(
      inputClassname,
      className // className from props is type string because own custom type className: string | string[] isn't compatible with HTMLInputElement
      // Array.isArray(className) ? [...className] : className
    );
    // const inputClasses = twMerge(
    //   classnames(
    //     objectsToString(base.input),
    //     objectsToString(colors[findMatch(valid.colors, color, 'blue')])
    //   ),
    //   className
    // );

    const labelClasses = classnames(
      labelClassname,
      Array.isArray(labelProps?.className)
        ? [...labelProps?.className]
        : labelProps?.className
    );
    // const labelClasses = twMerge(
    //   classnames(objectsToString(base.label)),
    //   labelProps?.className
    // );

    return (
      <div ref={ref} className={rootClasses}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || 'checkbox'}
          onMouseDown={(e) => {
            const onMouseDown = containerProps?.onMouseDown;

            // if (ripple) {
            //   rippleEffect.create(e, 'dark');
            // }

            return typeof onMouseDown === 'function' && onMouseDown(e);
          }}
        >
          <input
            {...rest}
            type="checkbox"
            className={inputClasses}
            id={rest.id || 'checkbox'}
          />
          <div className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
            {icon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </label>
        {label && (
          <label
            {...labelProps}
            className={labelClasses}
            htmlFor={rest.id || 'checkbox'}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

/**
 * Props-type vs Typescript: https://stackoverflow.com/questions/41746028/proptypes-in-a-typescript-react-application#:~:text=Typescript%20and%20PropTypes%20serve%20different,autocomplete%20for%20function%20calls%2C%20etc.
 *
 */
Checkbox.propTypes = {
  color: propTypesColor,
  label: propTypesLabel,
  icon: propTypesIcon,
  ripple: propTypesRipple,
  className: propTypesClassName,
  containerProps: propTypesContainerProps,
  labelProps: propTypesLabelProps,
};

Checkbox.displayName = 'NextGenerationDevelopers.Checkbox';

export default Checkbox;
