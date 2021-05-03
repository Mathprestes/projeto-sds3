import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';
import App from './App';

ReactDOM.render(   //chamando a funçao com tag "app" do arquivo "App.tsx"
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);
