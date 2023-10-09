import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider=(props)=>{
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        axios.get("https://mocki.io/v1/9f6fff20-f258-400b-9612-0fcf0ccbd68f")
        .then(res => setProduct(res.data.products))   
    },[])
    
    return <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
    </ProductContext.Provider>
}