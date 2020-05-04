import { App as AppContainer } from "@apperside/app-ui/src";
import ExamplePage from "@apperside/app-ui/src/components/ExamplePage";
import combinedReducers from "@apperside/commons/src/redux";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import AppContent from "./AppContent";
const App: React.FC = () => {
  const store = configureStore({
    reducer: combinedReducers
  });

  return <AppContainer>
    <Provider store={store}>
      <ExamplePage />
    </Provider>
  </AppContainer>;
};

export default App;
