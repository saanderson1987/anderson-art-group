import React from 'react';
import { connect } from 'react-redux';
import Company from '../resources/company';
import CompanyList from './CompanyList';

const mapStateToProps = state => {
  return {
    // companies: state.companies
    companies: Object.values(state.companies)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCompanies: () => dispatch(Company.all()),
    createNewCompany: (company) => dispatch(Company.create(company))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(middleman);
