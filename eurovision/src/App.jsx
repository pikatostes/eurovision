import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Spain from "./pages/Spain";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Edition from "./pages/Edition";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="eurovision/" element={<Home />} /> {/* Redirección a /spain */}
        <Route path="eurovision/spain" element={<Spain />} />
        <Route path="eurovision/ediciones" element={<Edition />}/>{/* Página temporal para Ediciones */}
      </Routes>
    </Router>
  );
}

export default App;