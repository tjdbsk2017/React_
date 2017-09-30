//es6 -> es5로 변환되어 서비스됨

// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; // index.html에 css 파일 링크하는 방법 사용
import App from './App';
import Test from './Test';
import Main from './Main';

// endpoint
// ReactDOM.render(<h1>Hello React</h1>,document.getElementById('root'));
ReactDOM.render(<Main />,document.getElementById('root'));
