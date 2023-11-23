import "./App.css";
import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer';

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
      <main>
        <nav className={`${menuClass}`}>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Black Tea</li>
            <li>Green Tea</li>
          </ul>
        </nav>
      </main>

      <Footer />
    </>
  )
}

export default App;
