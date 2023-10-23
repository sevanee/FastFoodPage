import React, { useContext, useEffect } from "react";
import SingleCard from "../../components/SingleCard";
import { useState } from "react";
import { ProductContext } from "../../context/productContext";
import { LangContext } from '../../context/langContext';

const ShopList = () => {
  const [productdata] = useContext(ProductContext);
  const [catData, setCatData] = useState(productdata);
  const  [lang] = useContext(LangContext);
  const [query, setQuery] = useState(null);
  const [searchvalue, setSearchvalue] = useState(null);

  const filterResult = (catItem) => {
    const result = productdata.filter((cd) => cd.title === catItem);
    setCatData(result);
  };

  const searchSubmited = (e) => {
    e.preventDefault();
    setSearchvalue(query);
  };
  const [sortState, setSortState] = useState(false);

    useEffect(()=>{
      if(productdata.length !==0){
        setCatData(productdata)
      }
    },[productdata])


  return (
    <>
     <div className="shopPage ">
     <div className=" col pt-4 searchForm ">
        <div className=" col-lg-4 mx-auto ">
          <form onSubmit={searchSubmited}>
            <div className="input-group mb-3">
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter product"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-warning"
                type="submit"
                id="button-addon2"
              >
                {lang==='en' ? 'Search' : 'Axtar'}
              </button>
            </div>
          </form>
          <ul className="list-group">
            {query === null
              ? null
              : productdata
                  .filter((value) =>
                    value.name.toLocaleLowerCase().includes(searchvalue)
                  )
                  .map((i) => (
                    <a
                      href={`/product/${i.id}`}
                      key={i.id}
                      className="list-group-item"
                    >
                      {i.name}
                    </a>
                  ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 container shopList row">
        <div className="col-12 col-sm-12 col-lg-2">
          <ul className="list-group border border-warning fw-bold">
            <li
              className="list-group-item border border-warning"
              onClick={() => {
                filterResult("Burger");
              }}
            >
              Burger
            </li>
            <li
              className="list-group-item border border-warning"
              onClick={() => {
                filterResult("Chicken Pcs");
              }}
            >
              {lang==='en' ? 'Chicken Pieces' : 'Toyuq Hissələri'}
            </li>
            <li
              className="list-group-item border border-warning"
              onClick={() => {
                filterResult("Snack");
              }}
            >
              {lang==='en' ? 'Snack' : 'Qəlyənaltı'}
            </li>
            <li
              className="list-group-item border border-warning"
              onClick={() => {
                filterResult("Wedges");
              }}
            >
              {lang==='en' ? 'Wedges' : 'Kənd Kartofu'}
            </li>
            <li
              className="list-group-item border border-warning"
              onClick={() => {
                filterResult("Beverage");
              }}
            >
              {lang==='en' ? 'Beverage' : 'İçki'}
            </li>
            <li
              className="list-group-item border border-warning"
              onClick={() => {
                filterResult("Coffee");
              }}
            >
              {lang==='en' ? 'Coffee' : 'Kofe'}
            </li>
            <li
              className="list-group-item border border-warning"
              onClick={() => {
                filterResult("Tea");
              }}
            >
              {lang==='en' ? 'Tea' : 'Çay'}
            </li>
          </ul>

          <button
            className="btn btn-warning text-white mt-3"
            onClick={(e) => {
              if (sortState == false) {
                setSortState(true);
                e.currentTarget.innerHTML = "from high to low";
                setCatData(
                  catData.sort((a,b)=> a.price - b.price)
                )
              }else{
                setSortState(false)
                e.currentTarget.innerHTML = "from low to high";
                setCatData(
                  catData.sort((a,b)=> b.price - a.price)
                )
              }
            }}
          >
           from low to high
          </button>
        </div>

        <div className="col-12 col-sm-12 col-lg-10">
          <div className="row g-5">
            {catData.length === 0 ? (
              <img
                src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
                alt="err"
              />
            ) : (
              catData.map((item) => <SingleCard key={item.id} alldata={item} />)
            )}
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default ShopList;