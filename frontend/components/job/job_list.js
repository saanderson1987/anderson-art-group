import React from 'react';
// import makeList from '../list';
import List from '../list';
import Job from '../../resources/job';
import JobListItem from './job_list_item';

const JobList = props => (
  <List resource={Job} {...props}>
    <JobListItem/>
  </List>
);

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
