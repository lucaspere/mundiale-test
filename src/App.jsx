import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/styles.scss";
import "../node_modules/normalize.css/normalize.css";

const Layout = (props) => {

   const style = {
      layout: {
         backgroundColor: 'black',
      }
   }

   return (
      <div style={style.layout}>
         {props.children}
      </div>
   )
}

const Teste = () => (
   <div>
      oi Lucas
   </div>
)

const app = (
   <div>
      <Layout>
         <Teste />
      </Layout>
   </div>
)

ReactDOM.render(app, document.getElementById("root"))