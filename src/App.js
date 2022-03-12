import List from "component/List";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import LauchCollection from "./pages/LaunchCollection";
import Launches from "./pages/Launches";
import Cart from "./pages/Cart";
function App() {
  return (
    <Routes>
      <Route path="launches" element={<List />} />
      <Route path="/" element={<Launches />} />
      <Route path="/collection" element={<LauchCollection />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}
export default App;
