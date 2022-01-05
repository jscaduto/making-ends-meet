import { useState } from 'react';

import Budget from '../types/Budget';
import LifeEvent from '../types/LifeEvent';

export default (
  lifeEvents: LifeEvent[],
  budget: Budget, setBudget: CallableFunction,
) => {
  const [currentRound, setRound] = useState<number>(0);
  const endRound = () => {
    const nextRound: number = currentRound + 1;
    if (nextRound < lifeEvents.length) {
      const lifeEvent: LifeEvent = lifeEvents[nextRound];
      if (lifeEvent?.scenario) {
        budget.savings += lifeEvent.scenario(budget, lifeEvent.income);
      } else {
        budget.savings += lifeEvents[nextRound].income;
      };
      setRound(nextRound);
      setBudget(budget);
      console.log({budget});
    }
  };
  return [lifeEvents[currentRound], endRound] as const;
};
