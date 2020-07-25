import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Page from './components/Page';
import Stocks from './scenes/stocks';
import PageNotFound from './scenes/404';

function AppRouter() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route exact path={routes.STOCKS} component={Stocks} />
          <Route exact path={routes.PAGE_NOT_FOUND} component={PageNotFound} />
          <Redirect to={routes.PAGE_NOT_FOUND} />
        </Switch>
      </Page>
    </Router>
  );
}

export default AppRouter;
