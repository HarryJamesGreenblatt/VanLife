import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter basename="/VanLife">
      <header>
        <Link className="link site-logo"  to="/">#VANLIFE</Link>
        <nav>
          <Link className="link" to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
