import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"; 
import Vans from "./pages/Vans.jsx"; 

function App() {
  return (
    <BrowserRouter basename="/VanLife">
      <header>
        <Link className="link site-logo"  to="/">#VANLIFE</Link>
        <nav>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
