import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper, Slider, Stack, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CategoryOptionView from './CategoryOptionCard';
import { COLOR } from '../constants'
import Budget from '../types/Budget';
import Category from '../types/Category';
import CategoryOption from '../types/CategoryOption';

import { ReactComponent as ChildcareIcon } from './icons/childcare.svg';
import { ReactComponent as EducationIcon } from './icons/education.svg';
import { ReactComponent as FoodIcon } from './icons/food.svg';
import { ReactComponent as HealthcareIcon } from './icons/healthcare.svg';
import { ReactComponent as HousingIcon } from './icons/housing.svg';
import { ReactComponent as TransportationIcon } from './icons/transportation.svg';
import { ReactComponent as UtilitiesIcon } from './icons/utilities.svg';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

const handleChange = (
  category: Category,
  value: number | number[],
  budget: Budget,
  setBudget: CallableFunction,
) => {
  const currentValue: number = budget[category.name];
  let newValue: number;
  if (typeof value === 'number') {
    newValue = value;
  } else {
    newValue = value[0];
  }
  const delta: number = currentValue - newValue;
  const newSavings: number = budget.savings + delta;
  if (newSavings >= 0) {
    const newBudget: Budget = new Budget(
      newSavings,
      budget.housing,
      budget.healthcare,
      budget.food,
      budget.education,
      budget.transportation,
      budget.utilities,
    );
    newBudget[category.name] = newValue;
    setBudget(newBudget);
  } else if (newSavings === -1 && delta === -2) {
    const newBudget: Budget = new Budget(
      newSavings + 1,
      budget.housing,
      budget.healthcare,
      budget.food,
      budget.education,
      budget.transportation,
      budget.utilities,
    );
    newBudget[category.name] = newValue - 1;
    setBudget(newBudget);
  }
};

type CategoryProps = {
  category: Category;
  amount: number;
  budget: Budget;
  setBudget: CallableFunction;
};

export default ({ category, amount, budget, setBudget}: CategoryProps) => {
  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  let color: string;
  if (amount === 1) {
    color = COLOR.red;
  } else if (amount === 2) {
    color = COLOR.yellow;
  } else {
    color = COLOR.blueDark;
  };
  let icon;
  if (category.name === 'childcare') {
    icon = <ChildcareIcon />;
  } else if (category.name === 'education') {
    icon = <EducationIcon />;
  } else if (category.name === 'food') {
    icon = <FoodIcon />;
  } else if (category.name === 'healthcare') {
    icon = <HealthcareIcon />;
  } else if (category.name === 'housing') {
    icon = <HousingIcon />;
  } else if (category.name === 'transportation') {
    icon = <TransportationIcon />;
  } else if (category.name === 'utilities') {
    icon = <UtilitiesIcon />;
  };
  let categoryOptionViews: JSX.Element[] = [];
  category.options.forEach((categoryOption: CategoryOption) => {
    categoryOptionViews.push((
      <Grid item xs={4}>
        <CategoryOptionView
          categoryOption={categoryOption}
        />
      </Grid>
    ));
  });
  return (
    <Accordion expanded={expand}>
      <AccordionSummary sx={{ paddingLeft: 0 }} expandIcon={<ExpandMoreIcon onClick={toggleAcordion} />}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={2}>
            <Box sx={{ textAlign: "center" }}>{icon}</Box>
          </Grid>
          <Grid item sx={{ paddingRight: "25px" }} xs={2}>
            <TextField disabled value={amount} inputProps={{style: { textAlign: 'center' } }} />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Box>
                <Typography variant="h6">{category.displayName}</Typography>
              </Box>
              <Box sx={{ padding: "0 10px 0 0" }}>
                <Slider
                  aria-label={category.displayName}
                  getAriaValueText={valuetext}
                  marks={marks}
                  max={3}
                  min={1}
                  onChange={(event, value) =>
                    handleChange(category, value, budget, setBudget)
                  }
                  value={amount}
                  step={1}
                  valueLabelDisplay="off"
                  sx={{
                    color: color,
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {categoryOptionViews}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
