import { addToCart} from '../redux/action';
import { useDispatch ,useSelector} from 'react-redux'
import './Shoes.css';

function Shoes() {
  const dispatch = useDispatch();
  const products = [
    {
      name: 'puma',
      price: 2500,
      color: 'white',
      image: 'https://www.jiomart.com/images/product/original/rvjcagcxpc/jamarion-trendy-stylish-puma-style-sneakers-for-men-white-product-images-rvjcagcxpc-0-202305171221.jpg?im=Resize=(500,630)',
    },
    {
      name: 'calcetto',
      price: 2000,
      color: 'white',
      image: 'https://calcetto.in/cdn/shop/files/PIX_2203.jpg?v=1701187070&width=1500',
    },
    {
      name: 'RedTape',
      price: 1600,
      color: 'grey',
      image: 'https://www.jiomart.com/images/product/original/rvzlghvdic/redtape-grey-sports-shoes-for-men-s-lace-up-shoes-perfect-walking-running-shoes-for-men-product-images-rvzlghvdic-8-202305230210.jpg?im=Resize=(1000,1000)',
    },
    {
      name: 'Addidas',
      price: 1200,
      color: 'blue',
      image: 'https://rukminim2.flixcart.com/image/850/1000/kq8dua80/shoe/y/u/m/9-hkk40-adidas-tecind-acimin-creblu-cblack-original-imag4azfdzrtyvyf.jpeg?q=20&crop=false',
    },
  ];
  const cartItems = useSelector((state) => state.cartData);
  

  return (
    <div>
      <div className='product-container'>
        {products.map((product) => (
          <div  className='product-wrapper-shoes'>
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

export default Shoes;




