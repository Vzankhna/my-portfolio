import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;