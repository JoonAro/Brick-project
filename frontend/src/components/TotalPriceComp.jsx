import CheckoutButton from "./checkoutButton"
const TotalPriceComp = ({ totalPrice }) => {
    const decimalPrice = (totalPrice / 100).toFixed(2);
    return (
        <div className="totalPriceComp">
            <h2>Total: {decimalPrice} €</h2>
            <CheckoutButton />
        </div>
    )
}
export default TotalPriceComp