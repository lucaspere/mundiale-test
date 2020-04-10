import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';

import Routes from './Routes.jsx'

import "./app.css";

Modal.setAppElement("#root");

export const app = (
   <BrowserRouter>
      <Routes />
   </BrowserRouter>

)
ReactDOM.render(app, document.getElementById("root"))