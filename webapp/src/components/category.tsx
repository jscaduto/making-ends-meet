import { useState } from 'react';
import { Grid, Slider, Typography } from '@mui/material';

import usePrevious from '../hooks/usePrevious';
import useSavings from '../hooks/useSavings';

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
  previousValue: number,
  updateSavings: CallableFunction,
) => {
  let newValue: number;
  if (typeof value === 'number') {
    newValue = value;
  } else {
    newValue = value[0];
  }
  return updateSavings(newValue - previousValue);
};

type CategoryProps = {
  name: string;
  updateSavings: CallableFunction;
};

export default ({ name, updateSavings }: CategoryProps) => {
  const [value, setValue] = useState(0);
  const previousValue = usePrevious(value);
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
            handleChange(value, previousValue, updateSavings)
          }
          step={1}
          valueLabelDisplay="off"
        />
      </Grid>
    </Grid>
  );
};
