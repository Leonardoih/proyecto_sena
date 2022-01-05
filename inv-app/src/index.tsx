import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Dashboar from './pages/Dashboar';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Dashboar" element={<Dashboar />}/>

  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
