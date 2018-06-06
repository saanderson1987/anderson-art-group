import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetailValueChange = this.handleDetailValueChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.state = {
      inEditMode: false,
      detailValue: props.detailValue
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.detailValue !== prevProps.detailValue) {
      this.setState({detailValue: this.props.detailValue});
    }
  }

  handleDetailValueChange(e) {
    this.setState({detailValue: e.target.value});
  }

  toggleEditMode() {
    const inEditMode = this.state.inEditMode ? false : true;
    this.setState({inEditMode});
  }

  render() {
    const path = this.props.path;
    const detailName = this.props.detailName ?
        this.props.detailName + ':'
      : path.charAt(0).toUpperCase() + path.slice(1) + ':';
    const detailValue = this.state.inEditMode ?
        <input type="text" value={this.state.detailValue} onChange={this.handleDetailValueChange}/>
      : this.props.detailValue

      // <i class="x-icon far fa-times-circle"></i>
    const editIcons = this.state.inEditMode ?
        <div className='icon-container save-cancel-icons'>
          <i class="check-icon far fa-check-circle"></i>
          <div className='edit-detail-cancel'>Cancel</div>
        </div>
      : <div className='icon-container' onClick={this.toggleEditMode}>
          <i class='fas fa-pencil-alt'></i>
        </div>;

    return (
      <div className='item-detail'>
        <div className='item-detail-name'>{detailName}</div>
        <div className='item-detail-value'>{detailValue}</div>
        {editIcons}
      </div>
    );
  }
}

export default ItemDetail;
