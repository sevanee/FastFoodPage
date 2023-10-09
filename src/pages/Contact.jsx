import React from 'react'
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
     <div className="container mt-5">

{/* Section 1 */}
<div className="row align-items-center contact1 mb-5 ">
    <div className="col-lg-3 col-md-6 box1 ">
    <i className="fa-solid fa-earth-americas fs-1 text-danger"></i>
    <p className='name fs-6 mt-3'>54 Hegmann Uninuo Apt. 890, New York, NY 10018, United States.</p>
    </div>
    <div className="col-lg-4 col-md-6 dates box1  ">
        <ul>
            <li className='name'>Sunday 
              
                <span className='ms-5'>Closed</span>  <div className="lines"></div>
            </li>
            <li className='name'>Monday 
            
                <span className='ms-5'>8.00-20.00</span><div className="lines"></div>
            </li>
            <li className='name'>Tuesday 
            
                <span className='ms-5'>10.00-5.00</span><div className="lines"></div>
            </li>
            <li className='name'>Wednesday 
            
                <span className='ms-5'>12.00-9.00</span><div className="lines"></div>
            </li>
            <li className='name'>Friday 
            
                <span className='ms-5'>3.00-1.00</span><div className="lines"></div>
            </li>
            <li className='name'>Saturday 
         
                <span className='ms-5'>9.00-12.00</span>   <div className="lines"></div>
            </li>
        </ul>
    </div>
    <div className="col-lg-3 col-md-6 box1">
    <i className="fa-solid fa-phone-volume fs-1 text-danger"></i>
    <a href="/" className='nav-link name mt-3'>+(06) – 543 213 4567</a>
    <a href="/" className='nav-link name mt-1'>Email.support@handout.com</a>
    </div>
</div>

{/* Section 2 */}
 <div className="contact2">
    <p className='welcome text-warning fs-5'>Contuct Us</p>
    <h2 className='fw-bold mb-4'>Contact With Us</h2>
 <form id="contactForm" noValidate="true">
<div className="row">
  <div className="col-lg-6 col-md-12">
    <div className="form-group">
      <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
      <div className="help-block with-errors" />
    </div>
  </div>
  <div className="col-lg-6 col-md-12">
    <div className="form-group">
      <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
      <div className="help-block with-errors" />
    </div>
  </div>
  <div className="col-lg-6 col-md-12">
    <div className="form-group">
      <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone" />
      <div className="help-block with-errors" />
    </div>
  </div>
  <div className="col-lg-6 col-md-12">
    <div className="form-group">
      <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
      <div className="help-block with-errors" />
    </div>
  </div>
  <div className="col-lg-12 col-md-12">
    <div className="form-group has-error">
      <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
      <div className="help-block with-errors"><ul className="list-unstyled"><li className='my-2 text-danger'>Write your message</li></ul></div>
    </div>
  </div>
  <div className="col-lg-12 col-md-12">
    <button type="submit" className="btn btn-danger px-4 py-2 rounded-5" >
      SEND MESSAGE
      <i className="fa-solid fa-caret-right ms-2"></i>
      <span />
    </button>
    <div id="msgSubmit" className="h3 text-center hidden" />
    <div className="clearfix" />
  </div>
</div>
</form>
 </div>
{/* Section 3 */}
{/* <div className="map">
<iframe title='' className='rounded-3 my-5 col-lg-12' height={500} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d193746.99686960355!2d-74.11015048484853!3d40.645386881762036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zIDg1NSBSb2FkLCBCcm9va2x5biBTdHJlZXQgTmV3IFlvcmsgNjAwIEJpcmzJmcWfbWnFnyDFnnRhdGxhcsSx!5e0!3m2!1saz!2saz!4v1691988962203!5m2!1saz!2saz"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div> */}


</div>
<Footer />
    </>
   


  )
}

export default Contact