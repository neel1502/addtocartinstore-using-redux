import { addToCart} from '../redux/action';
import { useDispatch ,useSelector} from 'react-redux'
import React from 'react';
import './Main.css';
function Main() {
  const dispatch = useDispatch();
  const products = [
    {
      name: 'iPhone15 pro Max',
      price: 150000,
      color: 'black',
      image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-pro-max-blue-titanium-back.png?v=45',
    },
    {
      name: 'iPhone14 pro Max',
      price: 100000,
      color: 'grey',
      image: 'https://mobilepriceall.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg',
    },
    {
      name: 'iPhone12',
      price: 75000,
      color: 'darkblue',
      image: 'https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-ip12/purple/front.png',
    },
    {
      name: 'iPhone13',
      price: 85000,
      color: 'green',
      image: 'https://johnlewis.scene7.com/is/image/JohnLewis/239091988?$rsp-pdp-port-1440$',
    },
  ];
  const cartItems = useSelector((state) => state.cartData);
  

  return (
    <div>
       
      <div className='product-container'>
        {products.map((product) => (
          <div  className='product-wrapper-mobile'>
            <img src={product.image} alt={product.name} className='dummy-image' />
            <div>Name: {product.name}</div>
            <div>Color: {product.color}</div>
            <div>Price: {product.price}</div>
            <div>
              <button onClick={() => dispatch(addToCart(product))} className='add-button'>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className='cart-content'>
    
        <ul>
          {cartItems.map((item) => (
            console.log(cartItems)
          ))}
        </ul>
      </div>
    </div>
  
  );
}

export default Main;




