import { useState } from 'react';

import LifeEvent from '../types/LifeEvent';

export default (lifeEvents: LifeEvent[], updateSavings: CallableFunction) => {
  const [currentRound, setRounds] = useState<number>(0);
  const endRound = () => {
    if (currentRound + 1 < lifeEvents.length) {
      const nextRound: number = currentRound + 1;
      setRounds(nextRound);
      updateSavings(lifeEvents[nextRound].income)
    }
  };
  return [lifeEvents[currentRound], endRound] as const;
};
