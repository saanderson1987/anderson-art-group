import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class NewItemDetail extends React.Component {
  constructor(props){
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.props.onValueChange(this.props.itemDetail.columnName, date);
  }

  render() {
    let {detailValue} = this.props;
    const columnName = this.props.itemDetail.columnName;
    const detailName = this.props.itemDetail.detailName ?
        this.props.itemDetail.detailName + ':'
      : columnName.charAt(0).toUpperCase() + columnName.slice(1) + ':';

    let input = <input type="text" value={this.props.detailValue} onChange={e => this.props.onValueChange(columnName, e.target.value)}/>;
    switch (this.props.itemDetail.type) {
      case 'radio':
        input = this.props.itemDetail.values.map(value => {
          const displayName = value.displayName ?
              this.props.displayName
            : value.valueName.charAt(0).toUpperCase() + value.valueName.slice(1);
          return (
            <div className='radio-buttons-row' key={value.valueName}>
              <input
                type="radio"
                className='radio-button'
                value={value.valueName}
                checked={this.props.detailValue === value.valueName}
                onChange={this.props.onValueChange(columnName)}
              />
              <div className='radio-button-display-name'>{displayName}</div>
            </div>
          );
        });
        break;
      case 'date':
        detailValue = detailValue ? moment(detailValue) : moment();
        input = <DatePicker
            selected={moment(detailValue)}
            onChange={this.onDateChange}
            popperPlacement='bottom'
        />;
    }

    return (
      <div className='form-item-detail'>
        <div className='item-detail-name'>{detailName}</div>
        <div className='item-detail-value'>{input}</div>
      </div>
    );
  }
}

export default NewItemDetail;
