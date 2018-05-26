import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Company from '../../resources/company';
import NavBar from '../nav_bar';
import CompanyListItem from './company_list_item';

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCompanies();
  }

  render() {
    const companies = this.props.companies;
    const getAllCompanies = this.props.getAllCompanies;
    const createNewCompany = this.props.createNewCompany;
    const newCompany = {
      status: 'client',
      notes: 'blah',
      name: 'TestCompany5'
    };

    return (
      <div>
        <ul>
          {companies.map(company =>
            <CompanyListItem company={company}/>
          )}
        </ul>
        <button onClick={function() {createNewCompany(newCompany);}}>Create new company</button>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    companies: Object.values(state.companies)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCompanies: () => dispatch(Company.all()),
    createNewCompany: (company) => dispatch(Company.create(company))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyList));
