import React from 'react';
import router from './router';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app';

import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiConfig config={config}>
        <RouterProvider router={createBrowserRouter(router)}>
        </RouterProvider>
      </WagmiConfig>
    </Provider>
  </React.StrictMode>
);
