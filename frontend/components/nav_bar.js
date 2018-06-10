import React from 'react';

const NavBar = (props) => {
  const key = Math.random();
  return (
    <nav id='navbar' className="navbar navbar-expand-md">
      <img className='navbar-logo' src='/images/taag_logo_circle.png'/>
      <div className="navbar-toggler-" data-toggle="collapse" data-target={`#nav-bar-links${key}`} aria-controls={`nav-bar-links${key}`} aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" style={{color: '#ffff', fontSize: '2rem'}}></i>
      </div>
      <div className="collapse navbar-collapse" id={`nav-bar-links${key}`}>
        <ul className="navbar-nav mr-auto">
          {React.Children.map(props.children, (child) => {
            return (
              <li className="nav-item">
                <span className="nav-link">{child}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

// <div className="navbar-toggler" type="button" data-toggle="collapse" data-target={`#nav-bar-links${key}`} aria-controls={`nav-bar-links${key}`} aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>

// const NavBar = (props) => {
//   const links = [];
//   if (props.links) {
//     props.links.forEach((link) => {
//       if (typeof link === 'string') {
//         links.push({
//           name: link,
//           href: `/${link.toLowerCase()}`
//         })
//       } else links.push(link);
//     });
//   }
//   return (
//     <div>
//       {links.map((link) => {
//         return <NavLink to={link.href}>{link.name}</NavLink>
//       })}
//     </div>
//   );
// }
