import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Page from './components/Page';
import Stocks from './scenes/stocks';

function AppRouter() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route exact path={routes.STOCKS} component={Stocks} />
          <Redirect to={routes.STOCKS} />
        </Switch>
      </Page>
    </Router>
  );
}

export default AppRouter;
