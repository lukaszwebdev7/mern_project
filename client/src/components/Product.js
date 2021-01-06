import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.css';

class Storage {
    static saveProducts(products) {
        localStorage.setItem('products', JSON.stringify(products))
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product._id === id);
    }
    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}


const Product = (props) => {
    const productId = props.match.params.id;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then((r) => r.json())
            .then((r) => {
                setProducts(r.products);
                Storage.saveProducts(r.products);
            });
    }, [])

    return (
        <>
            <div>
                <Link to='/shop'>{`<< Powrót do sklepu`}</Link>
            </div>
            <div className='product-container-one'>
                {products.map(product => {
                    if (product._id === productId) {
                        return (
                            <div className='product'>
                                <div className='product-image-container'>
                                    <img className='product-image' src={product.image} alt="produkt" />
                                </div>
                                <div className='product-info-container'>
                                    <div>{product.name}</div>
                                    <div>{product.description}</div>
                                    <div>Cena: {product.price} zł</div>
                                                        Ilość: <select className='add-product' id={product._id}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <button className='button-add-product' onClick={() => {
                                        let id = product._id;
                                        const select = document.getElementById(product._id);
                                        const x = select.value;
                                        let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
                                        let cartItem = { ...Storage.getProduct(id), amount: x };
                                        cart = [...cart, cartItem];
                                        Storage.saveCart(cart);
                                        alert(`Dodano do koszyka ${cartItem.name}, ilość ${x}`)
                                    }} id={product._id}>Dodaj do koszyka</button>
                                </div>
                            </div>
                        )
                    }

                })}
            </div>
        </>
    )
}

export default Product;