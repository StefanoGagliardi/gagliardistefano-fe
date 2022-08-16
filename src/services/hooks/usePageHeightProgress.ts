// Import core
import { useRouter } from 'next/router';
import React, { useState, useEffect, useMemo, useCallback } from 'react';

// Script start
const usePageHeightProgress = () => {
  // State with return
  const [progressPercentage, setProgressPercentage] = useState<number>(100);

  // Router for listen page change and recalculate pageHeight
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', pageScrollHandler);
    return () => {
      window.removeEventListener('scroll', pageScrollHandler);
    };
  }, []);

  /**
   * Handle function "on scroll" event with state setter
   */
  const pageScrollHandler = useCallback(
    (_event: Event) => {
      const windowHeight = getWindowHeight();
      const docHeight = getDocHeight() - windowHeight;
      const scrollPosition = getScrollPosition();
      const initDiff = (windowHeight / docHeight) * 100;
      var result =
        ((scrollPosition + windowHeight) / docHeight) * 100 - initDiff;

      setProgressPercentage(100 - result);
    },
    [router]
  );

  const getWindowHeight = () =>
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    0;

  const getDocHeight = () =>
    Math.max(
      document.body.scrollHeight || 0,
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0,
      document.documentElement.offsetHeight || 0,
      document.body.clientHeight || 0,
      document.documentElement.clientHeight || 0
    );

  const getScrollPosition = () =>
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body).scrollTop;

  return progressPercentage;
};

export default usePageHeightProgress;
