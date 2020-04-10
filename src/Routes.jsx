import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './layout/Layout.jsx';
import DLetter from './components/DLetter.jsx';
import ELetter from './components/ELetter.jsx';

const Routes = () => (
   <Layout>
      <Switch>
         <Route exact path="/">
            <Redirect to="/d" />
         </Route>
         <Route path="/d" exact component={DLetter} />
         <Route path="/e" exact component={ELetter} />
      </Switch>
   </Layout>

)

export default Routes;