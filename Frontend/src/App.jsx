import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Personal from "./pages/Personal"
// import SplashCursor from "./components/SplashCursor/SplashCursor"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      {/* <SplashCursor/> */}
      <ScrollToTop/>
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
