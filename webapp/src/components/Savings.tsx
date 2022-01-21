import { Grid, TextField } from '@mui/material';

type SavingsProps = {
  amount: number;
};

export default ({ amount }: SavingsProps) => {
  return (
    <Grid container direction="column">
      <Grid item xs={8}>
        <TextField disabled label="Remaining" value={amount} inputProps={{style: { textAlign: 'center' }}} />
      </Grid>
    </Grid>
  );
};
