import React from 'react';
import get from 'lodash.get';
import {getDateString} from '../../../util/functions';
import List from '../list';
import VendorOrder from '../../resources/job_order';
import ListItem from '../list_item';
import ItemDetail from '../item_detail';
import NewItemModal from '../new_item_modal';
import VendorCompanyResource from '../../resources/vendor_company';

const VendorOrderList = props => {
  const resource = props.resource ? props.resource : VendorOrder;
  const query = props.parentId ? {job_order_id: props.parentId} : {};
  return (
    <List listName='Vendor Orders' query={query} resource={resource} columns={'name,date_ordered'} {...props}>
      <ListItem itemNameSource={{getName: function(newProps) {
        const vendorName = get(newProps, 'item.name');
        let date = get(newProps, 'item.date_ordered');
        if (date) {
          date = getDateString(date);
          return `${vendorName} ordered on ${date}`;
        } else {
          return `${vendorName} ordered`;
        }
      }}}>
        <ItemDetail column='po_num' detailName='PO Number'/>
        <ItemDetail column='date_ordered' detailName='Date Ordered' type='date'/>
        <ItemDetail column='number_of_pieces' detailName='Number of Pieces'/>
        <ItemDetail column='price'/>
        <ItemDetail column='notes'/>
      </ListItem>
      <NewItemModal itemTypeName='Vendor Order' parent={{id: props.parentId, column: 'job_order_id'}}
        itemDetails={[
          {columnName: 'vendor_id', detailName: 'Vendor Name', type: 'dropdown', resource: VendorCompanyResource},
          {columnName: 'po_num', detailName: 'PO Number'},
          {columnName: 'date_ordered', detailName: 'Date Ordered', type: 'date'},
          {columnName: 'number_of_pieces', detailName: 'Number of Pieces'},
          {columnName: 'price'},
          {columnName: 'notes'}
      ]}/>
    </List>
  );
};

// <ItemDetail column='name' detailName='Vendor Name'/>

export default VendorOrderList;
