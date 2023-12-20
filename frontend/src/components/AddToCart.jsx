const AddToCart = ({ getCartGoing, id, price }) => {
    return (
        <button className="add-to-cart-button" onClick={() => getCartGoing(id, price)} >Add to cart</button>
    )
}
export default AddToCart