import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ShoppingCart({ cartItems, removeFromCart }) {
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart ({totalQuantity} items)</h2>
      <div className="card-container">
        {cartItems.map(item => (
          <Card key={item.id} className="card">
            <Card.Img variant="top" src={`/${item.imageUrl}`} />
            <Card.Body className="card-body">
              <Card.Title>{item.productName}</Card.Title>
              <Card.Text>{item.price}€</Card.Text>
              <Button
                variant="danger"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </Button>
              <p>Quantity: {item.quantity}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button variant="primary">Order</Button>
    </div>
  );
}

export default ShoppingCart;
