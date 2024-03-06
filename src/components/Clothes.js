import { addToCart} from '../redux/action';
import { useDispatch ,useSelector} from 'react-redux'
import './Clothes.css'

function Clothes() {
  const dispatch = useDispatch();
  const products = [
    {
      name:'Hoodie',
      price: 750,
      color: 'black',
      image: 'https://m.media-amazon.com/images/I/71xpunh27OL._AC_UY1100_.jpg',
    },
    {
      name: 'indo-western',
      price: 5000,
      color: 'green',
      image: 'https://i.pinimg.com/736x/32/27/3b/32273b4ea59fbc30222ea41409d59ec9.jpg',
    },
    {
      name: 'Short Kurta',
      price: 1100,
      color: 'grey',
      image: 'https://images.meesho.com/images/products/251959230/knjuy_512.webp',
    },
    {
      name: 'T-shirt',
      price: 600,
      color: 'white',
      image: 'https://img0.junaroad.com/uiproducts/17264576/zoom_0-1701162113.jpg',
    },
  ];
  const cartItems = useSelector((state) => state.cartData);
  

  return (
    <div>
      <div className='product-container'>
        {products.map((product) => (
          <div  className='product-wrapper-clothes'>
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
          {cartItems.map((item) => 
             console.log(cartItems)
          )}
        </ul>
      </div>
    </div>
  );
}

export default Clothes;




