import React from 'react';

import './layout.css';
import test from '../../public/images/Group-174.svg'

const Layout = (props) => {

   return (
      <div className="container">
         <header>
            <img src={test} />
         </header>
         {props.children}
      </div>
   )
};

export default Layout;