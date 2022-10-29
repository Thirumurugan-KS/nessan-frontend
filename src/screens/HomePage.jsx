import React, { useEffect, useState } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import axios from 'axios';

const HomePage = () => {

  let [products , setProducts ] = useState([])

  useEffect(()=>{
    getProductData();
  }, [])

  const getProductData = async() => {
    let {data} = await axios.get("https://nessan-backend.onrender.com/");

    setProducts(data);
  }

  return (
    products && <div className='home-page'>
    <Container fluid>
    <Row className='xs-12'>
    {products && products.map(product => (
      <ProductCard product={product} key={product._id}/>
    ))}
    </Row>
    </Container>
    </div>

  )
}

export default HomePage
