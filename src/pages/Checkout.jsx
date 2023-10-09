import React from 'react'
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <>
    
     <div className="container ">
     <hr />
      <div className="row">
      <div className="col-lg-6 col-md-12">
        <div className="billing-details">
          <h3 className="title mt-2">Billing Details</h3>
          <hr />
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
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Last Name 
                  <span className="required">*</span>
                </label>
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="form-group">
                <label>Address 
                  <span className="required">*</span>
                </label>
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="form-group">
                <label>Town / City 
                  <span className="required">*</span>
                </label>
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>State / County 
                  <span className="required">*</span>
                </label>
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Postcode / Zip 
                  <span className="required">*</span>
                </label>
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Email Address 
                  <span className="required">*</span>
                </label>
                <input type="email" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Phone 
                  <span className="required">*</span>
                </label>
                <input type="text" className="form-control my-3" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="create-an-account" />
                <label className="form-check-label mb-3 fw-bold" htmlFor="create-an-account">Create an account?</label>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="ship-different-address" />
                <label className="form-check-label mb-3 fw-bold" htmlFor="ship-different-address">Ship to a different address?</label>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea name="notes" id="notes" cols={30} rows={5} placeholder="Order Notes" className="form-control" defaultValue={""} />
              </div>
            </div>
          </div>
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
                <tr>
                  <td className="product-name">
                    <a href="/product" className='nav-link'>Dungeon Burgers</a>
                  </td>
                  <td className="product-total">
                    <span className="subtotal-amount">$455.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="product-name">
                    <a href="/product" className='nav-link'>Pit Master Burgers</a>
                  </td>
                  <td className="product-total">
                    <span className="subtotal-amount">$541.50</span>
                  </td>
                </tr>
                <tr>
                  <td className="product-name">
                    <a href="/product" className='nav-link'>Backyard Burgers</a>
                  </td>
                  <td className="product-total">
                    <span className="subtotal-amount">$140.50</span>
                  </td>
                </tr>
                <tr>
                  <td className="product-name">
                    <a href="/product" className='nav-link'>Burger Ferguson</a>
                  </td>
                  <td className="product-total">
                    <span className="subtotal-amount">$547.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="order-subtotal">
                  <a href="/product" className='nav-link'>Rockin' Burgers</a>
                  </td>
                  <td className="order-subtotal-price">
                    <span className="order-subtotal-amount">$1683.50</span>
                  </td>
                </tr>
                <tr>
                  <td className="order-shipping">
                  <a href="/product" className='nav-link'>CrazyBurger</a>
                  </td>
                  <td className="shipping-price">
                    <span>$30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="total-price">
                    <span>Order Total</span>
                  </td>
                  <td className="product-subtotal">
                    <span className="subtotal-amount">$1713.50</span>
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
            <button className='btn btn-warning  fw-bold  py-2 px-5 rounded-5 updateBtn mt-2 col-lg-12'>PLACE ORDER</button>
          </div>
        </div>
      </div>
      </div>
     </div>

     <Footer />
    </>
  )
}

export default Checkout