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
        <Route path="/" element={<Home />} /> {/* Redirección a /spain */}
        <Route path="/spain" element={<Spain />} />
        <Route path="/ediciones" element={<Edition />}/>{/* Página temporal para Ediciones */}
      </Routes>
    </Router>
  );
}

export default App;