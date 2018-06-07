import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.state = {expanded: false};
  }

  toggleExpansion(e) {
    const expanded = this.state.expanded ? false : true;
    this.setState({expanded});
  }

  render() {
    // const isLast = this.props.isLast ? 'list-item--last' : '';
    const isFirst = this.props.isFirst ? 'list-item--first' : '';
    const isExpanded = this.state.expanded ? 'bold' : '';
    const caret = this.state.expanded ?
        <i class="fas fa-caret-down"></i>
      : <i class="fas fa-caret-right"></i>;
    const details = this.state.expanded ?
        this.props.children
      : null;
    return (
      <div className={`list-item ${isFirst}`}>
        <div className={`list-item-label ${isExpanded}`} onClick={this.toggleExpansion}>
          {caret}
          <span>{this.props.name}</span>
        </div>
        {details}
      </div>
    );
  }

}

export default ListItem;
