import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createRoot } from "react-dom/client";
import store from './redux/store';
import App from './App';

import { createRoot } from 'react-dom/client';
// const root = createRoot(document.getElementById('root'));
// root.render(<App />);


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(
  
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );