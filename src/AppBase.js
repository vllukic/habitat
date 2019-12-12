import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './components/routes';
import App from './App';

const AppBase = () => (
  <Router>
    <Switch>
      <Route path={routes.home} component={App} />
    </Switch>
  </Router>
);

export default AppBase;
