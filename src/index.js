import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContactPage from './pages/ContactPage';

if(window.innerWidth <= 760) {
    ReactDOM.render(<ContactPage />, document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
serviceWorker.register();
