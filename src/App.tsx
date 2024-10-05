import { ThemeProvider } from "@/components/ThemeProvider";
import { AppRoute } from "@/navigation/AppRoute";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <AppRoute />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
