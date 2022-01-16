import { Button, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';

import BudgetView from './components/BudgetView';
import Header from './components/Header';
import Savings from './components/Savings';
import categories from './data/categories';
import lifeEvents from './data/lifeEvents';
import useRounds from './hooks/useRounds';
import Budget from './types/Budget';

import { COLOR } from './constants'


function App() {
  const initialSavings: number = 6;
  const [budget, setBudget] = useState<Budget>(new Budget(initialSavings));
  const [currentEvent, endRound] = useRounds(lifeEvents, budget, setBudget);
  return (
    <Grid container p={4} spacing={4} justifyContent="center" alignItems="flex-start" direction="row">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <Grid container p={1} spacing={1} justifyContent="center" alignItems="flex-start" direction="column">
            <Grid item>
              <Typography variant='h5'>Instructions:</Typography>
            </Grid>
            <Grid item>
              <Typography>Your monthly income has been converted into 12 credits that can be used to pay for your monthly bills.</Typography>
            </Grid>
            <Grid item>
              <Typography>You must use the budget below that provides for the needs of your family.</Typography>
            </Grid>
            <Grid item>
              <Typography>Make a decision in each category to determine how your family will live:</Typography>
            </Grid>
            <Grid item p={2}>
              <Typography sx={{color: COLOR.red, fontWeight: 'bold'}}>Difficult = 1 Credit</Typography>
            </Grid>
            <Grid item p={2}>
              <Typography sx={{color: COLOR.yellow, fontWeight: 'bold'}}>Limited = 2 Credits</Typography>
            </Grid>
            <Grid item p={2}>
              <Typography sx={{color: COLOR.blueDark, fontWeight: 'bold'}}>Convenient = 3 Credits</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
          <Grid container p={4} spacing={4} justifyContent="center" alignItems="flex-start" direction="row">
            <Grid item xs={12}>
              <BudgetView budget={budget} categories={categories} setBudget={setBudget} />
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{color: COLOR.red}}>* Be careful about where you place your credits, as there may be risks associated with the choices you make.</Typography>
            </Grid>
            <Grid item xs={5}>
              <Savings amount={budget.savings} />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={endRound} variant="outlined">End Round</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
