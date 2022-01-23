import { AppBar, Box, Paper, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { COLOR } from '../constants'

export default () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: COLOR.blueDark, flexGrow: 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" component="div" sx={{
            flexGrow: 1, 
            color: 'white',
            fontFamily: 'Roboto Condensed, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}>
            MAKING ENDS MEET
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};