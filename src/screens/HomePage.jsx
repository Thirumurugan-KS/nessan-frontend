import React, { useEffect, useState } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import axios from 'axios';
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../action/productsAction';
import LoadingComponent from '../components/LoadingComponent';

const HomePage = () => {

  const dispatch = useDispatch()

  let productsArray= useSelector(state => state.productsArray)

  let {loading , products , error} = productsArray;

  useEffect(()=>{

    dispatch(getProductsAction());
    

  }, [])

  return (
    <div className='home-page'>
    <MetaTags>
            <title>Home Page</title>
    </MetaTags>
    {loading ? <LoadingComponent/> : error ? "Error" : products && 
   <Container fluid>
    <Row className='xs-12'>
    {products && products.map(product => (
      <ProductCard product={product} key={product._id}/>
    ))}
    </Row>
    </Container>}
    </div>

  )
}

export default HomePage
