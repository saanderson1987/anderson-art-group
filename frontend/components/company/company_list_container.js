import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Tabs from '../tabs';
import Tab from '../tab';
import CompanyList from './company_list';
import Prospect from '../../resources/prospect_company';
import Client from '../../resources/client_company';

class CompanyListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='root-container'>
        <Tabs pathname={this.props.location.pathname}>
          <Tab to='/companies/clients'>Clients</Tab>
          <Tab to='/companies/prospects'>Prospects</Tab>
        </Tabs>
        <Switch>
          <Route exact path='/companies/clients' render={props => <CompanyList resource={Client} root={true} {...props}/>} />
          <Route exact path='/companies/prospects' render={props => <CompanyList resource={Prospect} root={true} {...props}/>} />
          <Redirect exact from="/companies" to="/companies/clients"/>
        </Switch>
      </div>
    );
  }

}

export default CompanyListContainer;

// <div id='company-tabs' className='tabs'>
//   <div className='tab'><NavLink to={clientsPath}>Clients</NavLink></div>
//   <div className='tab'><NavLink to={prospectsPatch}>Prospects</NavLink></div>
// </div>
