// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/elements/NavBar";
import Footer from "./components/elements/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Career from "./components/pages/Career";
import JobApplicationForm from "./components/elements/JobApplicationForm";
import CarrerNew from './components/elements/CarrerNew';
import HomePage from './page/HomePage';
import HomePageBelow from './page/HomePageBelow';
import AboutHead from './components/elements/AboutHead';
import MissionVisionCard from './components/elements/MissionVisioncard';




function App() {
  return (
    // <Router>
    //   <Navbar/>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/home" element={<HomePage/>} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/services" element={<Services />} />
    //   <Route path="/career" element={<CarrerNew/>} />
    //   <Route path="/contact" element={<Contact/>} />

    // </Routes>
    // <Footer/>
    // </Router>
    <>
      <HomePage />
      <HomePageBelow />
      <MissionVisionCard/>
      <About/>
      {/* our services */}
      {/* our projects */}
      <CarrerNew/>
    </>
    // <CarrerNew/>
  );
}


export default App;
