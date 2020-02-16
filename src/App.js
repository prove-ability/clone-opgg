import React from 'react';
import { Route } from 'react-router-dom';
import RecordPage from './pages/RecordPage';

function App() {
  return (
    <>
      <Route component={RecordPage} path={['/RecordPage', '/']} exact />
    </>
  );
}

export default App;
