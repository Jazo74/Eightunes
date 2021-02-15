import React from 'react';
import ReactDOM from 'react-dom';
import Hitzz from './components/Hitzz';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.getElementById('app');

const render = () => {
    ReactDOM.render(<Hitzz/>, app);
};

render();