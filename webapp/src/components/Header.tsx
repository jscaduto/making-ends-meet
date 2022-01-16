import { Paper, Typography } from '@mui/material';

import { COLOR } from '../constants'

export default () => {
  return (
    <Paper
      sx={{ backgroundColor: COLOR.blueDark }}
    >
      <Typography
        variant='h1'
        sx={{ 
          color: 'white',
          fontFamily: 'Roboto Condensed, sans-serif',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >MAKING ENDS MEET</Typography>
    </Paper>
  );
};