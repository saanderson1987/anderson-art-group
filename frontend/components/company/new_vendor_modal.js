import React from 'react';
import NewItemModal from '../new_item_modal';

const NewVendorModal = (props) => {
  const {isVisible, toggle, resource, subset, route} = props;
  return (
    <NewItemModal
      itemTypeName='Vendor'
      isVisible={isVisible}
      toggle={toggle}
      resource={resource}
      subset={subset}
      route={route}
      itemDetails={[
        {columnName: 'name'},
        {columnName: 'notes'}
    ]}/>
  );
}

export default NewVendorModal;
