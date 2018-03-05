import React from 'react';
import ReactDOM from 'react-dom';
import image from '../assets/react.png';
import './style.css';

const title = 'BitPlz';

ReactDOM.render(
  <div className="hello">
    <img src={image} alt="test" />
    {title}
  </div>,
  document.getElementById('app')
);

module.hot.accept();
