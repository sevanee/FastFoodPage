import React from 'react'
import Footer from '../components/Footer';
import { LinkContainer } from 'react-router-bootstrap';
// import { useCart } from 'react-use-cart'

const Cart = () => {
  // const { removeItem, items } = useCart();
  return (
    <>
      <div className="container mt-5">

        <table className="table cartTable">
          <thead>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">NAME</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* {items.map(item => (
              <tr>
                <th scope="row"><img width={90} src={item.image} alt="" /></th>
                <td className='name'>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <div className="countBtn">
                    <button className='btn decreaseBtn'>-</button>
                    <span className='mx-2'>1</span>
                    <button className='btn increaseBtn'>+</button>
                  </div>
                </td>
                <td>$455.00</td>
                <td><i  className="fa-regular fa-trash-can text-warning" ></i></td>
              </tr>
            ))} */}

          </tbody>
        </table>
        <div >
          <div className="col-lg-12 d-flex align-items-center my-4 ms-5 justify-content-center">
            <div className="col-lg-6 col-md-7 col-sm-6">
              <div >
                <input placeholder='Coupon code' type="text" className='coupon px-5 py-3 mt-2 border border-warning' />
                <button className='btn btn-warning text-light fw-bold rounded-0 py-3 px-3 mb-1 applyBtn'>APPLY COUPON</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 totalCart">
          <div className="col-lg-5 col-md-3 cartTotals my-5">
            <h3 className='fw-bold mb-4'>Cart Totals</h3>
            <table className='table border '>
              <tbody>
                <tr>
                  <th >Subtotal</th>
                  <td className='name'>$1683.50</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td className='name'>$30.00</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td className='name'>$1713.50</td>
                </tr>
              </tbody>
            </table>
            <LinkContainer to='/checkout'>
              <button className='btn btn-warning  fw-bold  py-3 px-5 rounded-5 updateBtn mt-2'>PROCEED TO CHECKOUT</button>
            </LinkContainer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart