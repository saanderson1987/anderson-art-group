import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Tabs from '../tabs';
import Tab from '../tab';
import CompanyList from './company_list';

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
          <Route exact path='/companies/clients' render={props => <CompanyList query={{status: "client"}} root={true} {...props}/>} />
          <Route exact path='/companies/prospects' render={props => <CompanyList query={{status: "prospect"}} root={true} {...props}/>} />
          <Redirect exact from="/companies" to="/companies/prospects"/>
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
