import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import Events from './components/Events.jsx';
import EventDetails from './components/EventDetails.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import AdminAddEvent from './components/AdminAddEvent';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-event" element={<AdminAddEvent />} />
       

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
