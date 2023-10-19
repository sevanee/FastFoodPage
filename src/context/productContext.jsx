import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider=(props)=>{
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        axios.get("https://mocki.io/v1/dc1eef6e-313b-4f27-9b12-1f5360cd2ee8")
        .then(res => setProduct(res.data))   
    },[])
    
    return <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
    </ProductContext.Provider>
}