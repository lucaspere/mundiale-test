import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layout/Layout.jsx';

import "./app.css";

const app = (
   <Layout>
      <div className="list_container">
         <ul className="employees_list">
            <li>
               <div className="content_list">
                  oi
               </div>
            </li>
            <li>
               <div className="content_list">
                  oi
               </div>
            </li>
            <li>
               <div className="content_list">
                  oi
               </div>
            </li>
            <li>
               <div className="content_list">
                  oi
               </div>
            </li>
         </ul>
      </div>
   </Layout>
)

ReactDOM.render(app, document.getElementById("root"))