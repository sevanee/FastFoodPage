import React, { useContext, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart'
import { LangContext } from '../../context/langContext';

const Cart = () => {
  const { items , updateItemQuantity , cartTotal , removeItem} = useCart();
  const  [lang] = useContext(LangContext);
  const [coupon,setCoupon]=useState(['']);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const appplyCouponCode = (e) => {
    setCoupon(e.target.value);
  };
  const applyCoupon = () => {
   const validCode='Burger30';
   if(coupon===validCode){
    const discount=30;
    const discountedTotal=cartTotal-discount;
    setAppliedCoupon(discountedTotal);
   }else{
    alert('Invalid coupon code. Please try again.')
   }
  };
  if(localStorage.getItem('user')){
    return (
      <div className='cartPage'>
        <div className="container ">
  
          <table className="table cartTable pt-5">
            <thead>
              <tr>
              <th scope="col">{lang==='en' ? 'PRODUCT' : 'MƏHSUL'}</th>
              <th scope="col">{lang==='en' ? 'NAME' : 'AD'}</th>
              <th scope="col">{lang==='en' ? 'UNIT PRICE' : 'VAHİD QİYMƏT'}</th>
                <th scope="col">{lang==='en' ? 'QUANTITY' : 'MİQDAR'}</th>
                <th scope="col">{lang==='en' ? 'TOTAL' : 'ÜMUMİ'}</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr>
                  <th scope="row"><img width={90} src={item.image} alt="" /></th>
                  <td className='name'>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                   
                    <div className="countBtn">
                      <button className='btn decreaseBtn' onClick={()=>{
                        if(item.quantity>1)
                        updateItemQuantity(item.id , item.quantity - 1)
                      }}>-</button>
                      <span className='mx-2'>{item.quantity}</span>
                      <button className='btn increaseBtn' onClick={()=>{
                        updateItemQuantity(item.id , item.quantity + 1)
                      }}>+</button>
                    </div>
                  </td>
                  <td>${item.itemTotal}</td>
                  <td><i  className="fa-regular fa-trash-can text-warning" onClick={()=> removeItem(item.id) }></i></td>
                     
                </tr>
              ))}
  
            </tbody>
          </table>
          <div >
            <div className="col-lg-12 d-flex align-items-center my-4 ms-5 justify-content-center">
              <div className="col-lg-6 col-md-7 col-sm-6">
                <form onSubmit={applyCoupon}>
                <div >
                  <input placeholder={lang==='en' ? 'Coupon code' : 'Kupon kodu'} type="text" className='coupon px-5 py-3 mt-2 border border-warning' value={coupon} onChange={appplyCouponCode}/>
                  <button className='btn btn-warning text-light fw-bold rounded-0 py-3 px-3 mb-1 applyBtn' >{lang==='en' ? 'APPLY COUPON' : 'KUPON MÜRACİƏT EDİN'}</button>
                </div>
                </form>
                
              </div>
            </div>
          </div>
  
          <div className="col-lg-12 totalCart">
            <div className="col-lg-5 col-md-3 cartTotals my-5">
              <h3 className='fw-bold mb-4'>{lang==='en' ? 'Cart Totals' : 'Səbət Cəmi'}</h3>
              <table className='table border '>
                <tbody>
                  <tr>
                    <th >{lang==='en' ? 'Total' : 'Ümumi'}</th>
                    <td className='name'>${cartTotal}</td>
                  </tr>
                  <tr>
                    <th>{lang==='en' ? 'Shipping' : 'Göndərmə'}</th>
                    <td className='name'>$30.00</td>
                  </tr>
                  <tr>
                    <th>{lang==='en' ? 'Discounted Total' : 'Endirimli Cəm'}</th>
                    <td className='name'>${appliedCoupon}</td>
                  </tr>
                </tbody>
              </table>
              <LinkContainer to='/checkout'>
                <button className='btn btn-warning  fw-bold  py-3 px-5 rounded-5 updateBtn mt-2'>{lang==='en' ? 'PROCEED TO CHECKOUT' : 'ÖDƏNİŞƏ DAVAM EDİN'}</button>
              </LinkContainer>
            </div>
          </div>
        </div>
  
      </div>
    )

  }else{
    return(
      <div className="container d-flex align-items-center justify-content-center">
<LinkContainer to='/authorization'><h2 className='mt-5 py-5 btn  text-danger fs-1 fw-bold p-2'>{lang==='en' ? 'Sign In' : 'Daxil Ol'}</h2></LinkContainer>
      </div>
      
      

    )
  }
}

export default Cart