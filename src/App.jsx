import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes.jsx'

import "./app.css";

const app = (
   <BrowserRouter>
      <Routes />
   </BrowserRouter>

)
ReactDOM.render(app, document.getElementById("root"))