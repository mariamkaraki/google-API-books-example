import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <App Books={[]} />
  </React.StrictMode>,
  document.getElementById('root')
);
