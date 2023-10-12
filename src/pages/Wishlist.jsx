import React  from 'react'
import { useWishlist } from 'react-use-wishlist';


const Wishlist = () => {
  const { items,removeWishlistItem}=useWishlist();
  return (
    <div className="container mt-5 wishlist">
         <table className="table cartTable">
         <thead>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">NAME</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item,c)=>{
                if(c%2==0){
                  return(
                    <tr>
                <th scope="row"><img width={90} src={item.image} alt="" /></th>
                <td className='name'>{item.name}</td>
                <td>${item.price}</td>
                <td><i  className="fa-regular fa-trash-can text-danger" onClick={() => removeWishlistItem(item.id)}></i></td>
                
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