import AddToCart from './AddToCart'
const ProductCard = ({ title, desc, price }) => {
    const decimalPrice = (price / 100).toFixed(2);
    return (
        <div className="productCard">
            <div className="imgAndDesc">

                <div className="imgHolder">
                </div>
                <div className='descBox'>
                    <p>{desc}</p>
                </div>
                <div className="priceHolder">{decimalPrice}€</div>
            </div>
            <div className='bottomCard'>
                <p>{title}</p>
                <AddToCart />
            </div>
        </div>
    )
}

export default ProductCard;
