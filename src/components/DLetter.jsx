import React, { useState } from 'react';
import Modal from 'react-modal';
import EmployeeInfo from './EmployeeInfo.jsx'
import EmployeesList from './EmployeesList.jsx';
import { data } from '../../data/data.js';


const DLetter = (props) => {

   const [modalIsOpen, setModalIsOpen] = useState(false)

   const closeModal = () => setModalIsOpen(false);

   return (
      <div>
         <EmployeesList employeeData={data[0]} {...props}  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel={"Exemplo"}
         >
            <EmployeeInfo closeModal={closeModal} employeeData={data[0]} />
         </Modal>
      </div>
   )
}

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
export default DLetter;