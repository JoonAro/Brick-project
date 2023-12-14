const Cart = ({ cartClass, CartProducts, carts }) => {
    return (
        <>
            <div className={`cart-container ${cartClass}`}>
                <CartProducts carts={carts} />
            </div>
        </>
    );
};

export default Cart;