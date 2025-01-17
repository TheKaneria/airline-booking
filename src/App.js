import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Common/Footer/Footer";
import Navbar from "./Common/Navbar/Navbar";
import TicketBookingDetails from "./Pages/TicketBookingDetails/TicketBookingDetails";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/TicketBookingDetails"
          element={<TicketBookingDetails />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
