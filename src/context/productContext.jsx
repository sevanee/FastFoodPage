import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider=(props)=>{
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        axios.get("https://mocki.io/v1/98b0598c-78d9-49f7-9e90-3019e92ff33a")
        .then(res => setProduct(res.data))   
    },[])
    
    return <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
    </ProductContext.Provider>
}