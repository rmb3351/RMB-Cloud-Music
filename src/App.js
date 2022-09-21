import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import RMBAppHeader from "components/app-header";
import RMBAppFooter from "components/app-footer";
import RMBPlaybar from "components/app-playbar";
import { Routes } from "@/router/Routes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter className="App">
        <RMBAppHeader></RMBAppHeader>
        <Routes></Routes>
        <RMBAppFooter></RMBAppFooter>
        <RMBPlaybar></RMBPlaybar>
      </HashRouter>
    </Provider>
  );
}

export default App;
