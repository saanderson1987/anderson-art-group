import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const isVisible = this.props.isVisible ? '' : 'hidden';
    return (
      <div>
        <div className='modal-overlay' onClick={(e) => this.props.toggle()}></div>
        <div className='modal-'>
          <div className='modal-contents'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
