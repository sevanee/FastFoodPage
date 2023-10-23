import React from 'react'

const SignUp = () => {
  return (
         <div className="signup-area pt-5">
        <div className="container d-flex justify-content-center">
          <div className="signup-form col-lg-6">
            
            <form className='p-4'>
            <h3 className='text-center'>Create Your Account</h3>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Password" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkme" />
                    <label className="form-check-label" htmlFor="checkme">Keep Me Sign Up</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="send-btn">
                    <button type="#" className="default-btn">
                      Sign Up Now
                      <span />
                    </button>
                  </div>
                  <br />
                  <span>Already a registered user? <a href="sign-in.html">Signin!</a></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignUp