import "./App.css";
import { useState, useRef, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root";
import Home from "./routes/Home";
import Products from "./routes/products";
import axios from 'axios';
import { fakeProducts } from "../fakeProducts";
import categories from './assets/categories.json'

function App() {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [searchClass, setSearchClass] = useState("hidden");
  const [cartClass, setCartClass] = useState("hidden");
  const [overlayClass, setOverlayClass] = useState("hidden");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
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
    } else if (!isCartClicked) {
      setCartClass("visible");
      setIsCartClicked(true);
      if (isMenuClicked) {
        updateMenu();
      }
    } else {
      setSearchClass("hidden");
      setIsSearchClicked(false);
    }
  };
  const activateCart = () => {
    if (!isSearchClicked) {
      setCartClass("visible");
      setIsCartClicked(true);
      if (isMenuClicked) {
        updateMenu();
      }
    } else {
      setCartClass("hidden");
      setIsCartClicked(false);
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
        activateCart={activateCart}
        searchClass={searchClass}
        menuClass={menuClass}
        categoryDisplay={categoryDisplay}
        overlayClass={overlayClass}
      />,
      children: [
        {
          path: '/', element: <Home
            updateMenu={updateMenu}
            productsToShow={productsToShow}
          />
        },
        { path: '/black_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} categoryName="Black tea" imageURL={categories[0].imageURL} />) },
        { path: '/green_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} categoryName="Green tea" imageURL={categories[1].imageURL} />) },
        { path: '/jasmin_tea' },
        { path: '/white_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} categoryName="White tea" imageURL={categories[3].imageURL} />) },
        { path: '/herbal_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} categoryName="Herbal tea" imageURL={categories[4].imageURL} />) },
        { path: '/special_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} categoryName="Special tea" imageURL={categories[5].imageURL} />) },
        { path: '/teapots', element: (<Products products={products} categoryDisplay={categoryDisplay} categoryName="Teapots" imageURL={categories[6].imageURL} />) }
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
