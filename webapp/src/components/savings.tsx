import { Grid, Typography } from '@mui/material';

type SavingsProps = {
  amount: number;
};

export default ({ amount }: SavingsProps) => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography>Savings:</Typography>
      </Grid>
      <Grid item xs={8}>
        {amount}
      </Grid>
    </Grid>
  );
};
