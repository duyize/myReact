import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css'; 
import './icon/iconfont.css'
import './mock/mock'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
