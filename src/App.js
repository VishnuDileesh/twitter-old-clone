import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/join">
          <JoinPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
