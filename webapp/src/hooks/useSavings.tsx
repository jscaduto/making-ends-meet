import { useState } from 'react';

export default (initial: number) => {
  const [savings, setSavings] = useState<number>(initial);
  const updateSavings = (delta: number) => {
    setSavings(savings + delta);
  };
  return [savings, updateSavings] as const;
};
