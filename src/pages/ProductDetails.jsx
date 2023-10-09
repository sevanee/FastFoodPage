import React, { useContext } from 'react'
import { ProductContext } from '../context/productContext';
import { useParams } from 'react-router-dom'
// import { useCart } from 'react-use-cart';
const ProductDetails = () => {
  const {url} = useParams();
  // const { addItem } = useCart();
  const [product] = useContext(ProductContext);
  const detailsData=  product.find(p=>p.id.toString() === url);
  return (
    <>
    <div className=" col-xxl-12 px-4 py-5 shop1">
        <div className="row flex-lg-row-reverse align-items-center  pb-5">
          
          <div className="col-lg-6">
            <h2 className=" fw-bold text-body-emphasis lh-1 ">{detailsData.name}</h2>
            <p className="lead text-dark mt-3">{detailsData.price} <span>$30.00</span></p>
            <p className='lorem'>{detailsData.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button  className='btn btn-warning rounded-5 text-light mt-2 fw-bold px-4 py-2 addBtn'>ADD TO CART</button>
            </div>
            <div className="agree mt-3 d-flex align-items-center">
              <input className='me-2 checkbox' type="checkbox" name="check" id="" />
              <label className='lorem mt-3' htmlFor="checkbox">I agree with the terms and conditions</label>
            </div>
            <div className='col-lg-6'>
           <button className='btn  fw-bold buyBtn'>Buy it Now!</button>
           </div>
           <p className='lorem mt-3'>Guaranteed safe checkout:</p>
           <div className='col-lg-6 d-flex paymentMethods'>
           <a href='/shop' className='nav-link'><i class="fa-brands fa-amazon"></i></a>
           <a href='/shop' className='nav-link'><i class="fa-brands fa-cc-visa"></i></a>
           <a href='/shop' className='nav-link'><i class="fa-brands fa-cc-mastercard"></i></a>
           <a href='/shop' className='nav-link'><i class="fa-brands fa-cc-paypal"></i></a>
           <a href='/shop' className='nav-link'><i class="fa-brands fa-cc-apple-pay"></i></a>
           </div>

          </div>
          
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={detailsData.image} className="d-block mx-lg-auto rounded-2 img-fluid" alt="Bootstrap Themes" width={600} height={400} loading="lazy" />
          </div>
        </div>
        <div className='col-xxl-12'>
        <div className="additional col-lg-6 mx-5 mt-3">
          <button className='btn fw-bold' >DESCRIPTION</button>
          <button className='btn fw-bold'>ADDITIONAL INFORMATION</button>
        </div>
        <div className="description col-xxl-10 mx-5 px-4 py-4 ">
          <p className='lorem'>{detailsData.description}</p>
        </div>
        <div className="description col-xxl-10 mx-5 px-4 py-4 ">
          <ul>
            <li><span>Brand:</span> ThemeForest</li>
            <li><span>Color:</span> {detailsData.color}</li>
            <li><span>Size:</span>  {detailsData.size}</li>
            <li><span>Weight:</span>  {detailsData.weight}</li>
          </ul>
        </div>
        </div>
        
      </div>

    </>


  )
}

export default ProductDetails