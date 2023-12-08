import React from "react";
import router from "./router";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app";
import { AnimatePresence, motion } from "framer-motion";

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

const MotionDiv = ({ element }) => (
  <motion.div
    initial={{ opacity: 0, marginTop: 0 }}
    animate={{ opacity: 1, marginTop: 20 }}
    exit={{ opacity: 0, marginTop: 0 }}
    transition={{ duration: 0.2 }}
  >
    {element}
  </motion.div>
);

const AnimatedRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        {router.map((v, i) => (
          <Route
            path={v.path}
            loader={v.loader}
            element={<MotionDiv element={v.element} />}
            key={i}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiConfig config={config}>
        <BrowserRouter>
          <AnimatedRouter />
        </BrowserRouter>
      </WagmiConfig>
    </Provider>
  </React.StrictMode>,
);
