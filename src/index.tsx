import whyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/index';
import 'semantic-ui-less/semantic.less'
import '@app/assets/styles/styles.less';

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