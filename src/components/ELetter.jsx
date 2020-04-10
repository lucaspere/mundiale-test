import React from 'react';

import EmployeesList from './EmployeesList.jsx';
import {data} from '../../data/data.js';

const ELetter = (props) => {

   return (
      <EmployeesList employeeData={data[1]} {...props}/>
   )
}

export default ELetter;