import React, { useContext }  from 'react'
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';
import { LangContext } from '../../context/langContext';

const Wishlist = () => {
  const { addItem } = useCart();
  const { items,removeWishlistItem}=useWishlist();
  const  [lang] = useContext(LangContext);
  return (
    <div className="wishlist pb-5">
      <div className="container ">
         <table className="table cartTable">
         <thead>
            <tr>
              <th scope="col">{lang==='en' ? 'PRODUCT' : 'MƏHSUL'}</th>
              <th scope="col">{lang==='en' ? 'NAME' : 'AD'}</th>
              <th scope="col">{lang==='en' ? 'UNIT PRICE' : 'VAHİD QİYMƏT'}</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item,c)=>{
                if(c%2==0){
                  return(
                    <tr key={item.id}>
                <th scope="row"><img width={90} src={item.image} alt="" /></th>
                <td className='name'>{item.name}</td>
                <td>${item.price}</td>
                <td><i  className="fa-regular fa-trash-can text-danger" onClick={() => removeWishlistItem(item.id)}></i></td>
                <td><i className="fa-solid fa-cart-shopping text-warning" onClick={()=> addItem(item)}></i></td>
                </tr>
                  )
                }
              })
            }

          </tbody>
         </table>
    </div>
    </div>
    
  )
}

export default Wishlist