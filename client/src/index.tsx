import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/app/layout/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { store, StoreContext } from './app/stores/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <CssBaseline>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>,
    </CssBaseline>
  </BrowserRouter>
);
