import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import './index.css';
import App from './App.jsx';
import store from './store'; // Import the store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Correct the casing here */}
      <App /> 
    </Provider>
  </StrictMode>
);
