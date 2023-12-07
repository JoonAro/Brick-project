import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8082/products")
                setProducts(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, []);
    /*     Card
        key = { product.id }
        title = { product.product_name }
        desc = { product.description }
        price = { product.product_price }
        amount = { product.amount }
        category = { product.category_id } 
        teaType={category.name}
                    imageURL={"https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}*/

    return <>

        <div className="categories-main-container">
            <h2>Products</h2>
            <div className='category-cards-container'>
                {products.map(product => (
                    <Card
                        key={product.id}
                        teaType={product.category_id}
                        imageURL={"https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    />
                ))}
            </div >
        </div>
    </>
}

export default Products;