// Import core
import { useMemo, useState } from 'react';

/**
 * This function is a wrapper for async function thath influence Frontend
 * This function handle a Loading Status during async "action" run
 *
 * @param action - Function
 * @param deps - @TODO Capire bene
 * @returns
 */
type AsyncActionFn = (...args: any[]) => Promise<any>;
function useAsyncAction<T extends AsyncActionFn>(
  action: T,
  deps: any[] = []
): [(...args: Parameters<T>) => void, boolean] {
  const [loading, setLoading] = useState(false);

  const run = useMemo(
    () =>
      (...args: Parameters<T>) => {
        
        if (loading) {
          return;
        }

        setLoading(true);

        action(...args).then(() => {
          setLoading(false);
        });
      },
    [loading, setLoading, ...deps]
  );

  return useMemo(() => [run, loading], [run, loading]);
}

export default useAsyncAction;
