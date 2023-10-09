import React from 'react'

const MenuList = ({allmenu}) => {
  return (
        <div >
          <h3 ><a className='nav-link' href="/product">{allmenu.name} .................... <span>{allmenu.price}</span></a></h3>
          <p>{allmenu.description}</p>
         </div>
    
  )
}

export default MenuList