import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Welcomeapp from './applications/Welcomeapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './applications/modules/dashboard/Mainpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomeapp/>}/>
        <Route path='dashboard' element={<Mainpage/>}/>
        
        
      </Routes>
  
  </BrowserRouter>

 
  </React.StrictMode>
);
