import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormUpload = () => {

    const [name , setName] = useState("")
    const [description , setDescription] = useState("")
    const [price , setPrice] = useState("")
    const [file , setFile] = useState()

    const formSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('image', file)
        if(name && description && price && file)
        {
            let {data} = await axios.post("https://nessan-backend.onrender.com/product/insert" , formData );

            alert(data);
        }
    }

    const onFileChange = (e) =>{
        setFile(e.target.files[0])
    }

  return (
    <div className='file-upload'>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>setName(e.target.value)} required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicDEscription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)} required/>
          </Form.Group>
          <Form.Group controlId="formBasicFile" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" onChange={onFileChange}/>
      </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  )
}

export default FormUpload
