import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import UP from "./Pages/UP";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/UP" element={<UP />} />
          <Route path="/Events" element={<Events />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
