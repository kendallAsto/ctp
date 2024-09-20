import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import UP from "./Pages/UP";
import Services from "./Pages/Services";
import { Suspense } from "react";
function App() {
  return (
    <Suspense>
      <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/UP" element={<UP />} />
          <Route path="/Services" element={<Services />} />
          <Route index element={<Home />} />
          <Route path="/Events" element={<Events />} />
        </Route>
      </Routes>
    </>
    </Suspense>
  );
}

export default App;
