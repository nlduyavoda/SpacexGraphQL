import List from "component/List";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Launches from "./pages/Launches";
function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="launches" element={<Launches />} />
    </Routes>
  );
}
export default App;
