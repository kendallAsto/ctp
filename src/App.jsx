import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import { Suspense } from "react";
import CTechnical from "./Pages/CTechnical";
import CAcademic from "./Pages/CAcademic";
import CCompany from "./Pages/CCompany";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import Contacto from "./Pages/Contacto";
import Especialidades from "./Pages/Especialidades";
import Bolsa from "./Pages/BolsaTrabajo";
import Login from "./Components/Loginform";
import PrivateRoute from "./PrivateRoute";

function App() {
  const location = useLocation(); // Obtenemos la ruta actual

  return (
    <Suspense>
      <>
        <Routes>
          {/* Rutas con Nav y Footer */}
          <Route path="/" element={<Nav />}>
            <Route path="/Especialidades" element={<Especialidades />} />
            <Route index element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/CTechnical" element={<CTechnical />} />
            <Route path="/CAcademic" element={<CAcademic />} />
            <Route path="/CCompany" element={<CCompany />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route
              path="/Bolsa"
              element={
                <PrivateRoute>
                  <Bolsa />
                </PrivateRoute>
              }
            />
          </Route>

          {/* Ruta independiente para Login */}
          <Route path="/Login" element={<Login />} />
        </Routes>

        {/* Renderizamos Footer solo si no estamos en el Login */}
        {location.pathname !== "/Login" && <Footer />}
      </>
    </Suspense>
  );
}

export default App;
