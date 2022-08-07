import RMBAppHeader from "components/app-header";
import RMBAppFooter from "components/app-footer";
import { Routes } from "@/router/Routes";

function App() {
  return (
    <div className="App">
      <RMBAppHeader></RMBAppHeader>
      <Routes></Routes>
      <RMBAppFooter></RMBAppFooter>
    </div>
  );
}

export default App;
