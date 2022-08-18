import { MutableRefObject, useRef } from 'react';

const useMapRef = <T>(): [
  MutableRefObject<Map<number, T>>,
  (ref: T, key: number) => void
] => {
  const refs = useRef<any>([]);
  var map = new Map();
  refs.current = map;
  return [
    refs,
    (ref, key) => {
      ref && refs.current.set(key, ref);
    },
  ];
};

export default useMapRef;
