import React, { useContext } from 'react'
import ProductForm from '../ProductForm'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { addProduct } from '../../../manager/actions/Action'
import { LangContext } from '../../../context/langContext';


const AddProduct = () => {
  const  [lang] = useContext(LangContext);
  const dispatch =useDispatch()
  const navigate = useNavigate()
 
  return (
    <div className='addPage'>
      <h1 className='text-center py-5'>{lang==='en' ? 'Add Product' : 'Məhsul Əlavə Edin'}</h1>
      <div  className='d-flex justify-content-center py-5'>
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