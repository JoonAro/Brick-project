import TotalPriceComp from "./TotalPriceComp";
const Cart = ({ cartClass, CartProducts, carts, totalPrice }) => {
    return (
        <>
            <div className={`cart-container ${cartClass}`}>
                <CartProducts carts={carts} />
                <TotalPriceComp totalPrice={totalPrice} />
            </div>
        </>
    );
};

export default Cart;