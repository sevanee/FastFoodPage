import { v4 as uuid} from 'uuid'

export const addProduct=({id,title,desc,img})=>({
    type:"Add_Product",
    value:{
      id:uuid(),
      title:title,
      desc:desc,
      img:img
    }
})

export const editProduct=(id,update)=>({
  type:"Edit_Product",
  id,
  update
})


export const removeProduct=({id})=>({
  type:"Remove_Product",
  id:id

})