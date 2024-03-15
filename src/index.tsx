import React from 'react';
import { createRoot } from 'react-dom/client';

import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';

import App from './app/App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
