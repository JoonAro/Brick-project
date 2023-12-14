import "./App.css";
import { useState, useRef, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root";
import Home from "./routes/Home";
import CategoryHero from "./routes/CategoryHero";
import Products from "./routes/products";
import axios from 'axios';

function App() {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [searchClass, setSearchClass] = useState("hidden");
  const [overlayClass, setOverlayClass] = useState("hidden");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [products, setProducts] = useState([]);
  const [toCart, setToCart] = useState([]);
  const [carts, setCarts] = useState([]);
  const categoryDisplay = useRef();
  const cartProduct = useRef([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8082/products")
        setProducts(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchProducts()
  }, []);
  /*  useEffect(() => {
     const fetchCarts = async () => {
       try {
         const res = await axios.get("http://localhost:8082/carts")
         setCarts(res.data);
       } catch (err) {
         console.log(err)
       }
     }
     fetchCarts()
   }, []); */

  const getCartGoing = (numb) => {
    numb--;
    cartProduct.current = products[numb];
    setCarts((prevCarts => [...prevCarts, cartProduct.current]));
    console.log(carts);
  }
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

  const productsToShow = (category) => {
    categoryDisplay.current = category.id;
  }
  const router = createBrowserRouter([
    {
      path: '/', element: <Root
        updateMenu={updateMenu}
        activateSearch={activateSearch}
        searchClass={searchClass}
        menuClass={menuClass}
        categoryDisplay={categoryDisplay} />,
      children: [
        {
          path: '/', element: <Home
            updateMenu={updateMenu}
            overlayClass={overlayClass}
            productsToShow={productsToShow}
          />
        },
        { path: '/black_tea', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="Black tea" imageURL={"https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />) },
        { path: '/green_tea', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="Green tea" imageURL={"https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />) },
        { path: '/jasmin_tea' },
        { path: '/white_tea', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="White tea" imageURL={"https://images.unsplash.com/photo-1484836443634-3d3fd80edccf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />) },
        { path: '/herbal_tea', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="Herbal tea" imageURL={"https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />) },
        { path: '/special_tea', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="Special tea" imageURL={"https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHRlYXxlbnwwfHwwfHx8MA%3D%3D"} />) },
        { path: '/teapots', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="Teapots" imageURL={"https://images.unsplash.com/uploads/141156683569128f190a0/6efc090d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />) }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
