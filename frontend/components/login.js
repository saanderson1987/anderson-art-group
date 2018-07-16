import React from 'react';
import FormModal from './form_modal';
import Session from '../resources/session';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormModal name='Login' submit={Session.login}
        itemDetails={[
          {columnName: 'username'},
          {columnName: 'password'}
      ]}/>
    );
  }
}

export default Login;
