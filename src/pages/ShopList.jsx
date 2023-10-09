import React, { useContext } from 'react'
import Footer from '../components/Footer';
import { ProductContext } from '../context/productContext';
import SingleCard from '../components/SingleCard';
// import { useEffect } from 'react';
import { useState } from 'react';

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
  // useEffect(() => {
  //   filterResult('Burger');
  // }, [])

  const searchSubmited=(e)=>{
    e.preventDefault();
    setSearchvalue(query);
}
  return (
    <>
      <div className=" col">
     <div className="searchForm col-lg-4 mx-auto">
     <form onSubmit={searchSubmited}>
                   <div className="input-group mb-3">
                      <input onChange={e=>setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button className="btn btn-warning" type="submit" id="button-addon2">Search</button>
                    </div>
                   </form>
                   <ul className="list-group">
                      {query === null ? null:productdata.filter(value=>value.name.toLocaleLowerCase().includes(searchvalue)).map(i=>(
                        <a href={`/product/${i.id}`} key={i.id} className="list-group-item">{i.name}</a>

                      ))}
      
                    </ul>
     </div>
      </div>

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
      <Footer />
    </>
  )
}

export default ShopList