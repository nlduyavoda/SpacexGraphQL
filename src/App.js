import List from "component/List";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Launches from "./pages/Launches";
import LauchCollection from "./pages/LaunchCollection";
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
