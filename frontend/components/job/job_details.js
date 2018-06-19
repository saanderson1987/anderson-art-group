import React from 'react';
import ItemDetails from '../item_details';
import ItemDetail from '../item_detail';
import Job from '../../resources/job';
import JobOrderList from '../job_order/job_order_list';

const JobDetails = props => {
  return (
    <ItemDetails resource={props.resource} {...props}>
      <ItemDetail column='po_num' detailName='PO #'/>
      <JobOrderList parentId={props.itemId}/>
    </ItemDetails>
  );
};

export default JobDetails;

// class JobDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleExpansion = this.toggleExpansion.bind(this);
//     this.state = {expanded: false};
//   }
//
//   componentDidMount() {
//     if (this.props.jobId) this.props.getJobById(this.props.jobId);
//   }
//
//   toggleExpansion(e) {
//     const expanded = this.state.expanded ? false : true;
//     this.setState({expanded});
//   }
//
//   render() {
//     const job = this.props.job ? this.props.job : null;
//     if (job) return (
//       <div>
//         <div>PO #: {job.po_num}</div>
//         <JobOrderList jobId={this.props.jobId}/>
//       </div>
//     );
//   }
//
// }
//
// const mapStateToProps = (state, ownProps) => {
//   if (ownProps.jobId) return {
//     job: state.jobs[ownProps.jobId]
//   };
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     getJobById: (id) => dispatch(Job.getById(id)),
//   }
// }
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobDetails));
