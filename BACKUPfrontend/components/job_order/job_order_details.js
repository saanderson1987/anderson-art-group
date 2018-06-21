import React from 'react';
import ItemDetails from '../item_details';
import ItemDetail from '../item_detail';
import JobOrder from '../../resources/job_order';

const JobOrderDetails = props => (
  <ItemDetails resource={JobOrder} {...props}>
    <ItemDetail column='notes'/>
  </ItemDetails>
);

export default JobOrderDetails;

// class JobOrderDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleExpansion = this.toggleExpansion.bind(this);
//     this.state = {expanded: false};
//   }
//
//   componentDidMount() {
//     if (this.props.jobOrderId) this.props.getJobOrderById(this.props.jobOrderId);
//   }
//
//   toggleExpansion(e) {
//     const expanded = this.state.expanded ? false : true;
//     this.setState({expanded});
//   }
//
//   render() {
//     const jobOrder = this.props.jobOrder ? this.props.jobOrder : null;
//     if (jobOrder) return (
//       <div>
//         <div>Notes: {jobOrder.notes}</div>
//       </div>
//     );
//   }
//
// }
//
// const mapStateToProps = (state, ownProps) => {
//   if (ownProps.jobOrderId) return {
//     jobOrder: state.jobOrders[ownProps.jobOrderId]
//   };
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     getJobOrderById: (id) => dispatch(JobOrder.getById(id)),
//   }
// }
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobOrderDetails));
