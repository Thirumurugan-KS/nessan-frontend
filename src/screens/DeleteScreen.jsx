import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MetaTags } from 'react-meta-tags'
import DeleteCard from '../components/DeleteCard'


const DeleteScreen = () => {
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
        <MetaTags>
            <title>Delete Page</title>
          </MetaTags>
        <Container fluid>
        <Row className='xs-12'>
        {products && products.map(product => (
          <DeleteCard product={product} key={product._id}/>
        ))}
        </Row>
        </Container>
        </div>
    
      )
}

export default DeleteScreen
