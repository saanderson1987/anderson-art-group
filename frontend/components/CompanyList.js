import React from 'react';
import { connect } from 'react-redux';
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
    const createNewCompany = this.props.createNewCompany;
    const newCompany = {
      status: 'prospect',
      notes: 'blah',
      name: 'TestCompany5'
    }
    console.log(companies);
    return (
      <div>
      <ul>
        {companies.map(company =>
          <li>{company.name}</li>
        )}
      </ul>
      <button onClick={function() {createNewCompany(newCompany);}}>Click me</button>
      </div>
    );
  }

}

export default CompanyList;

// const mapStateToProps = state => {
//   return {
//     // companies: state.companies
//     companies: Object.values(state.companies)
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     getAllCompanies: () => dispatch(Company.all()),
//     createNewCompany: (company) => dispatch(Company.create(company))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
