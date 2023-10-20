import React from 'react'
import ProductForm from '../ProductForm'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { addProduct } from '../../../manager/actions/Action'


const AddProduct = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate()
 
  return (
    <div>
      <h1 className='text-center my-5'>Add Product</h1>
      <div  className='d-flex justify-content-center my-5'>
      <Col md={4}>

       
        <ProductForm sendValue={(items)=>{
          dispatch(addProduct(items))
          navigate('/admin')
        }}/>
        <div className="back-home">
        </div>
      
      </Col>
      
      </div>
    </div>
  )
}

export default AddProduct;