import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Session from '../resources/session';

const mapStateToProps = state => {
  return {
    authenticationState: state.session.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isAuthenticated: () => dispatch(Session.isAuthenticated()),
  }
}

class Protected extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.isAuthenticated();
  }

  render() {
    const isAuthenticated = this.props.authenticationState;
    const children = this.props.children;
    return (
      // isAuthenticated ?
        <div>{children}</div>
      // : 'Please log in'
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));
