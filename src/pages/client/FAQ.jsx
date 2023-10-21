import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <>
{/* Section 1 */}
    <div className="hero1">
    <div className="px-4 pb-5 mb-5 text-center topHero d-flex flex-column align-items-center justify-content-center ">
            
            <h1 className="display-5 fw-bold text-light mt-5">FAQ</h1>
            <div className="col-lg-6 mx-auto d-flex justify-content-center">
              <div className="d-flex align-items-center lead mb-4">
              <Link className='nav-link me-3' to='/'>Home</Link>
                <i className="fa-solid fa-mug-hot me-3"></i> 
                <Link className='nav-link' to='/faq' >Faq</Link>
                 </div>
            </div>
          </div>
          <div className="below">
            <img src="https://templates.envytheme.com/handout/default/assets/img/page-title/down-shape.png" alt="" />
          </div>
    </div>

    {/* Section 2 */}

    <section className="faq-area pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="faq-content">
                <div className="section-title">
                  <span className='quality'>Ask Question</span>
                  <h2 className='fw-bold mt-2 fs-1'>Frequently Asked <br /> Questions</h2>
                  <p className='text-secondary'>Veniam quis nostrud exercitation ullamco laboris <br /> nist aute irure dolor in reprehenderit in voluptate <br /> velit esse nulla pariatur excepteur sint occaecat <br /> aboris nisi ut aliquip.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="faq-accordion">
              <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Which Material Types Can You Work With?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            How Monthly Payments Every Month?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Can I Have Multiple Activities In A Single Feature?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Which Material Types Can You Work With?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Why Choose Our Services In Your Business?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </div>
          </div>
        </div>
    
      </div>
              </div>
            </div>
          </div>
          <div className="faq-contact">
            <div className="section-title">
              <h2 className='text-center mt-4 fw-bold fs-1'>Do You Have Any Questions?</h2>
              <p className='text-center text-secondary my-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="faq-contact-form mt-3">
              <form id="contactForm" noValidate="true">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                    </div>
                  </div>   
                  <div className="col-lg-12 col-md-12 py-5">
                    <LinkContainer to='/thank'><button type="submit" className=" orderBtn fw-bold "  style={{pointerEvents: 'all', cursor: 'pointer'}}>
                      SEND MESSAGE
                    </button></LinkContainer>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ