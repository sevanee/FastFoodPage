import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { removeProduct } from '../../manager/actions/Action'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Dashboard = () => {
//   const productdata =useSelector(p=>p)
//   const dispatch =useDispatch()
  return (
    <div>
      <h1 className='text-center my-5'>Admin Panel</h1>
      <Container>
        <LinkContainer to="add"><Button className='mb-3'>Add</Button></LinkContainer>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Image</th>
          <th>Product</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* {productdata.map((item,count)=>(
          <tr key={count}>
            <td>{count+1}</td>
            <td><img width={150} src={item.image} alt="error" /></td>
            <td>{item.description}</td>
            <td>Otto</td>
            <td><Link to={`edit/${slugify(item.name)}`}><Button>Edit</Button></Link></td>
            <td><Button onClick={()=>{dispatch(removeProduct({id:item.id}))}}>Delete</Button></td>
          </tr>
        ))} */}
        
      </tbody>
    </Table>

    
    <Link className='btn btn-danger my-3' to="/">Back to Home </Link>
      </Container>
    </div>
  )
}

export default Dashboard