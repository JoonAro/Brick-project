import "./App.css";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root"
import Home from "./routes/Home";

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

  const router = createBrowserRouter([
    {
      path: '/', element: <Root 
      updateMenu={updateMenu} 
      activateSearch={activateSearch}
      searchClass={searchClass} 
      menuClass={menuClass}/>,
      children: [
        { path: '/', element: <Home 
        updateMenu={updateMenu}
        overlayClass={overlayClass}
      />  },
      {path: '/black_tea'},
      {path: '/green_tea'},
      {path: '/jasmin_tea'},
      {path: '/white_tea'},
      {path: '/herbal_tea'},
      {path: '/special_tea'},
      {path: '/show_all'}
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
