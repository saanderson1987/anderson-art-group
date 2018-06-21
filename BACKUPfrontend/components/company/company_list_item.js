import React from 'react';
import ListItem from '../list_item';
import CompanyDetails from './company_details';

const CompanyListItem = props => (
  <ListItem name={props.item.name} {...props}>
    <CompanyDetails itemId={props.item.id} resource={props.resource}/>
  </ListItem>
);

export default CompanyListItem;

// class CompanyListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleExpansion = this.toggleExpansion.bind(this);
//     this.state = {expanded: false};
//   }
//
//   toggleExpansion(e) {
//     const expanded = this.state.expanded ? false : true;
//     this.setState({expanded});
//   }
//
//   render() {
//     const caret = this.state.expanded ?
//         <i class="fas fa-caret-down"></i>
//       : <i class="fas fa-caret-right"></i>;
//     const details = this.state.expanded ?
//         <CompanyDetails companyId={this.props.company.id}/>
//       : null;
//
//     return (
//       <div>
//         <li onClick={this.toggleExpansion}>
//           {caret}
//           {this.props.company.name}
//         </li>
//         {details}
//       </div>
//     );
//   }
//
// }
//
// export default CompanyListItem;
