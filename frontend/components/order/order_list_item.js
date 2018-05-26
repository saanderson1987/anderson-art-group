import React from 'react';
import OrderDetails from './order_details';

class OrderListItem extends React.Component {
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
    const caret = this.state.expanded ?
        <i class="fas fa-caret-down"></i>
      : <i class="fas fa-caret-right"></i>;
    const details = this.state.expanded ?
        <OrderDetails orderId={this.props.order.id}/>
      : null;

    return (
      <div>
        <li onClick={this.toggleExpansion}>
          {caret}
          {this.props.order.name}
        </li>
        {details}
      </div>
    );
  }

}

export default OrderListItem;
