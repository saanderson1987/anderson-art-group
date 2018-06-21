import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import NotFound from './not_found';
import NavBar from './nav_bar';
import CompanyListContainer from './company/company_list_container';

const App = () => (
  <div>
    <NavBar>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/orders">Orders</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
    </NavBar>
    <Switch>
      <Route path='/companies' component={CompanyListContainer} />
      <Redirect exact from="/" to="/companies"/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default (App);

// <NavBar links={['Companies', 'Jobs', 'Orders', 'Inventory']}/>
