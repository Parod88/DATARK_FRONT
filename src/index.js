import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from './utils/translations/i18next';
import { createBrowserHistory } from 'history';

import App from './app/App';
import ReduxRoot from './components/RootCustomProvider/RootCustomProvider';
import configureStore from './store';

const auth = {};

const history = createBrowserHistory();
const store = configureStore({ auth }, { history });
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ReduxRoot store={store} history={history}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </ReduxRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
