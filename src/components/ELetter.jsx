import React from 'react';

import EmployeesList from './EmployeesList.jsx';
import {data} from '../../data/data.js';

const ELetter = () => {

   return (
      <EmployeesList employeeData={data[1]} />
   )
}

export default ELetter;