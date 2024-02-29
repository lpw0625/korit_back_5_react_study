import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // default가 없으면 함수명 그대로 비구조 동기로 가져온다.
import ComponentStudy from './pages/ComponentStudy/ComponentStudy'; //default로 잡혀져 있으면 함수명 그대로 가져온다.

const root = ReactDOM.createRoot(document.getElementById('root'));

const {a,b,c} /*props*/  = { 
  a: 10,
  b: 20
}

a // 변수 두개를 만들어서 바로 대입까지 가능하다.

root.render(
    <ComponentStudy a={10} b={20}  /> // 함수명이다 


  //<BrowserRouter>
  //  <App />
  //  </BrowserRouter>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
