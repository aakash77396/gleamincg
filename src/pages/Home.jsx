import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;