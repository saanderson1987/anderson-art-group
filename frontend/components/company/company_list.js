import React from 'react';
import { withRouter } from 'react-router-dom';
import List from '../list';
import Company from '../../resources/company';
import ListItem from '../list_item';
import ItemDetail from '../item_detail';
import JobList from '../job/job_list';
import NewItemModal from '../new_item_modal';

const CompanyList = props => {
  const resource = props.resource ? props.resource : Company;
  const {subset, route} = props;

  return (
    <List resource={resource} {...props}>
      <ListItem itemNameSource={{path: 'props.item.name'}}>
        <ItemDetail column='notes'/>
        <JobList resource={resource} route='jobs'/>
      </ListItem>
      <NewItemModal itemTypeName='Company' itemDetails={[
        {columnName: 'name'},
        {columnName: 'status', type: 'radio', values: [{valueName: 'prospect'}, {valueName: 'client'}]},
        {columnName: 'notes'}
      ]}/>
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
