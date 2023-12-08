
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

//kommentoituja ei saa poistaa

//alla olevalla koodilla testataan tietokanta yhteyttä
import axios from "axios";

  function getProducts() {
    axios.get('http://localhost:3000/products')
      .then(resp => console.log(resp.data))
      .catch( error => console.log(error.message));
  

  return(
  <div>
    <button onClick={getProducts} >paina</button>
  </div>
  );
  };

export default getProducts;
