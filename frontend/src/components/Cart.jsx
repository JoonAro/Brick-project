const Cart = ({ cartClass, CartProducts, carts }) => {
    return (
        <>
            <div className={`cart-container ${cartClass}`}>
                <h1>Cart</h1>
                <CartProducts carts={carts} />
            </div>
        </>
    );
};

export default Cart;