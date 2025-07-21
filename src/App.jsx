// App.jsx
import "./App.css";
import AboutPage from "./components/elements/AboutPage";
import Footer from "./components/elements/Footer";
import Career from "./page/Career";
import Contact from "./page/Contact";
import Services from "./page/Services";
import TeamCards from "./page/TeamCards";
import About from "./page/TeamCards";
import HomePage from "./page/HomePage";
import HomePageBelow from "./page/HomePageBelow";

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
      <>
        <div id="home">
          <HomePage />
        </div>
        <HomePageBelow />
        <div id="about">
          <AboutPage />
          <TeamCards />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="career">
          <Career />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </>
    </>
    // <CarrerNew/>
  );
}

export default App;
