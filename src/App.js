import RMBAppHeader from "components/app-header";
import RMBAppFooter from "components/app-footer";
import { Routes } from "@/router/Routes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter className="App">
      <RMBAppHeader></RMBAppHeader>
      <Routes></Routes>
      <RMBAppFooter></RMBAppFooter>
    </HashRouter>
  );
}

export default App;
