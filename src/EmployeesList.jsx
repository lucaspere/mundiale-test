import React from 'react';

import './employeesList.css';
import logo from '../public/images/Group-174.svg';
import tab_plus from '../public/images/Tab_plus.svg'

const EmployeesList = (props) => {
   const { employeeName, role, avatar, teleNumbers, email, qrCode } = props.employeeData
   console.log(props.employeeData.employeeName)
   return (
      <div className="container">
         <header>
            <img id="logo" src={logo} />
         </header>
         <div className="list_container">
            <ul className="employees_list">
               <li>
                  <div className="content_list" style={{ backgroundColor: '#fff' }}>
                     <img src={avatar} className="avatar" />
                     <div className="emploInfo">
                        <p>{employeeName}</p>
                        <p>{role}</p>
                     </div>
                     <hr />
                     <img src={tab_plus} className="tab_plus" />
                  </div>
               </li>
               <li>
                  <div className="content_list">
                  </div>
               </li>
               <li>
                  <div className="content_list">
                  </div>
               </li>
               <li>
                  <div className="content_list">
                  </div>
               </li>
            </ul>
         </div>
      </div>
   )
};

export default EmployeesList;