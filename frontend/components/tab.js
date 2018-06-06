import React from 'react';
import { Link } from 'react-router-dom';

const Tab = (props) => {
  const isActive = props.pathname === props.to;
  const activeClass = isActive ? 'active-tab' : '';
  
  return (
    <div className={`tab ${activeClass}`}>
      <Link to={props.to}>{props.children}</Link>
    </div>
  );
}

export default Tab;
