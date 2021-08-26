import React, { useEffect, useState } from 'react';
import DownCounter from './components/Counter/DownCounter';
import UpCounter from './components/Counter/UpCounter';

function App() {
  return (
    <React.Fragment>
      <UpCounter />
      <DownCounter />
    </React.Fragment>
  );
}

export default App;
