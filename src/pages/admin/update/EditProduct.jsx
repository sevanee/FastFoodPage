import React from "react";
import ProductForm from "../ProductForm";
import { Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { editProduct } from "../../../manager/actions/Action";

const EditProduct = () => {
    const {pe} = useParams();
    const productdata = useSelector(p=>p);
    const productprop = productdata.find(p=>slugify(p.title)===pe);
    const dispatch =useDispatch()
    const navigate = useNavigate()
  return (
    <div>
      <h1 className="text-center my-5">Edit Product</h1>
      <div className="d-flex justify-content-center my-5">
        <Col md={4}>
          <ProductForm editProduct={productprop}
          sendValue={(items)=>{
            dispatch(editProduct(productprop.id,items));
            navigate('/admin')}} />
          <div className="back-home">
            <Link className="btn btn-danger mt-3" to="/">
              Back to Home{" "}
            </Link>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default EditProduct;
