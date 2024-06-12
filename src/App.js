import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Home } from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Studies from "./components/Studies/Studies.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
