import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { LangContext } from '../../context/langContext';
import { ProductContext } from '../../context/productContext';
import { Button } from 'react-bootstrap';
const ProductDetails = () => {
  const { addWishlistItem ,getWishlistItem ,removeWishlistItem} = useWishlist();
  const  [lang] = useContext(LangContext);
  const {url} = useParams();
  const { addItem } = useCart();
  const [product] = useContext(ProductContext);
  const detailsData=  product.find(p=>p.id.toString() === url);
  if(!detailsData){
    return(
      <h2>Loading</h2>
    )}else{
      return (
        <>
        <div className=" col-xxl-12 px-4 pb-5 shop1">
            <div className="row flex-lg-row-reverse align-items-center  pb-5">
              
              <div className="col-lg-6">
                <h2 className=" fw-bold text-body-emphasis lh-1 ">{detailsData.name}</h2>
                <p className="lead text-dark mt-3">${detailsData.price} <span>$30.00</span></p>
                <p className='lorem'>{detailsData.description}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button  className='btn btn-warning rounded-5 text-light mt-2 fw-bold px-4 py-2 addBtn' onClick={()=>addItem(detailsData)}>{lang==='en' ? 'ADD TO CART' : 'Səbətə Əlavə Et'}</button>
                  <Button className='btn btn-light wishButton ' onClick={()=>{if(getWishlistItem(detailsData.id)!==undefined){
            removeWishlistItem(detailsData.id);
          }else{
            addWishlistItem(detailsData);
          }}}><i className="fa-solid fa-heart text-danger"></i></Button>
                </div>
               <p className='lorem mt-3'>{lang==='en' ? 'Guaranteed safe checkout:' : 'Zəmanətli təhlükəsiz ödəniş:'}</p>
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
            <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button btn btn-warning text-center" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {lang==='en' ? 'REVIEWS' : 'ŞƏRHLƏR'}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <strong>{detailsData.review_name}:</strong> {detailsData.review_content}
            </div>
          </div>
        </div>
      
            </div>
            <div className=" accordion-item col-lg-6 mx-5 px-4 py-4 ">
          <h2 className="accordion-header">
            <button className="accordion-button btn btn-warning text-center p-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
            {lang==='en' ? 'DESCRIPTION' : 'TƏSVİRİ'}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
            <div className="accordion-body">
            <div className="description ">
              <ul>
                <li><span>{lang==='en' ? 'Brand:' : 'Marka:'}</span> ThemeForest</li>
                <li><span>{lang==='en' ? 'Color:' : 'Rəng:'}</span> {detailsData.color}</li>
                <li><span>{lang==='en' ? 'Size:' : 'Ölçü:'}</span>  {detailsData.size}</li>
                <li><span>{lang==='en' ? 'Weight:' : 'Çəki:'}</span>  {detailsData.weight}</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
            </div>
            
          </div>
    
        </>
    
    
      )
    }
  
  
}

export default ProductDetails