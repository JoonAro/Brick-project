import Hero from "./Hero"
import ProductCategories from "./ProductCategories"


const Home = ({ updateMenu, overlayClass, productsToShow }) => {
  return (
    <div className="main-container">
      <div
        className={`overlay ${overlayClass}`}
        onClick={() => updateMenu()}
      ></div>
      <Hero />
      <ProductCategories productsToShow={productsToShow} />
    </div>
  )
}

export default Home