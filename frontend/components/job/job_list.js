import React from 'react';
import List from '../list';
import Job from '../../resources/job';
import ListItem from '../list_item';
import ItemDetail from '../item_detail';
import JobOrderList from '../job_order/job_order_list';
import NewItemModal from '../new_item_modal';

const JobList = props => {
  const resource = props.resource ? props.resource : Job;
  const query = props.parentId ? {company_id: props.parentId} : {};
  return (
    <List query={query} resource={resource} {...props}>
      <ListItem itemNameSource={{path: 'props.item.name'}}>
        <ItemDetail column='po_num' detailName='PO #'/>
        <JobOrderList resource={resource} route='job_orders'/>
      </ListItem>
      <NewItemModal itemTypeName='Job' parent={{id: props.parentId, column: 'company_id'}}
        itemDetails={[
          {columnName: 'name'},
          {columnName: 'po_num', detailName: 'PO #'}
      ]}/>
    </List>
  );
};


export default JobList;
