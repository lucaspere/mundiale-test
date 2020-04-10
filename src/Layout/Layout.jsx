import React from 'react';
import { NavLink } from 'react-router-dom';

import './layout.css';

const Layout = (props) => {
   return (
      <div className="layout_container">
         <header >
            <nav>
               <ul>
                  <NavLink to="/d" className="d" activeClassName="isSelected">
                     D
                     </NavLink>
                     <NavLink to="e" className="e" activeClassName="isSelected">
                     E
                     </NavLink>
               </ul>
            </nav>
         </header>
         {props.children}
      </div>
   )
}

export default Layout;