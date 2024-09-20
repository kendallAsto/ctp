import UP from "./Pages/UP";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/UP.jsx" element={<UP />} />
          <Route path="/Events" element={<Events />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
