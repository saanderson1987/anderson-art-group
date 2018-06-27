import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import get from 'lodash.get';
import ItemDetails from './item_details';
import DeleteWarning from './ui/delete_warning';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.toggleDeleteWarning = this.toggleDeleteWarning.bind(this);
    this.state = {
      expanded: false,
      isDeleteWarningVisible: false
    };
  }

  toggleExpansion(e) {
    const expanded = this.state.expanded ? false : true;
    this.setState({expanded});
  }

  onClickDelete() {
    this.setState({isDeleteWarningVisible: true});
    // this.props.delete(this.props.item.id);
  }

  toggleDeleteWarning() {
    const isDeleteWarningVisible = this.state.isDeleteWarningVisible ? false : true;
    this.setState({isDeleteWarningVisible});
  }

  render() {
    const {resource, subset, route, children, itemNameSource, item} = this.props;
    // if (!itemNameSource.path) console.log(this.props.item);
    const itemName = itemNameSource.path ?
        get(this, itemNameSource.path)
      : itemNameSource.getName(this.props);
    const isFirst = this.props.isFirst ? 'list-item--first' : '';
    const isExpanded = this.state.expanded ? 'bold' : '';
    const caret = this.state.expanded ?
        <i className="fas fa-caret-down"></i>
      : <i className="fas fa-caret-right"></i>;
    const deleteButton = this.state.expanded ?
        <button className='button--small' onClick={this.onClickDelete}>Delete</button>
      : null;
    const itemDetails = this.state.expanded ?
        <ItemDetails itemId={item.id} resource={resource} subset={subset} route={route}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
        </ItemDetails>
      : null;
    const deleteWarning = this.state.isDeleteWarningVisible ?
        <DeleteWarning
          itemName={this.props.name}
          toggle={this.toggleDeleteWarning}
          delete={() => this.props.delete(this.props.item.id)}
        />
      : null;

    return (
      <div className={`list-item ${isFirst}`}>
        <div className='list-item-header'>
          <div className={`list-item-label ${isExpanded}`} onClick={this.toggleExpansion}>
            {caret}
            <span>{itemName}</span>
          </div>
          {deleteButton}
        </div>
        {itemDetails}
        {deleteWarning}
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {resource, subset, route} = ownProps;
  return {
    delete: (id) => dispatch(resource.delete(id, subset, route))
  }
};

export default withRouter(connect(null, mapDispatchToProps)(ListItem));
