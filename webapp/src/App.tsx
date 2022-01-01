import { Button, Container } from '@mui/material';

import Budget from './components/budget';
import Savings from './components/savings';
import useRounds from './hooks/useRounds';
import useSavings from './hooks/useSavings';
import LifeEvent from './types/LifeEvent';

const lifeEvents: LifeEvent[] = [
  {description: 'start', income: 12},
  {description: 'event 1', income: 11},
  {description: 'event 2', income: 10},
  {description: 'event 3', income: 9},
  {description: 'event 4', income: 8},
]

function App() {
  const [savings, updateSavings] = useSavings(12);
  const [currentEvent, endRound] = useRounds(lifeEvents, updateSavings);
  return (
    <div className="App">
      <Container>
        <p>Event: {currentEvent.description}</p>
        <p>Income: {currentEvent.income}</p>
        <Savings amount={savings} />
        <Budget savings={savings} updateSavings={updateSavings} />
        <Button onClick={endRound} variant="outlined">End Round</Button>
      </Container>
    </div>
  );
}

export default App;
