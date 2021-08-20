import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import Layout from './layout/Layout';

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/details" component={Details} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Layout>
    </Router>
  );
}
