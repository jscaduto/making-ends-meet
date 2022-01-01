import { useState } from 'react';
import { Grid, Slider, Typography } from '@mui/material';

import usePrevious from '../hooks/usePrevious';

const marks = [
  {
    value: 0,
    label: '0',
  },
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
  value: number | number[],
  previousValue: number = 0,
  savings: number,
  setValue: CallableFunction,
  updateSavings: CallableFunction,
) => {
  let newValue: number;
  if (typeof value === 'number') {
    newValue = value;
  } else {
    newValue = value[0];
  }
  const delta: number = previousValue - newValue;
  if (savings + delta >= 0) {
    setValue(newValue);
    updateSavings(delta);
  }
  else {
    setValue(previousValue);
  }
};

type CategoryProps = {
  name: string;
  savings: number;
  updateSavings: CallableFunction;
};

export default ({ name, savings, updateSavings }: CategoryProps) => {
  const [value, setValue] = useState<number>(0);
  const previousValue: number = usePrevious<number>(value);
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Slider
          aria-label={name}
          defaultValue={0}
          getAriaValueText={valuetext}
          marks={marks}
          max={3}
          min={0}
          onChange={(event, value) =>
            handleChange(value, previousValue, savings, setValue, updateSavings)
          }
          step={1}
          value={value}
          valueLabelDisplay="off"
        />
      </Grid>
    </Grid>
  );
};
