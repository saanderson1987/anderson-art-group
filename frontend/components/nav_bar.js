import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Session from '../resources/session';


// const NavBar = (props) => {
//   const key = Math.random();
//   return (
//     <nav id='navbar' className="navbar navbar-expand-md">
//       <img className='navbar-logo' src='/images/taag_logo_circle.png'/>
//       <div className="navbar-toggler-" data-toggle="collapse" data-target={`#nav-bar-links${key}`} aria-controls={`nav-bar-links${key}`} aria-expanded="false" aria-label="Toggle navigation">
//         <i className="fas fa-bars" style={{color: '#ffff', fontSize: '2rem'}}></i>
//       </div>
//       <div className="collapse navbar-collapse" id={`nav-bar-links${key}`}>
//         <ul className="navbar-nav mr-auto">
//           {React.Children.map(props.children, (child) => {
//             return (
//               <li className="nav-item">
//                 <span className="nav-link">{child}</span>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     </nav>
//   );
// }

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const links = [
      <NavLink to="/companies">Companies</NavLink>,
      <NavLink to="/jobs">Jobs</NavLink>,
      <NavLink to="/orders">Orders</NavLink>,
      <NavLink to="/inventory">Inventory</NavLink>,
      <a onClick={(e) => this.props.logout()}>Log out</a>,
    ];
    const key = Math.random();
    return (
      <nav id='navbar' className="navbar navbar-expand-md">
        <img className='navbar-logo' src='/images/taag_logo_circle.png'/>
        <div className="navbar-toggler-" data-toggle="collapse" data-target={`#nav-bar-links${key}`} aria-controls={`nav-bar-links${key}`} aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" style={{color: '#ffff', fontSize: '2rem'}}></i>
        </div>
        <div className="collapse navbar-collapse" id={`nav-bar-links${key}`}>
          <ul className="navbar-nav mr-auto">
            {links.map(link => {
              return (
                <li className="nav-item">
                  <span className="nav-link">{link}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    );

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (data) => dispatch(Session.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
