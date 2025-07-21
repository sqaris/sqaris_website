// App.jsx
import './App.css';
import AboutPage from './components/elements/AboutPage';
import Footer from "./components/elements/Footer";
import Career from "./components/pages/Career";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import TeamCards from './components/pages/TeamCards';
import About from "./components/pages/TeamCards";
import HomePage from './page/HomePage';
import HomePageBelow from './page/HomePageBelow';




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
      <AboutPage/>
      <TeamCards/>
      {/* our services */}
      <Services/>
      <Career/>
      <Contact/>
      <Footer/>
      {/* our projects */}
      {/* <CarrerNew/> */}
    </>
    // <CarrerNew/>
  );
}


export default App;
