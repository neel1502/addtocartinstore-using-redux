import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import { emptyCart, removeToCart } from '../redux/action';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Shoes from './Shoes';
import Clothes from './Clothes';
import Main from './Main';
import Home from './Home';
import Another from './another';
import { selectHeaderItem } from '../redux/action';
const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartData);
  console.warn("data in header", cartItems);
  const [isCartDataVisible, setCartDataVisible] = useState(false);
  const [selectedHeaderItems, setSelectedHeaderItems] = useState([]);
  const handleAddToCartFromHeader = () => {
    selectedHeaderItems.forEach((item) => {
      dispatch(selectHeaderItem(item));
    });
    setSelectedHeaderItems([]);
    setCartDataVisible(false);
  };
  const handleCartIconClick = () => {
    setCartDataVisible(true);
  };
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul className='nav navbar-nav'>
            <li className='nav-item active'><Link to="/">Home</Link></li>
            <li className='nav-item'><Link to="/Mobile">Mobile</Link></li>
            <li className='nav-item'><Link to="/Shoes">Shoes</Link></li>
            <li className='nav-item'><Link to="/Clothes">Clothes</Link></li>
          </ul>

          <div className="cart-div" onClick={handleCartIconClick}>
            <span>{cartItems.length}</span>
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
          </div>
        </nav>

      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='mobile' element={<Main />}></Route>
        <Route path='shoes' element={<Shoes />}></Route>
        <Route path='Clothes' element={<Clothes />}></Route>
        <Route path='another' element={<Another />}></Route>
      </Routes>
      {isCartDataVisible && (
        <div className="cart-data-container">
          <div className="close" onClick={() => setCartDataVisible(false)}>
            &times;
          </div>
          <h2 className='tagname'>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className='cart-item'>
                    <img src={item.image} alt={item.name} className='store-image' />
                    <div className='item-description'>
                      <p>{item.name}</p>
                      <p>Price: ${item.price}</p>
                      <p>Color: {item.color}</p>
                    </div>
                    <div>
                      <button onClick={() => dispatch(removeToCart(item))} className='remove-button'>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="header-container">
            {cartItems.length > 0 &&
              <button className='redirect-div' onClick={handleAddToCartFromHeader}>
                <Link to='/another' className='redirect-button'>View Cart</Link>
              </button>
            }
          </div>
          <div className='cart-button'>
            {cartItems.length > 0 && (
              <button onClick={() => dispatch(emptyCart())} className='empty-cart'>Empty Cart</button>
            )}
          </div>
        </div>
      )}
    </Router>
  );
};
export default Header;