import whyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index';
import 'semantic-ui-css/semantic.min.css'
import './app/assets/styles/styles.css';

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);