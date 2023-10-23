import React, { useContext } from 'react'
import { LangContext } from '../../src/context/langContext';


const Footer = () => {
  const  [lang] = useContext(LangContext);

  return (
    <div>
        <div className="footer pt-5 ">
        <div className="container col-xxl-8 py-5 book ">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://templates.envytheme.com/handout/default/assets/img/book-table.jpg" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold text-body-emphasis lh-1 mb-3"> {lang==='en' ? 'Book A Table Now!' : 'İndi Masa Rezervasiya edin!'}</h3>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing eltsed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="/" className="btn ">+123 775 (984) 753 <i className="fa-solid fa-caret-right"></i></a>
            </div>
          </div>
        </div>
      </div>

   <div className="container">
        <footer className="py-5 mt-4 ms-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">{lang==='en' ? 'Sunday' : 'Bazar'}</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">{lang==='en' ? 'Monday' : 'Bazar Ertəsi'}</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">{lang==='en' ? 'Tuesday' : 'Çərşənbə Axşamı'}</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">{lang==='en' ? 'Wednesday' : 'Çərşənbə'}</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">{lang==='en' ? 'Friday' : 'Cümə'}</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">{lang==='en' ? 'Saturday' : 'Şənbə'}</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-warning">{lang==='en' ? 'Closed' : 'Bağlıdır'}</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-warning">8.00 - 20.00</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-warning">10:00-5.00</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-warning">12:00-9:00</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-warning">3:00-1:00</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-warning">9:00-12:00</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <ul className="nav flex-column">
                <h2 className='text-light'>{lang==='en' ? 'Address' : 'Ünvan'}</h2>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light"><i className="fa-solid fa-phone-volume text-warning"></i> +449 888 666 0000</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light"><i className="fa-regular fa-message text-warning"></i> hello@handout.com</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light"><i className="fa-solid fa-location-crosshairs text-warning"></i> 855 Road, Brooklyn Street
New York 600</a></li>
<li className='mt-3'><div className='d-flex social'>
  <a href="/" className='nav-link facebook'><i className="fa-brands fa-facebook"></i></a>
  <a href="/" className='nav-link twitter'><i className="fa-brands fa-twitter"></i></a>
  <a href="/" className='nav-link instagram'><i className="fa-brands fa-instagram"></i></a>
  <a href="/" className='nav-link pinterest'><i className="fa-brands fa-pinterest"></i></a>
  <a href="/" className='nav-link youtube'><i className="fa-brands fa-youtube"></i></a>
  </div></li>
              </ul>
            </div>
         
      
          </div>
        </footer>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between pt-4  end">
            <p className='ms-5 text-light fs-6'>Copyright @2023 Handout. All Rights Reserved by <span>EnvyTheme</span></p>
            <p className='me-5 text-light'>{lang==='en' ? 'Terms & Conditions' : 'Şərtlər və Qaydalar'}   
              <span>  |</span> {lang==='en' ? 'Privacy Policy' : 'Gizlilik Siyasəti'} </p>
          </div>
   </div>
    </div>
  )
}

export default Footer