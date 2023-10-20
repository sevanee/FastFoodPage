import React, { useContext } from 'react'
import SingleCard from "../../components/SingleCard"
import { useState } from 'react';
import { ProductContext } from '../../context/productContext';

const ShopList = () => {
  const [productdata] = useContext(ProductContext);
  const [catData, setCatData] = useState(productdata);
  const [query,setQuery] = useState(null);
  const [searchvalue,setSearchvalue] = useState(null);

  const filterResult = (catItem) => {
    const result = productdata.filter(cd => (
      cd.title === catItem
    ))
    setCatData(result);
  }

  const searchSubmited=(e)=>{
    e.preventDefault();
    setSearchvalue(query);
}
  return (
    <>


        <div className="mt-5 container shopList row">
          
        <div className="col-sm col-md-2 ">
        <ul className="list-group border border-warning fw-bold">
          <li className="list-group-item border border-warning" onClick={()=>{filterResult('Burger')}}>Burger</li>
          <li className="list-group-item border border-warning" onClick={()=>{filterResult('Chicken Pcs')}}>Chicken Pieces</li>
          <li className="list-group-item border border-warning" onClick={()=>{filterResult('Snack')}}>Snack</li> 
          <li className="list-group-item border border-warning" onClick={()=>{filterResult('Wedges')}}>Wedges</li>
          <li className="list-group-item border border-warning" onClick={()=>{filterResult('Beverage')}}>Beverage</li>
          <li className="list-group-item border border-warning" onClick={()=>{filterResult('Coffee')}}>Coffee</li>
          <li className="list-group-item border border-warning" onClick={()=>{filterResult('Tea')}}>Tea</li>
         
          
        </ul>
        </div>

        <div className="col-lg-10 col-sm-12">
          <div className="row ms-5">

{productdata.length === 0 ? <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err' /> : catData.length === 0 ?  productdata.map(item => (
              <SingleCard key={item.id} alldata={item} />

            )): catData.map(item => (
              <SingleCard key={item.id} alldata={item} />

            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default ShopList