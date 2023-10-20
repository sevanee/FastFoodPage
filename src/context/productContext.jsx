import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider=(props)=>{
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        axios.get("https://mocki.io/v1/d987357d-2682-461e-a5e3-0d132a4e3788")
        .then(res => setProduct(res.data))   
    },[])
    
    return <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
    </ProductContext.Provider>
}