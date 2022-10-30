import React, { useEffect , useState } from 'react'
import { Col , Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MetaTags } from 'react-meta-tags';
import { useDispatch, useSelector } from 'react-redux';
import { getIndivProductAction } from '../action/productsAction';
import LoadingComponent from '../components/LoadingComponent';

const ProductPage = () => {
    const {id} = useParams();


    const dispatch = useDispatch()

    let productObject= useSelector(state => state.productObject)
  
    let {loading , product , error} = productObject;

    useEffect(()=>{
      dispatch(getIndivProductAction(id))
    },[id])



  return (
    <div className='product-page'>
    <MetaTags>
            <title>Product Page</title>
    </MetaTags>
    {loading ? <Col xs={12}><LoadingComponent/> </Col> :  error ? "Error" : product ? <Row>
    <Col xs={12} md={6} lg={4} xl={6}>
    <Image className="product-image" src={product.url ? product.url : 'https://i.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA'} rounded></Image>
    </Col>
    <Col xs={12} md={12} lg={12}>
    <h4>Product : {product.name}</h4>
    </Col>
    <Col xs={12} md={12} lg={12}>
    <p>Description : {product.description}</p>
    </Col>
    <Col xs={12} md={12} lg={12}>
    <p>Price : &#8377; {(product.price)} / product only</p>
    </Col>
    <Col xs={12} md={12} lg={12}>
    <a href="https://api.whatsapp.com/send/?phone=919788788632" style={{"color" : "blue"}}>Click me to message in whatsapp</a> or contact me in +919788788632
    </Col>
    </Row> : " "}
    </div>
  )
}

export default ProductPage
