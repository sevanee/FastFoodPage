import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const NotFoundPage = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'>
     <img width={800} src="https://templates.envytheme.com/handout/default/assets/img/404.png" alt="" />
     <h1 className='fw-bold text-primary py-4'>Page Not Found</h1>
     <LinkContainer to='/'><button className='btn btn-warning fw-bold mb-5 text-light'>Go to Home</button></LinkContainer>
    </div>
  )
}

export default NotFoundPage