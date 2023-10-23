import React, { useContext, useState } from 'react'
import { v4 as uuid} from 'uuid'
import { LangContext } from '../../context/langContext';

const SignUp = () => {

  const [passHidden,setPassHidden] = useState(true);
  const  [lang] = useContext(LangContext);

  const [singUpFormData] = useState({
    id: uuid(),
    username: "",
    email: "",
    password: "",
  })

  return (
    <div className="signup-area pt-5 pb-5">
           {passHidden}
        <div className="container d-flex justify-content-center">
          <div className="signup-form col-lg-6">
            
            <form className='p-4'>
            <h3 className='text-center mb-4'>{lang==='en' ? 'Create Your Account' : 'Hesabınızı Yaradın'}</h3>
              <div className="row">
                <div className="col-lg-12 my-2">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder={lang==='en' ? 'Username' : 'Istifadəçi Adı'} />
                  </div>
                </div>
                <div className="col-lg-12 my-2">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-12 my-2">
                  <div className="input-group mb-3">
                      <span className="input-group-text">
                          <i className={`fa-solid fa-eye${passHidden ? "" : "-slash"}`} onClick={()=>{
                            setPassHidden(!passHidden);
                          }}></i>
                      </span>
                      <input type={`${passHidden ? "password" : "text"}`} className="form-control" placeholder={lang==='en' ? 'Password' : 'Şifrə'}   />
                   </div>
                </div>
                <div className="col-lg-12 my-2">
                  <div className="send-btn">
                    <button type="submit" className="orderBtn">
                    {lang==='en' ? 'SIGN UP NOW' : 'İNDİ QEYD OLUN'} 
                      <span />
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignUp