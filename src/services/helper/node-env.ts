/**
 * Check if nextjs (node js)
 */

let inDevEnvironment = false;

if (process && process.env.NODE_ENV === 'development') {
  inDevEnvironment = true;
}

export const is_development = () =>
  process && process.env.NODE_ENV === 'development';

export default inDevEnvironment;
