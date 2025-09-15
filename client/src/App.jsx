import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AboutUs from "./pages/AboutUs";
import Authorisations from "./pages/Authorisations";
import UAF from "./pages/UAF";
import EGAC from "./pages/EGAC";
import IAS from "./pages/IAS";
import FSSC22000 from "./pages/FSSC22000";
import UKAS from "./pages/UKAS";
import ContactForm from "./pages/ContactForm";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import OtpVerification from "./pages/OtpVerification";
import Footer from "./components/Footer";
import NavbarComponent from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./pages/Blog"

// ✅ Import your ISO 9001 page
import Iso9001 from "./servicesPage/iso9001";
import Iso14001 from "./servicesPage/iso14001";
import Iso45001 from "./servicesPage/iso45001";
import Iso13485 from "./servicesPage/iso13485";
import Iso27001 from "./servicesPage/iso27001";
import Iso37001 from "./servicesPage/iso37001";
import Iso50001 from "./servicesPage/iso50001";
import Iso22000 from "./servicesPage/iso22000";


// about us page dropdown vision 

import VisionMission from "./servicesPage/VisionMission";
import ImpartialityPolicy from "./servicesPage/impartiality-policy";
import QualityPolicyObjectives from "./servicesPage/QualityPolicyObjectives";
import ManagementSystemProcess from "./servicesPage/ManagementSystemProcess";



const App = () => (
  <Router>
    <NavbarComponent />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/authorisations" element={<Authorisations />} />
      <Route path="/authorisations/ukas" element={<UKAS />} />
      <Route path="/authorisations/uaf" element={<UAF />} />
      <Route path="/authorisations/egac" element={<EGAC />} />
      <Route path="/authorisations/ias" element={<IAS />} />
      <Route path="/authorisations/fssc-22000" element={<FSSC22000 />} />
      <Route path="/Blog" element={<Blog />} />

      <Route
        path="/otp-verification/:email/:phone"
        element={<OtpVerification />}
      />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:token" element={<ResetPassword />} />

      {/* ✅ Link Service Page */}
      <Route path="/iso-9001" element={<Iso9001 />} />
      <Route path="/iso-14001" element={<Iso14001 />} />
      <Route path="/iso-45001" element={<Iso45001 />} />
      <Route path="/iso-13485" element={<Iso13485 />} />
      <Route path="/iso-27001" element={<Iso27001 />} />
      <Route path="/iso-37001" element={<Iso37001 />} />
      <Route path="/iso-50001" element={<Iso50001 />} />
      <Route path="/iso-22000" element={<Iso22000 />} />
      <Route path="/vision-mission" element={<VisionMission />} />
      <Route path="/impartiality-policy" element={<ImpartialityPolicy />} />
      <Route path="/quality-policy" element={<QualityPolicyObjectives />} />
      <Route path="/management-process" element={<ManagementSystemProcess />} />
      
    </Routes>

    <Footer />
    <ToastContainer theme="dark" />
  </Router>
);

export default App;
