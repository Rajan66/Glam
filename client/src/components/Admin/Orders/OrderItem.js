import React from 'react';
import { useSelector } from 'react-redux';


const OrderItem = ({ order }) => {
  const orders = useSelector((state) => state.orders)
  const { shippingAddress, products, totalPrice, createdAt } = order;

  return (
    <div className="order-item">
      <h3>Order Details</h3>
      <p>Shipping Address:{shippingAddress.name}, {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.state}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Ordered At: {new Date(createdAt).toLocaleString()}</p>
      <h4>Products:</h4>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            Product ID: {product.productId}, Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItem