import React from 'react';
import List from '../list';
import JobOrder from '../../resources/job_order';
import JobOrderListItem from './job_order_list_item';

const JobOrderList = props => (
  <List resource={JobOrder} columns={'created_at'} {...props}>
    <JobOrderListItem/>
  </List>
);

export default JobOrderList;

// class JobOrderList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     this.props.getJobOrders();
//   }
//
//   render() {
//     const jobOrders = this.props.jobOrders;
//     const createNewJobOrder = this.props.createNewJobOrder;
//     const newJobOrder = {
//       job_id: 1,
//       notes: 'new job order!'
//     };
//
//     return (
//       <div>
//         JobOrders:
//         <ul>
//           {jobOrders.map(jobOrder =>
//             <JobOrderListItem jobOrder={jobOrder}/>
//           )}
//         </ul>
//         <button onClick={function() {createNewJobOrder(newJobOrder);}}>Create new job order</button>
//
//       </div>
//     );
//   }
//
// }
//
// const mapStateToProps = state => {
//   return {
//     jobOrders: Object.values(state.jobOrders)
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     getJobOrders: () => dispatch(JobOrder.all()),
//     createNewJobOrder: (jobOrder) => dispatch(JobOrder.create(jobOrder))
//
//   }
// }
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobOrderList));
