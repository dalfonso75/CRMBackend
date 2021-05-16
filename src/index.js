import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UseContextProvider } from './context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <UseContextProvider>
      <App />
    </UseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);