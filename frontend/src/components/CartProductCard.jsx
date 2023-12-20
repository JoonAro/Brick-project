const CartProductCard = ({ id, incart, title, price, getCartGoing }) => {
    const decimalPrice = (price / 100 * incart).toFixed(2);
    return (<>
        <div className="cartProductCard">
            <p>{title}</p>
            <p id='priceInCart'>{decimalPrice}€</p>
            <div className="removeFromCart">
                <p id='amountInCart'>{incart}</p>
                <p id='addButton' onClick={() => getCartGoing(id, price)}>+</p>
                <p id="closeButton">-</p>
            </div>
        </div>
    </>
    )
}
export default CartProductCard