import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store } from './redux';

import _App from './components/App';
import client from './graphql/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <_App />
      </Provider>
    </ApolloProvider>
  );
}
