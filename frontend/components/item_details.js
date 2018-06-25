import React from 'react';
import get from 'lodash.get';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
    this.state = {expanded: false};
  }

  componentDidMount() {
    if (this.props.itemId) this.props.getItemById(this.props.itemId);
  }

  toggleExpansion(e) {
    const expanded = this.state.expanded ? false : true;
    this.setState({expanded});
  }

  updateDetail(column, value) {
    const record = this.props.item;
    record[column] = value;
    this.props.update(record);
  }

  render() {
    let {subset} = this.props;
    if (!this.props.item) return null;
    const children = React.Children.map(this.props.children, child => {
      const {displayName} = child.type;
      if (displayName.slice(-10) === 'ItemDetail') {
        child = React.cloneElement(child, {
          detailValue: this.props.item[child.props.column],
          updateDetail: this.updateDetail
        });
      } else if (displayName.slice(-4) === 'List') {
        subset = subset ? subset : [];
        subset = [...subset, this.props.itemId, child.props.route];
        child = React.cloneElement(child, {
          parentId: this.props.itemId,
          // query: {company_id: this.props.itemId},
          subset
        });
      }
      return child;
    });

    return (
      <div className='item-details'>
        {children}
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const {subset, resource, itemId} = ownProps;
  const item = subset ?
      get(state[resource.name], [...subset, itemId], {})
    : get(state[resource.name], [itemId], {});
  return {item};
  // if (ownProps.itemId) return {
  //   item: state[ownProps.resource.name][ownProps.itemId]
  // };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {resource, subset, route} = ownProps;
  return {
    getItemById: (id) => dispatch(resource.getById(id, subset, route)),
    update: (record) => dispatch(resource.update(record, subset, route))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetails));
