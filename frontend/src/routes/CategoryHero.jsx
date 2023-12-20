const CategoryHero = ({ categoryName, imageURL }) => {
    return (
        <div className="category-hero">
            <img className="category-hero-img-container" src={imageURL}></img>
            <h1>{categoryName}</h1>
        </div>
    )
}

export default CategoryHero;