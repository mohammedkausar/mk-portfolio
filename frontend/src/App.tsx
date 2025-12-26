import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Hearder from "./components/Hearder";

import data from "@/data/data";
import { ThemeProvider } from "./context/theme-context";
import About from "@/sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Hearder header={data.header} />
        <About about={data.about} />
        <Skills skill={data.skill} />
        <Projects project={data.projects} />
        <Experience data={data.experience} />
        <Contact contactData={data.contact} />
        <BackToTop />
        <Footer footerData={data.footer} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
