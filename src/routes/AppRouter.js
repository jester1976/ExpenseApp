import React from "react";

import {  Switch, Router, Route } from "react-router-dom";
import "../styles/styles.scss"

import AddExpensePage from '../components/AddExpensePage'
import DashBoard from '../components/DashBoard'
import Edit from "../components/Edit";

import NotFoundPage from '../components/NotFoundPage.js';
import LoginPage from '../components/LoginPage';
//import this to get access to history api anywhere
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();
//instaed of using browser route3r with history built in 
//we pass in our custom history
//now we have the advantage to use history in other files

const AppRouter = () => (
  <Router history={history}>
    {/* if more than on route must wrap with a div */}
    <div>
    
      {/* switch allows us to say if a route has no path match to print the
      component */}
      <Switch>
        <PublicRoute exact={true} path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashBoard} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
    

 









export default AppRouter;