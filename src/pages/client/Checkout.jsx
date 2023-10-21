import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart'

const Checkout = () => {
  const navigate = useNavigate();
  const { items, cartTotal} = useCart();
  const name= document.getElementById('name');
  const surname=document.getElementById('surname');
  const email=document.getElementById('email');
  const state=document.getElementById('state');
  const zip=document.getElementById('zip');
  const formSubmit=(e)=>{
    e.preventDefault();
    if( !name.value || !surname.value || !email.value){
      alert("Fill the gap!")
    }else{
      navigate('/');
    }
  };


  if (localStorage.getItem("user")) {
    return (
      <>

        <div className="container pb-5">
          <hr />
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="billing-details">
                <h3 className="title mt-2">Billing Details</h3>
                <hr />
                <form >
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Country
                        <span className="required">*</span>
                      </label>
                      <div className="select-box my-3">
                        <select className="form-control" >
                          <option value={5}>United Arab Emirates</option>
                          <option value={1}>China</option>
                          <option value={2}>United Kingdom</option>
                          <option value={0}>Germany</option>
                          <option value={3}>France</option>
                          <option value={4}>Japan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>First Name
                        <span className="required">*</span>
                      </label>
                      <input type="text" id='name' className="form-control my-3 " required/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Last Name
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control my-3 " id='surname' required/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" id='company' className="form-control my-3" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>Address
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control my-3" id='address' required/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>Town / City
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control my-3"id='city' required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>State / County
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control my-3" id='state' required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Postcode / Zip
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control my-3" id='zip' required/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Email Address
                        <span className="required">*</span>
                      </label>
                      <input type="email" className="form-control my-3" id='email' required/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Phone
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control my-3" id='phone' required/>
                    </div>
                  </div>
            
                </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="order-details">
                <h3 className="title mt-2">Your Order</h3>
                <hr />
                <div className="order-table table-responsive mb-4">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        items.map((cardItem) => {
                          console.log(cardItem);
                          return (
                            <tr>
                        <td className="product-name">
                          <a href="/product" className='nav-link'>{cardItem.name}</a>
                        </td>
                        <td className="product-total">
                          <span className="subtotal-amount">${cardItem.price}</span>
                        </td>
                      </tr>
                            

                          )
                        })
                      }
                      <tr>
                              <td className="total-price">
                                <span>Order Total</span>
                              </td>
                              <td className="product-subtotal">
                                <span className="subtotal-amount">${cartTotal}</span>
                              </td>
                            </tr>
                    </tbody>
                  </table>
                </div>
                <div className="payment-box">
                  <div className="payment-method">
                    <p className='name'>
                      <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                      <label htmlFor="direct-bank-transfer" className='fw-bold ms-3 mb-3 text-dark'>Direct Bank Transfer</label> <br />
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                    <p>
                      <input type="radio" id="paypal" name="radio-group" />
                      <label htmlFor="paypal" className='fw-bold ms-3'>PayPal</label>
                    </p>
                    <p>
                      <input type="radio" id="cash-on-delivery" name="radio-group" />
                      <label htmlFor="cash-on-delivery" className='fw-bold ms-3'>Cash on Delivery</label>
                    </p>
                  </div>
                 <LinkContainer to='/thank'> <button type='submit' className='btn btn-warning  fw-bold  py-2 px-5 rounded-5 updateBtn mt-2 col-lg-12' >PLACE ORDER</button></LinkContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  } else {
    return (
      <LinkContainer to='/authorization'>
        <div className="btn-div my-5 d-flex justify-content-center">
          <button className='mt-5 btn btn-danger text-light fw-bold '>Login</button>

        </div>
      </LinkContainer>
    )
  }

}

export default Checkout