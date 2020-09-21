import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './context/Auth';
import PrivateRoute from './helpers/PrivateRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch> 
          <PrivateRoute exact path="/" component={HomePage}/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/join" component={JoinPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
