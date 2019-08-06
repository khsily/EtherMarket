import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './styles.scss';

ReactDOM.render((
  <Provider>
    <App />
  </Provider>
), document.getElementById('root'));
serviceWorker.unregister();
