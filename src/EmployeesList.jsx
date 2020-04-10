import React from 'react';

import './employeesList.css';
import tab_plus from '../public/images/Tab_plus.svg'

const EmployeesList = (props) => {
   const { employeeName, role, avatar, teleNumbers, email, qrCode } = props.employeeData;
   return (
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
   )
};

export default EmployeesList;