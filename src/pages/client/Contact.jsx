import React, { useContext } from 'react'
import { LangContext } from '../../context/langContext';

const Contact = () => {
  const  [lang] = useContext(LangContext);

  return (
    <div className='contactPage pb-5'>
     <div className="container  ">

{/* Section 1 */}
<div className="row align-items-center contact1 mb-5 ">
    <div className="col-lg-3 col-md-6 box1 ">
    <i className="fa-solid fa-earth-americas fs-1 text-danger"></i>
    <p className='name fs-6 mt-3'>{lang==='en' ? '54 Hegmann Uninuo Apt. 890, New York, NY 10018, United States.' : '54 Hegmann Uninuo Apt. 890, New York, NY 10018, Amerika Birləşmiş Ştatları.'}</p>
    </div>
    <div className="col-lg-4 col-md-6 dates box1  ">
        <ul>
            <li className='name'>{lang==='en' ? 'Sunday' : 'Bazar Günü'}
              
                <span className='ms-5'>{lang==='en' ? 'Closed' : 'Bağlı'}</span>  <div className="lines"></div>
            </li>
            <li className='name'>{lang==='en' ? 'Monday' : 'Bazar Ertəsi'} 
            
                <span className='ms-5'>8.00-20.00</span><div className="lines"></div>
            </li>
            <li className='name'>{lang==='en' ? 'Tuesday' : 'Çərşənbə Axşamı'} 
            
                <span className='ms-5'>10.00-5.00</span><div className="lines"></div>
            </li>
            <li className='name'>{lang==='en' ? 'Wednesday' : 'Çərşənbə'}  
            
                <span className='ms-5'>12.00-9.00</span><div className="lines"></div>
            </li>
            <li className='name'>{lang==='en' ? 'Friday' : 'Cümə'}   
            
                <span className='ms-5'>3.00-1.00</span><div className="lines"></div>
            </li>
            <li className='name'>{lang==='en' ? 'Saturday' : 'Şənbə'}  
         
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
    <p className='welcome text-warning fs-5'>{lang==='en' ? 'Contuct Us' : 'Bizimlə Əlaqə Saxlayın'}</p>
    <h2 className='fw-bold mb-4'>{lang==='en' ? 'Contact With Us' : 'Bizimlə Əlaqə Saxlayın'}</h2>
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
    {lang==='en' ? 'Contact With Us' : 'MESAJ GÖNDƏRİN'}
      <i className="fa-solid fa-caret-right ms-2"></i>
      <span />
    </button>
    <div id="msgSubmit" className="h3 text-center hidden" />
    <div className="clearfix" />
  </div>
</div>
</form>
 </div>



</div>

    </div>
   


  )
}

export default Contact