import "./App.css";
import { useState } from "react";
import Header from './routes/Header'
import Hero from "./routes/Hero";
import Footer from './routes/Footer';
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  const [menuClass, setMenuClass] = useState("menu hidden")
  const [overlayClass, setOverlayClass] = useState("hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible")
      setOverlayClass("active")
      //Disable scrolling on body
      document.body.style.overflow = "hidden"
      setIsMenuClicked(true)
    }
    else {
      setMenuClass("menu hidden")
      setOverlayClass("hidden")
      //Enable scrolling on body
      document.body.style.overflow = "auto"
      setIsMenuClicked(false)
    }
  }

  return (

    <>
      <div className="main-container">
        <div className={`overlay ${overlayClass}`} onClick={() => updateMenu()}></div>
        <Header updateMenu={updateMenu} />
        <Hero />
        <HamburgerMenu menuClass={menuClass} />
        <Footer />
      </div>
    </>
  )
}

export default App;
