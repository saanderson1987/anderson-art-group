import React from 'react';
import ItemDetails from '../item_details';
import ItemDetail from '../item_detail';
import JobList from '../job/job_list';

const CompanyDetails = props => {
  return (
    <ItemDetails resource={props.resource} {...props}>
      <ItemDetail column='notes'/>
      <JobList query={{company_id: props.itemId}} parentId={props.itemId} subset={[props.itemId, 'jobs']} route='jobs' resource={props.resource}/>
    </ItemDetails>
  );
};
// query={{company_id: props.itemId}}
export default CompanyDetails;
