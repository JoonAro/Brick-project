import categories from '../assets/categories.json';
const CartProductCard = ({ id, title, price, category_id }) => {
    const decimalPrice = (price / 100).toFixed(2);
    return (<>
        <div className="cartProductCard">
            <div className="cartImg"><img src={categories[0].imageURL} alt="" /></div>
            <p>{title}</p>
            <p>{decimalPrice}€</p>

        </div>
        <div className="plusminus">
            <span className="minus">
                -
            </span>
            <span className="content">1</span>
            <span className="plus">
                +
            </span>
        </div>
    </>
    )
}

export default CartProductCard