import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import NotFound from './not_found';
import NavBar from './nav_bar';
import CompanyListContainer from './company/company_list_container';
import JobList from './job/job_list';
import JobOrderList from './job_order/job_order_list';

const App = () => (
  <div>
    <NavBar/>
    <Switch>
      <Route path='/companies' component={CompanyListContainer} />
      <Route path='/jobs' component={JobList} root={true}/>
      <Route path='/orders' component={JobOrderList} root={true}/>
      <Redirect exact from="/" to="/companies"/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default (App);

// <NavBar links={['Companies', 'Jobs', 'Orders', 'Inventory']}/>
