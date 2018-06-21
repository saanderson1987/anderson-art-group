import React from 'react'
import Modal from './ui/modal';
import NewItemForm from './new_item_form';

class NewItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {parentId, resource, subset, route, itemTypeName, itemDetails} = this.props;
    return (
      <Modal {...this.props}>
        <NewItemForm {...this.props} resource={resource} subset={subset}
          route={route} itemTypeName={itemTypeName} itemDetails={itemDetails}/>
      </Modal>
    );
  }
}

export default NewItemModal;
