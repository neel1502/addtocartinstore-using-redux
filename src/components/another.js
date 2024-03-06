

// Another.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './another.css';

const Another = () => {
  const selectedItems = useSelector((state) => state.cartData);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newTotalQuantity = 0;
    let newTotalPrice = 0;

    selectedItems.forEach((item) => {
      newTotalQuantity =newTotalQuantity+ 1;
      newTotalPrice =newTotalPrice+ item.price;
    });

    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }, [selectedItems]);

  return (
    <div className='selected-wrapper-item'>
      <h1>Payment</h1>
    

      <div className='totals'>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
      {/* <button className='pay-button'>Pay Now</button> */}
      <button className='pay-button'>{`Pay $${totalPrice}`}</button>

    </div>
  );
};

export default Another;
