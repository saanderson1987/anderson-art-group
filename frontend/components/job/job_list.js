import React from 'react';
// import makeList from '../list';
import List from '../list';
import Job from '../../resources/job';
import JobListItem from './job_list_item';
import NewJobModal from './new_job_modal';

const JobList = props => {
  const resource = props.resource ? props.resource : Job;
  return (
    <List resource={resource} {...props}>
      <JobListItem resource={resource} subset={props.subset} route={props.route}/>
      <NewJobModal resource={resource} parentId={props.parentId} subset={props.subset} route={props.route}/>
    </List>
  );
};

export default JobList;

// export default makeList(Job, JobListItem);

// class JobList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <List itemName='job' {...this.props}>
//         <JobListItem/>
//       </List>
//     )
//   }
//
// }
//
// const mapStateToProps = state => {
//   return {
//     items: Object.values(state.jobs)
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     getAll: () => dispatch(Job.all()),
//     createNew: (job) => dispatch(Job.create(job))
//
//   }
// }
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobList));

///


// class JobList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     this.props.getJobs();
//   }
//
//   render() {
//     const jobs = this.props.jobs;
//     const createNewJob = this.props.createNewJob;
//     const newJob = {
//       name: 'TestJob5',
//       po_num: '123ABC',
//       company_id: 1
//     };
//
//     return (
//       <div>
//         Jobs:
//         <ul>
//           {jobs.map(job =>
//             <JobListItem job={job}/>
//           )}
//         </ul>
//         <button onClick={function() {createNewJob(newJob);}}>Create new job</button>
//
//       </div>
//     );
//   }
//
// }
//
// const mapStateToProps = state => {
//   return {
//     jobs: Object.values(state.jobs)
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     getJobs: () => dispatch(Job.all()),
//     createNewJob: (job) => dispatch(Job.create(job))
//
//   }
// }
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobList));
