import { Grid } from '@mui/material';
import { useState } from 'react';

import Category from './category';

const categories = [
  'Housing',
  'Education',
  'Transportation',
  'Food',
  'Healthcare',
  'Savings',
];

type BudgetProps = {
  updateSavings: CallableFunction;
};

export default ({ updateSavings }: BudgetProps) => {
  return (
    <Grid container spacing={2}>
      {categories.map((categoryName, index) => {
        return (
          <Grid item xs={8}>
            <Category name={categoryName} updateSavings={updateSavings} />
          </Grid>
        );
      })}
    </Grid>
  );
};