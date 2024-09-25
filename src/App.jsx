import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import UP from "./Pages/UP";
import Services from "./Pages/Services";
import { Suspense } from "react";
import CTechnical from "./Pages/CTechnical";
import CAcademic from "./Pages/CAcademic";
import CCompany from "./Pages/CCompany";
import Footer from "./Components/Footer";
import Posts from "./Pages/Posts";
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
            <Route path="/CTechnical" element={<CTechnical />} />
            <Route path="/CAcademic" element={<CAcademic />} />
            <Route path="/CCompany" element={<CCompany />} />
            <Route path="/Posts" element={<Posts />} />
          </Route>
        </Routes>
        <section>
          <Footer />
        </section>
      </>
    </Suspense>
  );
}

export default App;
