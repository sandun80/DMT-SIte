import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import ServicesPage from "./pages/ServicesPage";
import Welcome from "./pages/Welcome";
import VehicleReg from "./pages/VehicleReg";
import VehicleInspection from "./pages/VehicleInspection";
import DrivingLicence from "./pages/DrivingLicence";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/vehicle-registration" element={<VehicleReg />} />
        <Route path="/vehicle-inspection" element={<VehicleInspection />} />
        <Route path="/driving-licence" element={<DrivingLicence />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
