import React from 'react';
import ListItem from '../list_item';
import JobDetails from './job_details';

const JobListItem = props => (
  <ListItem name={props.item.name} {...props}>
    <JobDetails itemId={props.item.id}/>
  </ListItem>
);

export default JobListItem;

// class JobListItem extends React.Component {
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
//         <JobDetails jobId={this.props.job.id}/>
//       : null;
//
//     console.log(this.props);
//     return (
//       <div>
//         <li onClick={this.toggleExpansion}>
//           {caret}
//           {this.props.job.name}
//         </li>
//         {details}
//       </div>
//     );
//   }
//
// }
//
// export default JobListItem;
