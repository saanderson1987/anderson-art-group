import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Job from '../../resources/job';
import JobListItem from './job_list_item';


class JobList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    const jobs = this.props.jobs;
    const createNewJob = this.props.createNewJob;
    const newJob = {
      name: 'TestJob5',
      po_num: '123ABC',
      company_id: 1
    };

    return (
      <div>
        Jobs:
        <ul>
          {jobs.map(job =>
            <JobListItem job={job}/>
          )}
        </ul>
        <button onClick={function() {createNewJob(newJob);}}>Create new job</button>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    jobs: Object.values(state.jobs)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(Job.all()),
    createNewJob: (job) => dispatch(Job.create(job))

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobList));
