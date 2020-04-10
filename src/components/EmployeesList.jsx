import React, { useState } from 'react';
import Modal from 'react-modal';

import './employeesList.css';
import tab_plus from '../../public/images/Tab_plus.svg'
import EmployeeInfo from './EmployeeInfo.jsx'

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      background: `repeating-linear-gradient(
         180deg,
         #81d8df 0px,
         #81d8df 15%,
         #007faf 15%,
         #8ac543 70%,
         #3d4b5e 70%,
         #3d4b5e 100%
      )`
   }
};

const EmployeesList = (props) => {

   const [modalIsOpen, setIsOpen] = useState(true);

   const closeModal = () => (
      setIsOpen(false)
   )

const { employeeName, role, avatar } = props.employeeData;
return (
   <div className="list_container">
      <ul className="employees_list">
         <li>
            <div
               className="content_list"
               style={{ backgroundColor: '#fff' }}
               onClick={() => setIsOpen(true)}
            >
               <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setIsOpen(false)}
                  style={customStyles}
                  contentLabel={"Exemplo"}
               >
                  <EmployeeInfo closeModal={closeModal} {...props} />
               </Modal>
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