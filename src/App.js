import { useTransition } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import RMBAppHeader from "components/app-header";
import RMBAppFooter from "components/app-footer";
import RMBPlaybar from "components/app-playbar";
import { Routes } from "@/router/Routes";
import { store } from "./store";

function App() {
  const [isPending, startTransition] = useTransition();

  return (
    <Provider store={store}>
      <HashRouter className="App">
        <RMBAppHeader></RMBAppHeader>
        {isPending ? <h2>正在加载中。。。请稍候</h2> : <Routes></Routes>}
        <RMBAppFooter></RMBAppFooter>
        <RMBPlaybar></RMBPlaybar>
      </HashRouter>
    </Provider>
  );
}

export default App;
