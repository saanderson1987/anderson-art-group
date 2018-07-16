import React from 'react';
import Modal from './modal';

class DeleteWarning extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete() {
    this.props.toggle();
    this.props.delete();
  }

  render() {
    return (
      <Modal {...this.props}>
        <div className='warning'>
          <div className='warning-text'>Are you sure you want to delete {this.props.itemName}?</div>
          <div className='button-row'>
            <button className='button--delete' onClick={(e) => this.onClickDelete()}>Delete</button>
            <button onClick={(e) => this.props.toggle()}>Cancel</button>
          </div>
        </div>
      </Modal>
    );
  }

}

export default DeleteWarning;
