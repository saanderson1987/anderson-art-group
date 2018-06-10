import React from 'react';
import { Link } from 'react-router-dom';

const Tab = (props) => {
  const isActive = props.pathname === props.to;
  const activeClass = isActive ? 'active-tab' : '';

  // <div className={`tab ${activeClass}`}>
  //   <Link to={props.to}>{props.children}</Link>
  // </div>

  return (
    <Link className={`tab ${activeClass}`} to={props.to}>{props.children}</Link>
  );
}

export default Tab;
