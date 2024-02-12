  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import About from "../src/pages/About";
  import Careers from "../src/pages/Careers";
  import Products from "../src/pages/Products";
  import Services from "../src/pages/Services";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import Home from "../src/pages/Home";

  function App() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }

  export default App;
