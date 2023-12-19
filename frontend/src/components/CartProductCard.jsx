import categories from '../assets/categories.json';
const CartProductCard = ({ id, title, price, category_id }) => {
    const decimalPrice = (price / 100).toFixed(2);
    return (<>
        <div className="cartProductCard">
            <p>{title}</p>
            <p id='priceInCart'>{decimalPrice}€</p>
            <div className="removeFromCart">
                <p id='addButton'>+</p>
                <p id='amountInCart'>2</p>
                <p id="closeButton">-</p>
            </div>
        </div>
    </>
    )
}

export default CartProductCard