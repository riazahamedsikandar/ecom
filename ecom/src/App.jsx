/* eslint-disable react/forbid-prop-types */
import { Preloader } from "@/components/common";
import PropTypes from "prop-types";
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "@/routers/AppRouter";

const App = ({ store, persistor }) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </StrictMode>
);

App.propTypes = {
  store: PropTypes.any.isRequired,
  persistor: PropTypes.any.isRequired,
};

export default App;
