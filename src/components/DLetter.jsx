import React from 'react';

import EmployeesList from './EmployeesList.jsx';
import {data} from '../../data/data.js';

const DLetter = (props) => {

   return (
      <EmployeesList employeeData={data[0]} {...props}/>
   )
}

export default DLetter;