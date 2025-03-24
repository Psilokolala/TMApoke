import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebApp from '@twa-dev/sdk';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Манифест для TON Connect
const manifestUrl = '/tonconnect-manifest.json';

// Инициализация Telegram Web App только если API доступен
if (window.Telegram && window.Telegram.WebApp) {
  WebApp.ready();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
); 