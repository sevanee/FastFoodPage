import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorizationPage = () => {
    const navigate = useNavigate();

    const users=[
        {
            user_mail:"sevane2004@gmail.com",
            user_name: "Sevane",
            user_pass:"1234",
            user_status:"admin"
        },
        {
            user_mail:"mahammad@gmail.com",
            user_name: "Mahammad",
            user_pass:"12345",
            user_status:"user"
        },
        {
            user_mail:"ali@gmail.com",
            user_name: "Ali",
            user_pass:"123456",
            user_status:"user"
        }
    ]
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        const currentUser = users.find((user)=> user.user_mail === email);
        console.log(currentUser,"userDefined");
        if(!email || !pass){
            alert("Fill the gap!")
        }else{
            if (currentUser === undefined){
                alert("It is wrong!")
            }else{

            if(email == currentUser.user_mail && pass === currentUser.user_pass){
                alert("It is true!")
                localStorage.setItem("user", JSON.stringify(currentUser))
                if(currentUser.user_status === 'admin'){
                    navigate('/admin')
                }else{
                navigate('/cart')
                }

                window.location.reload();

            }
            else{
                alert("It is wrong!")
            }
        }

        }
    }


    return (
        <div className=' d-flex align-items-center justify-content-center my-5'>
            <div className='col-lg-6 col-sm-4'>
            <h2 className='mt-5 text-danger z-5 text-center'>Sign In</h2>
            <form onSubmit={handleSubmit} >


<div className="input-group mb-3 py-5">
    <span className="input-group-text" id="basic-addon1">Email</span>
    <input type="text" className="form-control" placeholder="Username" 
        onChange={(e)=>{
            setEmail(e.target.value);
        }}
     />
</div>

<div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">Password</span>
    <input type="pass" className="form-control" placeholder="Password" 
         onChange={(e)=>{
            setPass(e.target.value);
        }}
     />
</div>

<button type='submit' className='btn btn-warning fw-bold text-light'>Send</button>
</form>
            </div>
           

        

        </div>
    )
}

export default AuthorizationPage