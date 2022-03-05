/**
 * Experimental types inspired durring studies of uikit Blueprint (by palantir)
 *
 * @author Stefano Gagliardi <stefano.gagliardi@sitisrl.it>
 * @since 05/03/2022
 */

/**
 * Alias for a `JSX.Element` or a value that renders nothing.
 *
 * In React, `boolean`, `null`, and `undefined` do not produce any output.
 */
export type MaybeElement = JSX.Element | false | null | undefined;

/**
 * Define ref type
 */
export type IRef<T extends HTMLElement = HTMLElement> =
  | IRefObject<T>
  | IRefCallback<T>;

// compatible with React.Ref type in @types/react@^16
export interface IRefObject<T extends HTMLElement = HTMLElement> {
  current: T | null;
}
export type IRefCallback<T extends HTMLElement = HTMLElement> = (
  ref: T | null
) => any;
