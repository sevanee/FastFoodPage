// import { v4 as uuid} from 'uuid'
import database from '../../firebase/firebaseConfig';

export const addProduct = (products) => ({
  type: "Add_Product",
  products
})

export const addProductsToDatabase = (productData = {}) => {
  return (dispatch) => {
      const { title='', desc='',img='' } = productData;
      const products = {title,desc,img};

      database.ref("product").push(products).then((res) => {
          dispatch(addProduct({
              id: res.key,
              ...products
          }))
      })
  }
}


export const editProduct = (id,update) => ({
  type: "Edit_Product",
  id,
  update
})

export const editProductsFromDatabase = (id, update) => {
  return (dispatch) => {
      return database.ref(`product/${id}`).update(update).then(() => {
          dispatch(editProduct(id,update));
      })
  }
}


export const removeProduct = (id) => ({
  type: "Remove_Product",
  id: id
});

export const removeProductsFromDatabase = (id) => {
  return (dispatch) => {
      return database.ref(`product/${id}`).remove().then(() => {
          dispatch(removeProduct(id));
      })
  }   
}

export const getProductsFromDatabase = () => {
  return (dispatch) => {
      return database.ref("product").once("value").then((snapshot) => {
          const product = [];

          snapshot.forEach((products) => {
              product.push({
                  id: products.key,
                  ...products.val()
              })
          })

      })
  }
}