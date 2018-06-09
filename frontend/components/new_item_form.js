import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NewItemDetail from './new_item_detail';

class NewItemForm extends React.Component {
  constructor(props){
    super(props);
    this.onItemDetailChange = this.onItemDetailChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {};
    props.columns.forEach(column => {
      this.state[column.columnName] = '';
    });
  }

  onItemDetailChange(columnName) {
    return e => this.setState({[columnName] : e.target.value});
  }

  onClickSave(event) {
    event.preventDefault();
    const record = {};
    this.props.columns.forEach(column => {
      record[column.columnName] = this.state[column.columnName];
    })
    console.log(this.props.create);
    this.props.create(record);
    this.props.toggle({isVisible: false});
  }

  render() {
    const itemDetails = this.props.columns.map(column => {
      return <NewItemDetail column={column} detailValue={this.state[column.columnName]} onValueChange={this.onItemDetailChange}/>;
    });
    return (
      <div>
        <h1>Create New</h1>
        {itemDetails}
        <div>
          <button onClick={(e) => this.props.toggle({isVisible: false})}>Cancel</button>
          <button onClick={this.onClickSave}>Save</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    create: (record) => dispatch(ownProps.resource.create(record))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewItemForm));
