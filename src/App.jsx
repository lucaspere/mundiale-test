import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick'

import EmployeesList from './EmployeesList.jsx';
import { data } from '../data/data';

import "./app.css";

const settings = {
   dots: true,
   infinite: true,
   arrows: false,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
}

const app = (
   <div>
      <EmployeesList employeeData={data[0]} />
      <EmployeesList employeeData={data[1]} />
   </div>

)

ReactDOM.render(app, document.getElementById("root"))