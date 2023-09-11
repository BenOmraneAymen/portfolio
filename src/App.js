import About from "./components/About";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-neutral-50" >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
