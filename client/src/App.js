import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Cooperation from './pages/Cooperation';
import Contact from './pages/Contact';
import Home from './home_page/Home';
import AdminGlobal from './pages/AdminGlobal';
import Post from './components/Post';
import Footer from './components/Footer';
import Product from './components/Product';

const App = () => {
    return (
        <>
            <div className="main">
                <BrowserRouter>
                    <Nav />
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/post/:id" component={Post} />
                            <Route path="/shop" component={Shop} />
                            <Route path="/product/:id" component={Product} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/cooperation" component={Cooperation} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/admin" component={AdminGlobal} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default App;