import { Grid } from '@mui/material';

import Budget from '../types/Budget';
import Category from '../types/Category';
import CategoryView from './CategoryView';

type BudgetViewProps = {
  budget: Budget;
  categories: Category[];
  setBudget: CallableFunction;
};

export default ({ budget, categories, setBudget }: BudgetViewProps) => {
  const categoryViews: JSX.Element[] = [];
  categories.forEach((category: Category) => {
    categoryViews.push((
      <Grid item xs={12}>
        <CategoryView
          category={category}
          amount={budget[category.name]}
          budget={budget}
          setBudget={setBudget}
        />
      </Grid>
    ));
  });
  return (
    <Grid container spacing={2}>
      {categoryViews}
    </Grid>
  );
};
