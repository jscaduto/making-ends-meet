import { Grid, Paper, Typography } from '@mui/material';

import { COLOR } from '../constants'

export default () => {
  return (
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
  );
};