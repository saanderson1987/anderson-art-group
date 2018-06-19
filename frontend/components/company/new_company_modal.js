import React from 'react'
import Company from '../../resources/company';
import Modal from '../ui/modal';
import NewItemForm from '../new_item_form';

class NewCompanyModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const resource = this.props.resource ? this.props.resource : Company;
    return (
      <Modal {...this.props}>
        <NewItemForm {...this.props} resource={resource} itemTypeName='Company' itemDetails={[
          {columnName: 'name'},
          {columnName: 'status', type: 'radio', values: [{valueName: 'prospect'}, {valueName: 'client'}]},
          {columnName: 'notes'}
        ]}/>
      </Modal>
    );
  }
}

export default NewCompanyModal;
