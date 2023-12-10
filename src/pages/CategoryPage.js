
/*import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../components/CategoryPage.css';

function BasicExample() {
  return (
    <div className="card-container">
      <div className="card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/Boots/boots1.jpg'} alt="Kuva" />
          <Card.Body>
            <Card.Title>Retro Boots</Card.Title>
            <Card.Text>Vintage boots represent a nostalgic style, offering timeless elegance and a retro vibe to various outfits.</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/Boots/boots2.jpg'} alt="Kuva" />
          <Card.Body>
            <Card.Title>Blue Boots</Card.Title>
            <Card.Text>Blue boots are stylish and distinctive footwear that uplifts an outfit with their colorful appearance.       </Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
<div className="card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/Boots/boots3.jpg'} alt="Kuva" />
          <Card.Body>
            <Card.Title>Black Boots</Card.Title>
            <Card.Text>Black studded combat boots are bold and stylish footwear that combine the classic black color with edgy studs, presenting a striking and fashionable look..</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/Boots/boots4.jpg'} alt="Kuva" />
          <Card.Body>
            <Card.Title>Brown Boots</Card.Title>
            <Card.Text>Brown boots are timeless and versatile footwear that bring warmth and natural elegance to various outfits.</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../components/CategoryPage.css';

function CategoryPage() {
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
            <Card.Img variant="top" src={`./${product.image_url}`} />
            <Card.Body className="card-body">
              <Card.Title>{product.product_name}</Card.Title>
              <Card.Text>{product.price}€</Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;




