import React, { MutableRefObject, useRef } from 'react';

/**
 * Store some Refs in ref as array
 */
const useArrayRef = (): [
  MutableRefObject<any>,
  (ref: MutableRefObject<any>, key: number) => void
] => {
  const refs = useRef<any[]>([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
};

export default useArrayRef;
