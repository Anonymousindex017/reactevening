import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Xyz,{About1,Abcd1} from './About';
import Contact from './Contact';
import Mybootstrappage from './Mybootstrappage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Xyz></Xyz>
    <About1></About1>
    <Abcd1/>
    <Contact></Contact>
    <Mybootstrappage></Mybootstrappage>
 
  </React.StrictMode>
);
