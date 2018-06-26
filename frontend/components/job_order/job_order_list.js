import React from 'react';
import List from '../list';
import JobOrder from '../../resources/job_order';
import ListItem from '../list_item';
import ItemDetail from '../item_detail';
import NewItemModal from '../new_item_modal';
import get from 'lodash.get';

const JobOrderList = props => {
  const resource = props.resource ? props.resource : JobOrder;
  const query = props.parentId ? {job_id: props.parentId} : {};
  return (
    <List listName='Job Orders' query={query} resource={resource} columns={'created_at'} {...props}>
      <ListItem itemNameSource={{func: function(newProps) {
        const date = new Date(get(newProps, 'item.date_ordered')).toDateString();
        return `Job order ordered on ${date}`;
      }}}>
        <ItemDetail column='date_ordered' detailName='Date Ordered' type='date'/>
        <ItemDetail column='notes'/>
      </ListItem>
      <NewItemModal itemTypeName='Job Order' parent={{id: props.parentId, column: 'job_id'}}
        itemDetails={[
          {columnName: 'date_ordered', detailName: 'Date Ordered'},
          {columnName: 'notes'}
      ]}/>
    </List>
  );
};

export default JobOrderList;
