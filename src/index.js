import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./applications/css/global.css";
import Welcomeapp from './applications/Welcomeapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './applications/modules/dashboard/Mainpage';
import Userloginpage from './applications/modules/auth/Userloginpage';
import Userregistorpage from './applications/modules/auth/Userregistorpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomeapp/>}/>
        <Route path='dashboard' element={<Mainpage/>}/>
        <Route path='userportal' element={<Userloginpage/>}></Route>
        <Route path='userportal/registor' element={<Userregistorpage/>}></Route>
        
        
      </Routes>
  
  </BrowserRouter>

 
  </React.StrictMode>
);
