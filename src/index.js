import React from 'react';
import router from './router';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app';
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <RouterProvider router={createBrowserRouter(router)}>
          </RouterProvider>
        </motion.div>
      </WagmiConfig>
    </Provider>
  </React.StrictMode>
);
