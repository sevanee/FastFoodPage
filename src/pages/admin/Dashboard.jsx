import React, { useContext } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { LangContext } from '../../context/langContext';
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import {  removeProductsFromDatabase } from '../../manager/actions/Action';

const Dashboard = () => {
  const productdata =useSelector(p=>p)
  const  [lang] = useContext(LangContext);
  const dispatch =useDispatch()
  return (
    <div className='adminPanel'>
      <h1 className='text-center py-5'>{lang==='en' ? 'Admin Panel' : 'İdarəetmə Paneli'}</h1>
      <Container>
        <LinkContainer to="add"><Button className='mb-3 btn-warning fw-bold'>{lang==='en' ? 'Add' : 'Əlavə Et'}</Button></LinkContainer>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>{lang==='en' ? 'Image' : 'Şəkil'}</th>
          <th>{lang==='en' ? 'Product' : 'Məhsul'}</th>
          <th>{lang==='en' ? 'Description' : 'Təsvir'}</th>
          <th>{lang==='en' ? 'Edit' : 'Düzəliş et'}</th>
          <th>{lang==='en' ? 'Delete' : 'Sil'}</th>
        </tr>
      </thead>
      <tbody>
        {productdata.map((item,count)=>(
          <tr key={count}>
            <td>{count+1}</td>
            <td><img width={150} src={item.img} alt="error" /></td>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td><Link to={`edit/${slugify(item.title)}`}><Button>Edit</Button></Link></td>
            <td><Button onClick={()=>{dispatch(removeProductsFromDatabase({id:item.id}))}}>{lang==='en' ? 'Delete' : 'Sil'}</Button></td>
          </tr>
        ))}
        
      </tbody>
    </Table>

    
    <Link className='btn btn-danger my-3' to="/">{lang==='en' ? 'Back to Home' : 'Ana Səhifəyə Qayıt'} </Link>
      </Container>
    </div>
  )
}

export default Dashboard