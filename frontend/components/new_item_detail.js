import React from 'react';

class NewItemDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const columnName = this.props.column.columnName;
    const detailName = this.props.column.detailName ?
        this.props.detailName + ':'
      : columnName.charAt(0).toUpperCase() + columnName.slice(1) + ':';

    return (
      <div className='item-detail'>
        <div className='item-detail-name'>{detailName}</div>
        <input type="text" value={this.props.detailValue} onChange={this.props.onValueChange(columnName)}/>
      </div>
    );
  }
}

export default NewItemDetail;
