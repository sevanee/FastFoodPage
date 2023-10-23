import React, { useState } from 'react'

const CustomAlert = ({text}) => {

    const [alertClass,setAlertClass] = useState("alert-active");

    setTimeout(()=>{
        setAlertClass("");
    }, 10000)


  return (
    <div className={`custom-alert-container ${alertClass}`}>
        <div className="main-box">
            <div className="img-box">
                <img src="https://mcdonalds.az/images/03b40005e5a59f4a669df3fdc5086e23.png" alt="" />
            </div>

            <div className="text-box">
                <p>{text}</p>
            </div>

            <button className='btn btn-close' id='closeBtn' onClick={()=> setAlertClass("")}></button>
        </div>
    </div>
  )
}

export default CustomAlert