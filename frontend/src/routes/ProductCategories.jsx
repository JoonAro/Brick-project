import { NavLink } from 'react-router-dom'
import categories from '../assets/categories.json'
import Card from '../components/Card'

const ProductCategories = ({ productsToShow, }) => {
    return (
        <div className="categories-main-container">
            <h2>Tea types</h2>
            <div className='category-cards-container'>
                {categories.map((category) =>
                    <NavLink onClick={() => productsToShow(category)}
                        to={`/${category.pathname}`}
                        key={category.name}>
                        <Card
                            key={category.name}
                            teaType={category.name}
                            imageURL={"https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        />
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default ProductCategories