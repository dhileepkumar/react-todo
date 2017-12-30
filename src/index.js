import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const ApplicationHolder = () => (<App/>);

ReactDOM.render(<ApplicationHolder />, document.getElementById('root'));
registerServiceWorker();
