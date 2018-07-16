import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NewItemDetail from './new_item_detail';
import moment from 'moment';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.onItemDetailChange = this.onItemDetailChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {};
    props.itemDetails.forEach(itemDetail => {
      if (itemDetail.type === 'checkbox') {
        this.state[itemDetail.columnName] = false;
      } else if (itemDetail.type === 'date'){
        this.state[itemDetail.columnName] = moment();
      } else {
        this.state[itemDetail.columnName] = '';
      }
    });
  }

  onItemDetailChange(columnName, value) {
    this.setState({[columnName] : value});
  }

  onClickSave(event) {
    const {toggle} = this.props;
    event.preventDefault();
    const record = {};
    this.props.itemDetails.forEach(itemDetail => {
      if (this.state[itemDetail.columnName]) {
        record[itemDetail.columnName] = this.state[itemDetail.columnName];
      }
    })
    if (this.props.parent) record[this.props.parent.column] = this.props.parent.id;
    this.props.submit(record);
    if (toggle) toggle();
  }

  render() {
    const itemDetails = this.props.itemDetails.map(itemDetail => {
      return (
        <NewItemDetail
          itemDetail={itemDetail}
          detailValue={this.state[itemDetail.columnName]}
          onValueChange={this.onItemDetailChange}
          key={itemDetail.valueName}
        />
      );
    });

    return (
      <div className='form'>
        <div className='form-header'>{this.props.name}</div>
        <div className='form-body'>
          {itemDetails}
          <div className='button-row'>
            <button onClick={(e) => this.props.toggle({isVisible: false})}>Cancel</button>
            <button className='button--save' onClick={this.onClickSave}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // const {subset, route} = ownProps;
  return {
    submit: (data) => dispatch(ownProps.submit(data))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Form));
