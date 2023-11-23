import "./App.css";
import { useState } from "react";
import Header from './routes/Header'
import Hero from "./routes/Hero";
import Footer from './routes/Footer';
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  const [menuClass, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible")
      setIsMenuClicked(true)
    }
    else {
      setMenuClass("menu hidden")
      setIsMenuClicked(false)
    }
  }

  return (

    <>
      <Header updateMenu={updateMenu} />
      <Hero />
      <HamburgerMenu menuClass={menuClass} />
      <Footer />
    </>
  )
}

export default App;
