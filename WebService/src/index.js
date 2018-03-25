import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
