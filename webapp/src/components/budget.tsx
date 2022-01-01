import { Grid } from '@mui/material';

import Category from './category';

const categories: string[] = [
  'Housing',
  'Healthcare',
  'Food',
  'Education',
  'Transportation',
  'Utilities',
];

type BudgetProps = {
  savings: number;
  updateSavings: CallableFunction;
};

export default ({ savings, updateSavings }: BudgetProps) => {
  return (
    <Grid container spacing={2}>
      {categories.map((categoryName, index) => {
        return (
          <Grid item xs={8}>
            <Category name={categoryName} savings={savings} updateSavings={updateSavings} />
          </Grid>
        );
      })}
    </Grid>
  );
};
