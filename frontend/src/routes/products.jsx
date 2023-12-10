import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategoryHero from './CategoryHero';
const Products = ({ categoryDisplay, categoryName, imageURL }) => {
    const [products, setProducts] = useState([]);
    console.log(categoryDisplay);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8082/products")
                setProducts(res.data);
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, []);

    return <>
        <CategoryHero imageURL={imageURL} categoryName={categoryName} />
        <div className="productHolder">
            {products.filter((product) =>
                product.category_id === categoryDisplay.current
            )
                .map(product => (
                    <ProductCard
                        key={product.product_name}
                        title={product.product_name}
                        category_id={product.category_id}
                        desc={product.description}
                        imageURL={"https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        price={product.product_price}
                    />
                ))}
        </div>

    </>
}

export default Products;