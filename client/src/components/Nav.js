import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {


    return (
        <>
            <div className="before-links">
                <div>DOM</div>

            </div>
            <ul className="nav-details">
                <li>
                    <NavLink exact activeStyle={{ color: '#011EFF' }} to="/" className="active">Home</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#011EFF' }} to="/blog" className="active">Blog</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#011EFF' }} to="/shop" className="active">Sklep</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#011EFF' }} to="/cart" className="active"><i className="fa fa-cart-plus"></i></NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#011EFF' }} to="/cooperation" className="active">Współpraca</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#011EFF' }} to="/contact" className="active">Kontakt</NavLink>
                </li>
            </ul>
            <span className="nav-bottom-line"></span>
        </>
    )
}

export default Nav;