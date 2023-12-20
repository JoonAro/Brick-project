import TotalPriceComp from "./TotalPriceComp";
const Cart = ({ cartClass, CartProducts, carts, totalPrice, getCartGoing }) => {
    return (
        <div className={`cart-container ${cartClass}`}>
            <TotalPriceComp totalPrice={totalPrice} />
            <CartProducts carts={carts} getCartGoing={getCartGoing} />
        </div>
    );
};
export default Cart;