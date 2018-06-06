import React from 'react';
import ListItem from '../list_item';
import JobOrderDetails from './job_order_details';

const JobOrderListItem = props => {
  const date= new Date(props.item.created_at).toDateString();
  return (
    <ListItem name={`Job order created on ${date}`}>
      <JobOrderDetails itemId={props.item.id}/>
    </ListItem>
  );
};

export default JobOrderListItem;

// class JobOrderListItem extends React.Component {
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
//         <JobOrderDetails jobOrderId={this.props.jobOrder.id}/>
//       : null;
//
//     return (
//       <div>
//         <li onClick={this.toggleExpansion}>
//           {caret}
//           Job Order created on [date]
//         </li>
//         {details}
//       </div>
//     );
//   }
//
// }
//
// export default JobOrderListItem;
