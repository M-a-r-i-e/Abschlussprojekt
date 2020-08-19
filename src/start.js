import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App.js";

// ReactDOM.render(
//     <HelloWorld />,
//     document.querySelector('main')
// );

// function HelloWorld() {
//     return (
//         <div>Hello, World!</div>
//     );
// }

let primaryComponent = <App />;


ReactDOM.render(primaryComponent, document.getElementById("root"));