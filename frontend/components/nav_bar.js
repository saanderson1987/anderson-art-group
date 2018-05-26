import React from 'react';

const NavBar = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default NavBar;

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
