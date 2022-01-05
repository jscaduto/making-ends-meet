import { Button, Container } from '@mui/material';
import { useState } from 'react';

import BudgetView from './components/BudgetView';
import Savings from './components/savings';
import useRounds from './hooks/useRounds';
import Budget from './types/Budget';
import Category from './types/Category';
import LifeEvent from './types/LifeEvent';

const categories: Category[] = [
  {name: 'housing', displayName: 'Housing'},
  {name: 'healthcare', displayName: 'Healthcare'},
  {name: 'food', displayName: 'Food'},
  {name: 'education', displayName: 'Education'},
  {name: 'transportation', displayName: 'Transportation'},
  {name: 'utilities', displayName: 'Utilities'},
];

const lifeEvents: LifeEvent[] = [
  {description: 'start', income: 12},
  {description: 'event 1', income: 11, scenario: (budget: Budget, income: number) => { return budget.healthcare >= 2 ? income : income - 2}},
  {description: 'event 2', income: 10},
  {description: 'event 3', income: 9},
  {description: 'event 4', income: 8},
]

function App() {
  const initialSavings: number = 12;
  const categoryNames: string[] = categories.map((category) => category.name);
  const [budget, setBudget] = useState<Budget>(new Budget(initialSavings));
  const [currentEvent, endRound] = useRounds(lifeEvents, budget, setBudget);
  return (
    <div className="App">
      <Container>
        <p>Event: {currentEvent.description}</p>
        <p>Income: {currentEvent.income}</p>
        <Savings amount={budget.savings} />
        <BudgetView budget={budget} categories={categories} setBudget={setBudget}/>
        <Button onClick={endRound} variant="outlined">End Round</Button>
      </Container>
    </div>
  );
}

export default App;
