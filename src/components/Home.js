import { addToCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import './Home.css'
function Home() {
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
    ]
    const products2 = [
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
    ]
    const products3 = [
        {
            name: 'Hoodie',
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
        <div className='different-image'>

            <div className='product-container'>
                {products.map((product) => (
                    <div className='product-wrapper-item'>
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
            <div className='product-container'>
                {products2.map((product2) => (
                    <div className='product-wrapper-item'>
                        <img src={product2.image} alt={product2.name} className='dummy-image' />
                        <div>Name: {product2.name}</div>
                        <div>Color: {product2.color}</div>
                        <div>Price: {product2.price}</div>
                        <div>
                            <button onClick={() => dispatch(addToCart(product2))} className='add-button'>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='product-container'>
                {products3.map((product3) => (
                    <div className='product-wrapper-item'>
                        <img src={product3.image} alt={product3.name} className='dummy-image' />
                        <div>Name: {product3.name}</div>
                        <div>Color: {product3.color}</div>
                        <div>Price: {product3.price}</div>
                        <div>
                            <button onClick={() => dispatch(addToCart(product3))} className='add-button'>Add To Cart</button>
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

export default Home;








