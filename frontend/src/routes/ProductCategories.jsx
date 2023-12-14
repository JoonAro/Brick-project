import { NavLink } from 'react-router-dom'
import categories from '../assets/categories.json'
import Card from '../components/Card'

const ProductCategories = ({ productsToShow }) => {
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
                            imageURL={category.imageURL}
                        />
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default ProductCategories