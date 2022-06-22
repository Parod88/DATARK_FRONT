import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from './utils/translations/i18next';
import { createBrowserHistory } from 'history';

import App from './app/App';
import RootCustomProvider from './components/RootCustomProvider/RootCustomProvider';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore({ history });

ReactDOM.render(
  <RootCustomProvider store={store} history={history}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </RootCustomProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
