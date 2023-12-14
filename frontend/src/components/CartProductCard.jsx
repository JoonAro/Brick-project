import categories from '../assets/categories.json';
const CartProductCard = ({ id, title, price, category_id }) => {
    const decimalPrice = (price / 100).toFixed(2);
    return (<>
        <div className="cartProductCard">
            <div className="cartImg"><img src={categories[0].imageURL} alt="" /></div>
            <p>{title}</p>
            <p>{decimalPrice}€</p>
        </div>
    </>
    )
}

export default CartProductCard