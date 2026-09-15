import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import ServicesPage from "./pages/ServicesPage";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
         <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
