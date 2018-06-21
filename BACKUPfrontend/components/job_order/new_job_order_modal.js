import React from 'react'
import JobOrder from '../../resources/job_order';
import Modal from '../ui/modal';
import NewItemForm from '../new_item_form';

class NewJobOrderModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Modal {...this.props}>
        <NewItemForm {...this.props} resource={Company} itemTypeName='Company' itemDetails={[
          {columnName: 'name'},
          {columnName: 'notes'}
        ]}/>
      </Modal>
    );
  }
}

export default NewJobOrderModal;
