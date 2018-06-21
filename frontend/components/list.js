import React from 'react';
import get from 'lodash.get';
import { capitalize } from '../../util/functions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewCompanyModal from './company/new_company_modal';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNewItemModal = this.toggleNewItemModal.bind(this);
    this.state = {
      location: props.location.pathname,
      isNewItemModalVisible: false
    };
  }

  componentDidMount() {
    this.props.getAll();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) this.props.getAll();
  }

  toggleNewItemModal() {
    const isNewItemModalVisible = this.state.isNewItemModalVisible ? false : true;
    this.setState({isNewItemModalVisible});
  }

  render() {
    const {resource, subset, route} = this.props;
    const listName = this.props.route ?
        capitalize(this.props.route)
      : capitalize(this.props.resource.name);
      // this.props.resource.name[0].toUpperCase() + this.props.resource.name.slice(1);
    const listNameElement = this.props.root ? null :
        <div className='list-name'>{listName}:</div>;
    let listItemElement;
    let newItemModalElement;
    React.Children.forEach(this.props.children, (child) => {
      const displayName = child.type.WrappedComponent ?
          child.type.WrappedComponent.displayName
        : child.type.displayName;
      if (displayName.slice(-8) === 'ListItem') listItemElement = child;
      if (displayName.slice(-5) === 'Modal') newItemModalElement = child;
    });
    const items = this.props.items;
    const itemList = items.map( (item, idx) => {
      const isFirst = idx === 0;
      return React.cloneElement(
        listItemElement,
        {resource, subset, route, item, isFirst, key: item.id}
      );
    });
    const newItemModal = this.state.isNewItemModalVisible ?
        React.cloneElement(newItemModalElement, {
          isVisible: this.state.isNewItemModalVisible,
          toggle: this.toggleNewItemModal,
          resource, subset, route,
        })
      : null;

    const isRoot = this.props.root ? 'list-items--root' : '';
    const buttonContainer = this.props.root ? 'root-list-new-button-container' : '';

    return (
      <div className={'list'}>
        {listNameElement}
        <div className={`list-items ${isRoot}`}>
          <div className={buttonContainer}>
            <button className='button--new' onClick={(e) => this.toggleNewItemModal()}>
              <i className="fas fa-plus-circle"></i><span>Create new</span>
            </button>
          </div>
          {itemList}
        </div>
        {newItemModal}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const items = ownProps.subset ?
      get(state[ownProps.resource.name], ownProps.subset, {})
    : state[ownProps.resource.name];
  return {
      items: Object.values(items)
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const columns = ownProps.columns ? ownProps.columns : 'name';
  const query = ownProps.query ? ownProps.query : {};
  const {subset, route} = ownProps;
  return {
    getAll: () => dispatch(ownProps.resource.getByQuery({columns, ...query}, subset, route))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
