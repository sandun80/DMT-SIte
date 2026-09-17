import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import ServicesPage from "./pages/ServicesPage";
import Welcome from "./pages/Welcome";
import VehicleReg from "./pages/VehicleReg";
import VehicleInspection from "./pages/VehicleInspection";
import DrivingLicence from "./pages/DrivingLicence";
import VehicleRegHub from "./pages/VehicleRegHub";
import VehicleInspectionHub from "./pages/VehicleInspectionHub";
import DrivingLicenceHub from "./pages/DrivingLicenceHub";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="/vehicle-registration" element={<VehicleReg />} />
        <Route path="/vehicle-inspection" element={<VehicleInspection />} />
        <Route path="/driving-licence" element={<DrivingLicence />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/other-services" element={<ServicesPage />} />
        <Route path="/vehiclehub" element={<VehicleRegHub />} />
        <Route path="/vehicle-inspection-hub" element={<VehicleInspectionHub />} />
        <Route path="/driving-licence-hub" element={<DrivingLicenceHub />}/>
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
