import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T, defaultValue: T): T {
  const ref: any = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current || defaultValue;
}

export default usePrevious;