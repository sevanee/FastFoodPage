import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const ProductForm = ({sendValue,editProduct}) => {
  const [title, setTitle] = useState(editProduct? editProduct.title : "" );
  const [photo, setPhoto] = useState(editProduct? editProduct.img : "");
  const [description, setDescription] = useState(editProduct? editProduct.desc : "");

  const productSubmited = (event) => {
    event.preventDefault();


    sendValue({
      photo: photo,
      title: title,
      desc: description,
    });
  };
  return (
    <Form onSubmit={productSubmited}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Title"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Photo</Form.Label>
        <Form.Control
          value={photo}
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
          type="text"
          placeholder="Photo url"
        />
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="Description">
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <Button className="mt-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProductForm;
