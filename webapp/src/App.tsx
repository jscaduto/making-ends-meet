import React, { useState } from 'react';
import { Container } from '@mui/material';

import Budget from './components/budget';
import Savings from './components/savings';
import useSavings from './hooks/useSavings';

function App() {
  const [savings, updateSavings] = useSavings(12);
  return (
    <div className="App">
      <Container>
        <Savings amount={savings} />
        <Budget updateSavings={updateSavings} />
      </Container>
    </div>
  );
}

export default App;
