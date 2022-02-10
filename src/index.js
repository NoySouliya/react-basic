import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from './components/HelloComponent';
import reportWebVitals from './reportWebVitals';

// karn sarng function Component
// function HelloComponet(){
//   return <h1>Hello Component</h1>
// }

// karn sarng class component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>Hello Class Component</h1>
//   }
// }

ReactDOM.render(<App/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
