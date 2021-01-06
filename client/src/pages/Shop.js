import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Shop.css';



const Shop = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then((r) => r.json())
            .then((r) => {
                setProducts(r.products);
            })
    }, [products])

    return (
        <div className="shop-container">
            <div className="shop-text">Meżesz nas wesprzeć kupując zabawki dla swojego dziecka albo pupila. Cały dochód ze sprzedaży przeznaczamy na utrzymanie schroniska.</div>
            <span className="shop-span"></span>
            <div className="shop">
                <ul className="products-list">
                    {products.map((product) => (
                        <li className="product-container" key={product._id}>
                            <div className="product-mini-image-container">
                                <Link to={'/product/' + product._id}>
                                    <img className="product-mini-image" src={product.miniImage} alt='zdjęcie produktu' />
                                </Link>
                            </div>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/product/' + product._id}>
                                <div className="product-name-mini">{product.name}</div>
                            </Link>
                            <div className="product-price">Cena: <strong>{product.price} zł</strong></div>
                        </li>
                    ))}
                </ul>
            </div >
        </div>
    )
}

export default Shop;