import React from 'react';

import EmployeesList from './EmployeesList.jsx';
import {data} from '../data/data.js';

const DLetter = () => {

   return (
      <EmployeesList employeeData={data[0]} />
   )
}

export default DLetter;