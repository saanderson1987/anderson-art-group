import React from 'react'
import Company from '../../resources/company';
import Modal from '../ui/modal';
import NewItemForm from '../new_item_form';

class NewCompanyModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Modal {...this.props}>
        <NewItemForm {...this.props} resource={Company} itemTypeName='Company' itemDetails={[
          {columnName: 'name'},
          {columnName: 'status', type: 'radio', values: [{valueName: 'prospect'}, {valueName: 'client'}]},
          {columnName: 'notes'}
        ]}/>
      </Modal>
    );
  }
}

export default NewCompanyModal;
