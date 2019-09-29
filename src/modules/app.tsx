import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './../modules';


ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

if ((module as any).hot) {
  (module as any).hot.accept();
}
