import List from "component/List";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import LauchCollection from "./pages/LaunchCollection";
import Launches from "./pages/Launches";
function App() {
  return (
    <Routes>
      <Route path="launches" element={<List />} />
      <Route path="/" element={<Launches />} />
      <Route path="/collection" element={<LauchCollection />} />
    </Routes>
  );
}
export default App;
