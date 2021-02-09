import React from 'react';
import ReactDOM from 'react-dom';
import YourTwenty from './components/YourTwenty';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.getElementById('app');

const render = () => {
    ReactDOM.render(<YourTwenty/>, app);
};

render();