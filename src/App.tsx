import { ThemeProvider } from "@/components/ThemeProvider";
import { AppRoute } from "@/navigation/AppRoute";
import { persistedStore, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { apiSlice } from "./services/services";

store.dispatch(apiSlice.endpoints.getTodos.initiate());

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppRoute />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
