import { Button, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';

import BudgetView from './components/BudgetPaper';
import EventModal from './components/EventModal';
import Header from './components/HeaderPaper';
import Instructions from './components/InstructionsPaper';
import Savings from './components/Savings';
import categories from './data/categories';
import lifeEvents from './data/lifeEvents';
import useRounds from './hooks/useRounds';
import Budget from './types/Budget';

import { COLOR } from './constants'


function App() {
  const initialSavings: number = 6;
  const [budget, setBudget] = useState<Budget>(new Budget(initialSavings));
  const [lifeEvent, endRound] = useRounds(lifeEvents, budget, setBudget);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClick = () => {
    endRound();
    setIsModalOpen(true);
  };

  return (
    <Grid container p={4} spacing={4} justifyContent="center" alignItems="flex-start" direction="row">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={4}>
        <Instructions />
      </Grid>
      <Grid item xs={8}>
        <Paper>
          <Grid container p={4} spacing={4} justifyContent="center" alignItems="flex-start" direction="row">
            <Grid item xs={12}>
              <BudgetView budget={budget} categories={categories} setBudget={setBudget} />
            </Grid>
            <Grid item xs={2}>
              <Savings amount={budget.savings} />
            </Grid>
            <Grid item xs={8}>
              <Typography sx={{color: COLOR.red}}>* Be careful about where you place your credits, as there may be risks associated with the choices you make.</Typography>
            </Grid>
            <Grid item xs={2}>
              <EventModal lifeEvent={lifeEvent} modalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
              <Button onClick={handleClick} variant="outlined">{"Next >"}</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
