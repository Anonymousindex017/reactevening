import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Xyz,{About1,Abcd1} from './About';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Xyz></Xyz>
    <About1></About1>
    <Abcd1/>
    <Contact></Contact>
 
  </React.StrictMode>
);
