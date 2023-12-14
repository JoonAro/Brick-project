
const CartProductCard = ({ id, title, imageURL, price }) => {
    return (<>
        <div className="cartProduct">
            <p>{id}, {title},{price}</p>
        </div>
    </>
    )
}

export default CartProductCard