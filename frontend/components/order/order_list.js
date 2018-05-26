import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Order from '../../resources/order';
import OrderListItem from './order_list_item';


class OrderList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const orders = this.props.orders;
    const createNewOrder = this.props.createNewOrder;
    const newOrder = {
      name: 'TestOrder5',
      po_num: '123ABC',
      company_id: 1
    };

    return (
      <div>
        Orders:
        <ul>
          {orders.map(order =>
            <OrderListItem order={order}/>
          )}
        </ul>
        <button onClick={function() {createNewOrder(newOrder);}}>Create new order</button>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    orders: Object.values(state.orders)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(Order.all()),
    createNewOrder: (order) => dispatch(Order.create(order))

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderList));
