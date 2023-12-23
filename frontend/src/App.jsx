import "./App.css";
import { useState } from "react";
import Header from "./routes/Header";
import Hero from "./routes/Hero";
import Footer from "./routes/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import AddToCart from "./components/AddToCart";
import Search from "./components/Search";
import Card from "./components/Card";
import PlusMinusButton from "./components/PlusminusButton";
import ContactUs from "./components/Contactus";

=======
import { useState, useRef, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root";
import Home from "./routes/Home";
import Products from "./routes/products";
import CartProducts from "./routes/CartProducts";
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
  const [carts, setCarts] = useState([]);
  const [cartHasProducts, setCartHasProducts] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const categoryDisplay = useRef();
  const cartProduct = useRef([]);
  const totalToModify = useRef();
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
  const getCartGoing = (numb, price) => {
    numb--;
    const updatedProduct = { ...products[numb] };
    //if carts doesn't have this product yet
    if (!carts.some(product => product.id === updatedProduct.id)) {
      updatedProduct.incart += 1;
      updatedProduct.amount -= 1;
      cartProduct.current = updatedProduct;
      setCarts((prevCarts => [...prevCarts, cartProduct.current]));
      setCartHasProducts(true);
    }
    //if cart has the product it only updates incart and amount
    else {
      const updatedCarts = carts.map(product => product.id === updatedProduct.id ? { ...product, incart: product.incart + 1, amount: product.amount - 1 } : product);
      setCarts(updatedCarts);
    }
    updateTotal(price);
  }
  //carts needs total in cart that cannot be more than amount
  //updates total price in cart
  const updateTotal = (price) => {
    totalToModify.current = totalPrice;
    totalToModify.current += price;
    setTotalPrice(totalToModify.current)
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
      if (isCartClicked) {
        activateCart();
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
      setCartClass("hidden");
      setIsCartClicked(false);
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
  const activateCart = () => {
    if (!isCartClicked) {
      if (isSearchClicked) {
        activateSearch();
        setCartClass("visible");
        setIsCartClicked(true);
      }
      else if (isMenuClicked) {
        updateMenu();
        setCartClass("visible");
        setIsCartClicked(true);
      }
      else {
        setCartClass("visible");
        setIsCartClicked(true);
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
        cartClass={cartClass}
        menuClass={menuClass}
        categoryDisplay={categoryDisplay}
        overlayClass={overlayClass}
        carts={carts}
        CartProducts={CartProducts}
        totalPrice={totalPrice}
        getCartGoing={getCartGoing}
      />,
      children: [
        {
          path: '/', element: <Home
            updateMenu={updateMenu}
            productsToShow={productsToShow}
          />
        },
        { path: '/black_tea', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="Black tea" imageURL={categories[0].imageURL} updateTotal={updateTotal} />) },
        { path: '/green_tea', element: (<Products products={products} getCartGoing={getCartGoing} categoryDisplay={categoryDisplay} categoryName="Green tea" imageURL={categories[1].imageURL} updateTotal={updateTotal} />) },
        { path: '/white_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} getCartGoing={getCartGoing} categoryName="White tea" imageURL={categories[2].imageURL} updateTotal={updateTotal} />) },
        { path: '/herbal_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} getCartGoing={getCartGoing} categoryName="Herbal tea" imageURL={categories[3].imageURL} updateTotal={updateTotal} />) },
        { path: '/special_tea', element: (<Products products={products} categoryDisplay={categoryDisplay} getCartGoing={getCartGoing} categoryName="Special tea" imageURL={categories[4].imageURL} updateTotal={updateTotal} />) },
        { path: '/teapots', element: (<Products products={products} categoryDisplay={categoryDisplay} getCartGoing={getCartGoing} categoryName="Teapots" imageURL={categories[5].imageURL} updateTotal={updateTotal} />) }
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
