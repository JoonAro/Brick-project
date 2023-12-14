const AddToCart = ({ getCartGoing, id }) => {
    return (
        <button className="add-to-cart-button" onClick={() => getCartGoing(id)}>Add to cart</button>
    )
}

export default AddToCart