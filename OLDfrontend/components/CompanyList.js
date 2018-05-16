import React from 'react';
import { connect } from 'react-redux';
// import companyActions from '../actions/company_actions.js';
import Company from '../resources/company';

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
    console.log(companies);
    return (
      <div>
      <ul>
        {companies.map(company =>
          <li>{company.name}</li>
        )}
      </ul>
      <button onClick={function() {getAllCompanies();}}>Click me</button>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
    companies: state.companies
    // companies: Object.values(state.companies);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getAllCompanies: () => dispatch(companyActions.all())
    getAllCompanies: () => dispatch(Company.all())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
