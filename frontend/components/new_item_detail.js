import React from 'react';

class NewItemDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const columnName = this.props.itemDetail.columnName;
    const detailName = this.props.itemDetail.detailName ?
        this.props.detailName + ':'
      : columnName.charAt(0).toUpperCase() + columnName.slice(1) + ':';

    let input = <input type="text" value={this.props.detailValue} onChange={this.props.onValueChange(columnName)}/>;
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
    }

    return (
      <div className='form-item-detail'>
        <div className='item-detail-name'>{detailName}</div>
        {input}
      </div>
    );
  }
}

export default NewItemDetail;
