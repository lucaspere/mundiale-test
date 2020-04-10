import React from 'react';

import mundialeLogo from '../../public/images/Group-142.svg'
import mundialeLine from '../../public/images/Group-130.svg'
import backIcon from '../../public/images/back.svg'
import qrCode from '../../public/images/qrCode.png'
import './employeeInfo.css';

const EmployeeInfo = (props) => {
   console.log(props)
   return (
      <div>
         <div onClick={props.closeModal} className="button_container">
            <img src={backIcon} width="auto" height="20px"/>
         </div>
         <div className="image_container">
            <img src={props.employeeData.avatar} className="modal_avatar" />
         </div>
         <div className="emploInfo_modal">
            <p>{props.employeeData.employeeName}</p>
            <p>{props.employeeData.role}</p>
         </div>
         <div>
            <div className="card_container">
               <div className="subCard_container">
                  <img src={mundialeLogo} />
                  <hr />
                  <div className="phone_info">
                     {props.employeeData.teleNumbers.map((phoneNumber, idx) => (
                        <p key={idx}>{phoneNumber}</p>
                     ))}
                  </div>
               </div>
               <p className="employee_email">{props.employeeData.email}</p>
               <div className="line_container">
                  <img src={mundialeLine} style={{ width: "inherit" }} />
               </div>
            </div>
         </div>
         <div className="qrCode_container">
            <img src={qrCode} height="200px" />
         </div>
      </div>
   )
}

export default EmployeeInfo;