import React from 'react';
import { withRouter } from 'react-router-dom';
import List from '../list';
import Company from '../../resources/company';
import ListItem from '../list_item';
import ItemDetail from '../item_detail';
import JobList from '../job/job_list';
import NewItemModal from '../new_item_modal';

const CompanyList = props => {
  const resource = props.resource ? props.resource : Company;
  const {route} = props;

  return (
    <List resource={resource} {...props}>
      <ListItem itemNameSource={{path: 'props.item.name'}}>
        <ItemDetail column='notes'/>
        <JobList resource={resource} route='jobs'/>
      </ListItem>
      <NewItemModal itemTypeName='Company' itemDetails={[
        {columnName: 'name'},
        {columnName: 'status', type: 'radio', values: [{valueName: 'prospect'}, {valueName: 'client'}]},
        {columnName: 'notes'}
      ]}/>
    </List>
  );
};

export default withRouter(CompanyList);
