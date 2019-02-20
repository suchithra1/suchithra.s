import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/ws/person.html?';

axios.interceptors.request.use(request => {
                               console.log(request);
                               return request;
                              }, error =>{ console.log(error);
                                   return Promise.reject(error);
                              })

axios.interceptors.response.use(request => {
console.log(request);
return request;
}, error =>{ console.log(error);
    return Promise.reject(error);
})                              

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
