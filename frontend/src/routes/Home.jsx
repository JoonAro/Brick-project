import Hero from "./Hero"
import ProductCategories from "./ProductCategories"


const Home = ({  productsToShow }) => {
  return (
    <div className="main-container">

      <Hero />
      <ProductCategories productsToShow={productsToShow} />
    </div>
  )
}

export default Home