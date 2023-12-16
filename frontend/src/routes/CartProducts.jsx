import CartProductCard from '../components/CartProductCard';

const CartProducts = ({ categoryDisplay, categoryName, imageURL, carts }) => {

    return (
        <div className="cartProductHolder">
            {carts.map(product => (
                <CartProductCard
                    key={product.id}
                    title={product.product_name}
                    id={product.id}
                    imageURL={"https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    price={product.product_price}
                    category_id={product.category_id}
                />
            ))}
        </div>
    )
}

export default CartProducts;