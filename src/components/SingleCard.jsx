import React from 'react'
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { useCart } from 'react-use-cart';

const SingleCard = ({ alldata }) => {
  // const { addItem } = useCart();
  return (
    <div className=' col-sm-12 col-md-3'>
        <div className=" card" style={{width: '18rem'}}>
            <LinkContainer to={`/product/${alldata.id}`}><img  src={alldata.image} className="card-img-top" alt="..." /></LinkContainer>
            <Button className='add-to-cart rounded-0' >ADD TO CART  <i className="fa-solid fa-cart-shopping"></i> </Button>
        <div className="card-body">
          <h5 className="card-title text-center fw-bold">{alldata.name}</h5>
          <p className="lead text-dark mt-3 text-center">{alldata.price} <span>$60.50</span></p>
          <div className="rating text-center">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard