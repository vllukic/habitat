import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from './components/styles';
import Header from './components/header';
import { routes } from './components/routes';
import PropertiesMap from './components/properties/map';
import PropertiesList from './components/properties/list';
import Search from './components/properties/search';
import { ReactCreateContext } from './utils/app-context';
import initialState from './utils/initial-state';

function App() {
  return (
    <Page>
      <ReactCreateContext.Provider value={initialState}>
        <Header />
        <Switch>
          <Route path={routes.map} component={PropertiesMap} />
          <Route path={routes.search} component={Search} />
          <Route path={routes.propertiesList} component={PropertiesList} />
        </Switch>
      </ReactCreateContext.Provider>
    </Page>
  );
}

export default App;
