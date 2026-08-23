import { useState, useEffect, useCallback } from 'react';

interface AsyncState<T> {
  status: 'idle' | 'loading' | 'success' | 'error';
  data?: T;
  error?: Error;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
) {
  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
  });

  const execute = useCallback(async () => {
    setState({ status: 'loading' });
    try {
      const response = await asyncFunction();
      setState({ status: 'success', data: response });
    } catch (error) {
      setState({ status: 'error', error: error as Error });
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
}
