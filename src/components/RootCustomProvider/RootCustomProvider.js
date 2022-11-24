import { Provider } from 'react-redux';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
// import { ConnectedRouter as Router } from 'connected-react-router';

const ReduxRoot = ({ children, store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

export default ReduxRoot;
