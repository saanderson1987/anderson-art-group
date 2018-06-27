import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetailValueChange = this.handleDetailValueChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.submitDetailUpdate = this.submitDetailUpdate.bind(this);
    this.state = {
      inEditMode: false,
      isDetailValueUpdating: false,
      detailValue: this.getDetailValue()
    };
  }

  componentDidUpdate(prevProps) {
    // if (this.props.detailValue !== prevProps.detailValue) {
    //   this.setState({detailValue: this.props.detailValue});
    //   this.setState({isDetailValueUpdating: false});
    // }
    if (this.props.detailValue !== prevProps.detailValue) {
      this.setState({detailValue: this.getDetailValue()});
      this.setState({isDetailValueUpdating: false});
    }
  }

  getDetailValue() {
    return this.props.type === 'date' ?
        moment(this.props.detailValue)
      : this.props.detailValue;
  }

  handleDetailValueChange(e) {
    this.setState({detailValue: e.target.value});
  }

  handleDateChange(date) {
    console.log(date);
    this.setState({detailValue: date});
  }

  toggleEditMode() {
    const inEditMode = this.state.inEditMode ? false : true;
    this.setState({inEditMode});
  }

  submitDetailUpdate(e) {
    this.toggleEditMode();
    if (this.props.detailValue !== this.state.detailValue) {
      this.setState({isDetailValueUpdating: true});
      this.props.updateDetail(this.props.column, this.state.detailValue);
    }
  }

  render() {
    const {type} = this.props;
    const column = this.props.column;
    const detailName = this.props.detailName ?
        this.props.detailName + ':'
      : column.charAt(0).toUpperCase() + column.slice(1) + ':';
    let detailValue = this.props.detailValue;
    let input = <input type="text" value={this.state.detailValue} onChange={this.handleDetailValueChange}/>;
    switch (type) {
      case 'date':
        detailValue = moment(this.props.detailValue).clone().locale(moment.locale()).format('L');
        input = <DatePicker
            selected={this.state.detailValue}
            onChange={this.handleDateChange}
        />;
    }
    const detailDisplay = this.state.inEditMode ?
        input
      : detailValue;
    const editIcons = this.state.inEditMode ?
        <div className='save-cancel-buttons'>
          <button className='button--small' onClick={this.submitDetailUpdate}>
            <i className="button-icon check-icon far fa-check-circle"></i>
            <span>Save</span>
          </button>
          <button className='button--small' onClick={this.toggleEditMode}>Cancel</button>
        </div>
      : <div className='save-cancel-buttons'>
          <button className='button--small' onClick={this.toggleEditMode}>
            <i className='button-icon pencil-icon fas fa-pencil-alt'></i>
            <span>Edit</span>
          </button>
        </div>
    const detailValueContainer = this.state.isDetailValueUpdating ?
        <div className='loader inline'/>
      : <div className='detail-value-container'>
          <div className='item-detail-value'>{detailDisplay}</div>
          {editIcons}
        </div>;

    return (
      <div className='item-detail'>
        <div className='item-detail-name'>{detailName}</div>
        {detailValueContainer}
      </div>
    );
  }
}

export default ItemDetail;
