import { createContext } from 'react';

interface SmootherContextInterface {
  smoother: null | ScrollSmoother;
}
const defaultValue = {
  smoother: null,
};
export const SmootherContext =
  createContext<SmootherContextInterface>(defaultValue);

export default SmootherContext;
