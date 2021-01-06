import React, { useState } from 'react';
import '../styles/Cart.css';

const regeneratorRuntime = require("regenerator-runtime");


class Storage {
    static saveCart(products) {
        localStorage.setItem('cart', JSON.stringify(products))
    }
}


const Cart = () => {

    const firstList = JSON.parse(localStorage.getItem('cart')) !== null ? JSON.parse(localStorage.getItem('cart')) : [];

    let [products, setProducts] = useState(firstList)

    const sum = () => {
        if (products.length > 0) {
            let totalValue = products.map((product => {
                let value = product.amount * product.price;
                return value;
            }
            ))
            totalValue = [...totalValue];

            let sum = 0;
            for (let i = 0; i < totalValue.length; i++) {
                sum += totalValue[i];
            }
            return `Suma: ` + sum + ` zł`;
        }
    }

    const cartSetup = () => {
        const productContainer = document.getElementsByClassName('product-content')

        return (
            window.addEventListener('click', async event => {

                if (event.target.classList.contains('remove-product')) {
                    let removeProduct = event.target;
                    let id = removeProduct.id;
                    products = products.filter(item => item._id !== id);
                    Storage.saveCart(products);
                    setProducts(products);

                    sum();
                }
            })
        )

    }

    const clearBtn = () => {
        if (products.length > 0) {
            return (
                <button className="clear-cart" onClick={() => {
                    let cartItems = products.map(product => product._id);
                    cartItems.forEach(id => {
                        products = products.filter(product => product._id !== id);
                        Storage.saveCart(products);
                    });
                    setProducts(products);
                }}>Usuń wszystko</button>
            )
        }
    }


    return (
        <div className="cart">
            <div className="products-in-cart">
                {products.map((product => {
                    return (
                        <>
                            <div className="product-content" key={product._id}>
                                <div>
                                    <img src={product.image} alt="zdjęcie produktu" />
                                </div>
                                <div>
                                    <h4>{product.name}</h4>
                                    <h5> {product.price} zł/szt</h5>
                                    <span className="remove-product" id={product._id}>Usuń z koszyka</span>
                                </div>
                                <div>
                                    <p className="product-amount">Ilość: {product.amount}</p>
                                </div>
                            </div>
                            <span className="span-cart"></span>
                        </>
                    )
                }))}
            </div>
            {cartSetup()}
            <div className="total-content">
                <div>
                    <div className="cart-total">
                        {sum()}
                    </div>
                </div>
                <div>
                    {clearBtn()}
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Cart;


