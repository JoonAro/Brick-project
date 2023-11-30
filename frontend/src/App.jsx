import "./App.css";
import { useState } from "react";
import Header from "./routes/Header";
import Hero from "./routes/Hero";
import Footer from "./routes/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [searchClass, setSearchClass] = useState("hidden");
  const [overlayClass, setOverlayClass] = useState("hidden");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible");
      setOverlayClass("active");
      //Disable scrolling on body
      document.body.style.overflow = "hidden";
      setIsMenuClicked(true);
      if (isSearchClicked) {
        activateSearch();
      }
    } else {
      setMenuClass("menu hidden");
      setOverlayClass("hidden");
      //Enable scrolling on body
      document.body.style.overflow = "auto";
      setIsMenuClicked(false);
    }
  };

  const activateSearch = () => {
    if (!isSearchClicked) {
      setSearchClass("visible");
      setIsSearchClicked(true);
      if (isMenuClicked) {
        updateMenu();
      }
    } else {
      setSearchClass("hidden");
      setIsSearchClicked(false);
    }
  };

  return (
    <>
      <div className="main-container">
        <div
          className={`overlay ${overlayClass}`}
          onClick={() => updateMenu()}
        ></div>
        <Header updateMenu={updateMenu} activateSearch={activateSearch} />
        <Hero />
        <Search searchClass={searchClass} />
        <HamburgerMenu menuClass={menuClass} />
        <Footer />
      </div>
    </>
  );
}

export default App;
