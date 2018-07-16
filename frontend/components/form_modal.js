import React from 'react'
import Modal from './ui/modal';
import Form from './form';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {parentId, resource, subset, route, name, itemDetails} = this.props;
    return (
      <Modal {...this.props}>
        <Form {...this.props} resource={resource} subset={subset}
          route={route} name={name} itemDetails={itemDetails}/>
      </Modal>
    );
  }
}

export default FormModal;
