import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Session from '../resources/session';
import Login from './login';


class Protected extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAuthenticationState();
  }

  render() {
    const {isAuthenticated, children} = this.props;
    return (
    //   isAuthenticated ?
        <div>{children}</div>
      // : <Login />
    );
  }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.session.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAuthenticationState: () => dispatch(Session.isAuthenticated()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));
