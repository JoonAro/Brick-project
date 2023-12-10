import Products from "./products"
import Hero from "./Hero"
import ProductCategories from "./ProductCategories"


const Home = ({ updateMenu, overlayClass }) => {
  return (
    <div className="main-container">
      <div
        className={`overlay ${overlayClass}`}
        onClick={() => updateMenu()}
      ></div>
      <Hero />
      <ProductCategories />
    </div>
  )
}

export default Home