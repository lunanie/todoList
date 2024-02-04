import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import { store } from '@store/reducers';
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          // 1. Use dark algorithm
          algorithm: theme.darkAlgorithm,

          // 2. Combine dark algorithm and compact algorithm
          // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
      >
        <div className="App">
          <HomePage />
        </div>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
