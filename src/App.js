import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return(
    <>
      <Route exact path='/' render={() => {}} />
      <Route path='login' component={Login} />
    </>
  );
}
export default App;
