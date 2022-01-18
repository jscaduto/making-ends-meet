import { Grid, TextField } from '@mui/material';

type SavingsProps = {
  amount: number;
};

export default ({ amount }: SavingsProps) => {
  return (
    <Grid container direction="column">
      <Grid item xs={8}>
        <TextField disabled fullWidth label="Remaining" value={amount} id="fullWidth"/>
      </Grid>
    </Grid>
  );
};
