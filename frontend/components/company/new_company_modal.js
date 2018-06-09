import React from 'react'
import Company from '../../resources/company';
import Modal from '../ui/modal';
import NewItemForm from '../new_item_form';

class NewCompanyModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
      {columName: 'notes'}
    ];

    return (
      <Modal {...this.props}>
        <NewItemForm {...this.props} resource={Company} columns={[
          {columnName: 'name'},
          {columnName: 'notes'}
        ]}/>
      </Modal>
    );
  }
}

export default NewCompanyModal;
