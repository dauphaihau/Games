import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './DemoGame/BaiTapOanTuTi/BaiTapOanTuTi.css'
import App from './App';

import {Provider} from "react-redux";
import {store} from './redux/RootReducer'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);
