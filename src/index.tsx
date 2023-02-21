import whyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import 'semantic-ui-css/semantic.min.css'
import './app/assets/styles/styles.css';

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

ReactDOM.render(<App />, document.getElementById('root'));