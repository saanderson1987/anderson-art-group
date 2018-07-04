import React from 'react';
import List from '../list';
import ListItem from '../list_item';
import ItemDetail from '../item_detail';
import NewItemModal from '../new_item_modal';
import get from 'lodash.get';
import {getDateString} from '../../../util/functions';

const InstallationList = props => {
  const resource = props.resource;
  const query = props.parentId ? {job_order_id: props.parentId} : {};
  return (
    <List listName='Installations' query={query} resource={resource} columns={'installation_date'} {...props}>
      <ListItem itemNameSource={{getName: function(newProps) {
        let date = get(newProps, 'item.installation_date');
        date = getDateString(date);
        return `Installation set for ${date}`;
      }}}>
        <ItemDetail column='installation_date' detailName='Install Date' type='date'/>
        <ItemDetail column='completed'/>
      </ListItem>
      <NewItemModal itemTypeName='Installation' parent={{id: props.parentId, column: 'job_order_id'}}
        itemDetails={[
          {columnName: 'installation_date', detailName: 'Install Date', type: 'date'}
      ]}/>
    </List>
  );
};

export default InstallationList;
