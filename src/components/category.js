import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './category.css';

const HorizontalExample = () => {
  return (
    <ListGroup className="horizontal-list-group">
      <ListGroup.Item className="custom-list-item">Sneakers</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Slippers</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Heels</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Boots</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Loafers</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Winter Shoes</ListGroup.Item>
      <ListGroup.Item className="custom-list-item">Hiking Shoes</ListGroup.Item>
    </ListGroup>
  );
};

export default HorizontalExample;
