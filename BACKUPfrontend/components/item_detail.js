import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetailValueChange = this.handleDetailValueChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.submitDetailUpdate = this.submitDetailUpdate.bind(this);
    this.state = {
      inEditMode: false,
      isDetailValueUpdating: false,
      detailValue: props.detailValue
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.detailValue !== prevProps.detailValue) {
      this.setState({detailValue: this.props.detailValue});
      this.setState({isDetailValueUpdating: false});
    }
  }

  handleDetailValueChange(e) {
    this.setState({detailValue: e.target.value});
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
    const column = this.props.column;
    const detailName = this.props.detailName ?
        this.props.detailName + ':'
      : column.charAt(0).toUpperCase() + column.slice(1) + ':';
    const detailValue = this.state.inEditMode ?
        <input type="text" value={this.state.detailValue} onChange={this.handleDetailValueChange}/>
      : this.props.detailValue
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
          <div className='item-detail-value'>{detailValue}</div>
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
