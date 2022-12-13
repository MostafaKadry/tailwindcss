import "./assets/css/App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Copyrights from "./components/Copyrights.tsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Copyrights />
    </Router>
  );
}

export default App;
