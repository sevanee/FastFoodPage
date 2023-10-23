import React, { useContext } from "react";
import ProductForm from "../ProductForm";
import { Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { LangContext } from '../../../context/langContext';
import { editProduct, editProductsFromDatabase } from "../../../manager/actions/Action"

const EditProduct = () => {
  const  [lang] = useContext(LangContext);
    const {pe} = useParams();
    const productdata = useSelector(p=>p);
    const productprop = productdata.find(p=>slugify(p.title)===pe);
    const dispatch =useDispatch()
    const navigate = useNavigate()
  return (
    <div className="editPage">
      <h1 className="text-center py-5">{lang==='en' ? 'Edit Product' : 'Redaktə Et'}</h1>
      <div className="d-flex justify-content-center py-5">
        <Col md={4}>
          <ProductForm editProduct={productprop}
          sendValue={(items)=>{
            dispatch(editProductsFromDatabase(productprop.id,items));
            navigate('/admin')}} />
          <div className="back-home">
            <Link className="btn btn-danger mt-3" to="/">
            {lang==='en' ? 'Back To Home' : 'Ana Səhifəyə Qayıt'}{" "}
            </Link>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default EditProduct;
