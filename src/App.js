import Header from "./components/Header";
import ContextProvider from "./context/Context";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
