import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNewItemModal = this.toggleNewItemModal.bind(this);
    this.state = {
      isNewItemModalVisible: false
    };
  }

  componentDidMount() {
    this.props.getAll();
  }

  toggleNewItemModal() {
    const isNewItemModalVisible = this.state.isNewItemModalVisible ? false : true;
    this.setState({isNewItemModalVisible});
  }

  render() {
    const {resource, items, value, onChange, newItemModalElement} = this.props;
    const newItemModal = this.state.isNewItemModalVisible ?
        newItemModalElement({
          isVisible: this.state.isNewItemModalVisible,
          toggle: this.toggleNewItemModal,
          resource
        })
        // React.cloneElement(newItemModalElement, {
        //   isVisible: this.state.isNewItemModalVisible,
        //   toggle: this.toggleNewItemModal,
        //   resource
        // })
      : null;

    return (
      <div>
        <select value={value} onChange={onChange}>
          <option disabled value=''> -- select a vendor -- </option>
          {items.map(item => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
        <div>
          <button className='button--new' onClick={(e) => this.toggleNewItemModal()}>
            <i className="fas fa-plus-circle"></i><span>Create new vendor</span>
          </button>
        </div>
        {newItemModal}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const items = state[ownProps.resource.name];
  return {
      items: Object.values(items)
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const columns = 'name';
  return {
    getAll: () => dispatch(ownProps.resource.getByQuery({columns}))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dropdown));
