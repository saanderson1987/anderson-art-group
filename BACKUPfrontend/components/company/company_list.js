import React from 'react';
import { withRouter } from 'react-router-dom';
import List from '../list';
import Company from '../../resources/company';
import CompanyListItem from './company_list_item';
import NewCompanyModal from './new_company_modal';

const CompanyList = props => {
  const resource = props.resource ? props.resource : Company;
  return (
    <List resource={resource} {...props}>
      <CompanyListItem resource={resource}/>
      <NewCompanyModal />
    </List>
  );
};

export default withRouter(CompanyList);

// class CompanyList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     this.props.getAllCompanies();
//   }
//
//   render() {
//     const companies = this.props.companies;
//     const getAllCompanies = this.props.getAllCompanies;
//     const createNewCompany = this.props.createNewCompany;
//     const newCompany = {
//       status: 'client',
//       notes: 'blah',
//       name: 'TestCompany5'
//     };
//
//     return (
//       <div>
//         <ul>
//           {companies.map(company =>
//             <CompanyListItem company={company}/>
//           )}
//         </ul>
//         <button onClick={function() {createNewCompany(newCompany);}}>Create new company</button>
//       </div>
//     );
//   }
//
// }
//
// const mapStateToProps = state => {
//   return {
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
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyList));
