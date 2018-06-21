import React from 'react'
import Job from '../../resources/job';
import Modal from '../ui/modal';
import NewItemForm from '../new_item_form';

class NewJobModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const resource = this.props.resource ? this.props.resource : Job;
    const {parentId, subset, route} = this.props;
    return (
      <Modal {...this.props}>
        <NewItemForm {...this.props} parent={{id: parentId, column: 'company_id'}}
          resource={resource} subset={subset} route={route} itemTypeName='Job'
          itemDetails={[
            {columnName: 'name'},
            {columnName: 'po_num', detailName: 'PO #'}
        ]}/>
      </Modal>
    );
  }
}

export default NewJobModal;
