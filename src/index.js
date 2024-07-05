import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

const element = <h1>Hello World</h1>;
const root=createRoot(document.getElementById('root'));
root.render(element);

console.log(element);