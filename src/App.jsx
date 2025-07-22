// App.jsx
import "./App.css";

import Footer from "./components/elements/Footer";
import Career from "./page/Career";
import Contact from "./page/Contact";
import Services from "./page/Services";



import Home  from "./page/Home";
import About  from "./page/About";

function App() {
  return (
    <>
      <>
        <div id="home">
          <Home/>
        </div>

        <div id="about">
          <About/>

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
  
  );
}

export default App;
