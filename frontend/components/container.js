import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import Company from '../resources/company';
import CompanyList from './company/company_list';

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
