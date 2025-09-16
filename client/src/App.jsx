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
import Iso10002 from "./servicesPage/iso10002";
import Iso22301 from "./servicesPage/iso22301";
import Iso28000 from "./servicesPage/iso28000";
import Iso14064 from "./servicesPage/iso14064";
import Iso20121 from "./servicesPage/iso20121";
import Iso26000 from "./servicesPage/iso26000";
import Iso27017 from "./servicesPage/iso27017";
import Iso27018 from "./servicesPage/iso27018";
import Iso27701 from "./servicesPage/iso27701";
import Iso20000 from "./servicesPage/iso20000";
import Iso45003 from "./servicesPage/iso45003";
import Iso39001 from "./servicesPage/iso39001";
import Iso31000 from "./servicesPage/iso31000";
import Iso22316 from "./servicesPage/iso22316";
import Iso17025 from "./servicesPage/iso17025";
import Iso15189 from "./servicesPage/iso15189";
import Iso21001 from "./servicesPage/iso21001";
import Iso21930 from "./servicesPage/iso21930";
import CarbonNeutral from "./servicesPage/carbonneutral";
import Haccp from "./servicesPage/haccp";
import FSSC22000 from "./pages/FSSC22000";



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
      <Route path="/iso-10002" element={<Iso10002 />} />
      <Route path="/iso-22301" element={<Iso22301 />} />
      <Route path="/iso-28000" element={<Iso28000 />} />
      <Route path="/iso-14064" element={<Iso14064 />} />
      <Route path="/iso-20121" element={<Iso20121 />} />
      <Route path="/iso-26000" element={<Iso26000 />} />
      <Route path="/iso-27017" element={<Iso27017 />} />
      <Route path="/iso-27018" element={<Iso27018 />} />
      <Route path="/iso-27701" element={<Iso27701 />} />
      <Route path="/iso-20000" element={<Iso20000 />} />
      <Route path="/iso-45003" element={<Iso45003 />} />
      <Route path="/iso-39001" element={<Iso39001 />} />
      <Route path="/iso-31000" element={<Iso31000 />} />
      <Route path="/iso-22316" element={<Iso22316 />} />
      <Route path="/iso-17025" element={<Iso17025 />} />
      <Route path="/iso-15189" element={<Iso15189 />} />
      <Route path="/iso-21001" element={<Iso21001 />} />
      <Route path="/iso-21930" element={<Iso21930 />} />
      <Route path="/carbon-neutral" element={<CarbonNeutral />} />
      <Route path="/haccp" element={<Haccp />} />
      
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
