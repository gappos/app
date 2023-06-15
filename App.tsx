import { Provider } from 'react-redux';
import { store } from './redux';

import _App from './components/App';

export default function App() {
  return (
    <Provider store={store}>
      <_App />
    </Provider>
  );
}
