import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/terminal" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
