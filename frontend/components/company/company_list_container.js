import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../nav_bar';
import CompanyList from './company_list';

class CompanyListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar>
          <NavLink to='companies/clients'>Clients</NavLink>
          <NavLink to='companies/prospects'>Prospects</NavLink>
        </NavBar>
        <CompanyList/>
      </div>
    );
  }

}

export default CompanyListContainer;
