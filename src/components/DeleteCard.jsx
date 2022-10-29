import axios from 'axios';
import React from 'react'
import { Button , Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeleteCard = ({product}) => {

    const deleteProduct = async() => {
        let {data} = await axios.delete(`https://nessan-backend.onrender.com/product/${product._id}`);

        window.location.reload();
    }

  return (
        <Col xs={12} md={3} lg={3}>
        <Card>
          <Card.Img variant="top" src={product.url ? product.url : "https://i.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA"} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            Price : &#8377; {(product.price)} / product only
            </Card.Text>
            <Card.Text>
            {(product.description).length > 100 ? (product.description).slice(0,100) : product.description}...<span style={{"color" : "blue"}}> see more</span>
            </Card.Text>
            <Button variant="primary" onClick={deleteProduct}>Delete this product</Button>
          </Card.Body>
        </Card>
        </Col>
  )
}

export default DeleteCard
