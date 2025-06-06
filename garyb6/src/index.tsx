import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faNodeJs, 
  faPython, 
  faGitAlt, 
  faDocker, 
  faAws, 
  faLinux, 
  faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faPython,
  faGitAlt,
  faDocker,
  faAws,
  faLinux,
  faFigma,
  faDatabase,
  faCode
);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 