import React  from 'react'
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';

const Wishlist = () => {
  const { addItem } = useCart();
  const { items,removeWishlistItem}=useWishlist();
  return (
    <div className="container wishlist">
         <table className="table cartTable">
         <thead>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">NAME</th>
              <th scope="col">UNIT PRICE</th>
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
  )
}

export default Wishlist