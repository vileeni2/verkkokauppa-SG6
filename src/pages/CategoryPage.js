import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../components/CategoryPage.css';

function CategoryPage({ addToCart }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Haetaan tuotteet tietokannasta kategorian perusteella
    axios.get(`http://localhost:3001/products/`, {
      params: { category: category } // Lisää kategoria parametrina pyyntöön
      
    })
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [category]);

  return (
    <div>
      <h2>{category} : Products</h2>
      <div className="card-container">
        {products.map(product => (
          <Card key={product.id} className="card">
            <Card.Img variant="top" src={`/${product.imageUrl}`} />
            <Card.Body className="card-body">
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>{product.price}€</Card.Text>
              <Button
                variant="primary"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
