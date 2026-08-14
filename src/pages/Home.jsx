import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Latest_Design from "./Latest_Design";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Latest_Design/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;