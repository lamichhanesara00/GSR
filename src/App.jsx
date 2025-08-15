import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import CoursesPage from "./Pages/CoursesPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<CoursesPage />} path="/courses" />
        <Route element={<ServicesPage />} path="/services" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
