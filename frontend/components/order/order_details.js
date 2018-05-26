import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Job from '../../resources/job';
import JobList from '../job/job_list';

class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.state = {expanded: false};
  }

  componentDidMount() {
    if (this.props.jobId) this.props.getJobById(this.props.jobId);
  }

  toggleExpansion(e) {
    const expanded = this.state.expanded ? false : true;
    this.setState({expanded});
  }

  render() {
    const job = this.props.job ? this.props.job : null;
    if (job) return (
      <div>
        <div>PO #: {job.po_num}</div>
        <OrderList jobId={this.props.jobId}/>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.jobId) return {
    job: state.jobs[ownProps.jobId]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getJobById: (id) => dispatch(Job.getById(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobDetails));
