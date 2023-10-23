import React, { useContext } from 'react'
import {  Card, Col, Container } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y,Navigation,Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';
import { LangContext } from '../../context/langContext';


const About = () => {
  const [productdata] = useContext(ProductContext);
  const  [lang] = useContext(LangContext);

  return (
    <>
{/* Section 1 */}

<div className="hero1">
<div className="px-4 pb-5 mb-5 text-center topHero d-flex flex-column align-items-center justify-content-center ">
        
        <h1 className="display-5 fw-bold text-light mt-5">{lang==='en' ? 'About Handout' : 'Handout Haqqında'}</h1>
        <div className="col-lg-6 mx-auto d-flex justify-content-center">
          <div className="d-flex align-items-center lead mb-4">
            <Link className='nav-link me-3' to="/">{lang==='en' ? 'Home' : 'Ana Səhifə'}</Link> 
            <i className="fa-solid fa-mug-hot me-3"></i>
             <Link className='nav-link' href="/about">{lang==='en' ? 'About' : 'Haqqımızda'}</Link> 
             </div>
        </div>
      </div>
      <div className="below">
        <img src="https://templates.envytheme.com/handout/default/assets/img/page-title/down-shape.png" alt="" />
      </div>
</div>

{/* Section 2 */}


<div className=" hero2 col-xxl-11  py-5 ">
        <div className="row flex-lg-row-reverse align-items-center  py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img  src="https://templates.envytheme.com/handout/default/assets/img/about/image1.jpg" className="d-block mx-lg-auto img-fluid brg-image" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
          <h1 className='mt-5 whoAre ms-5'>{lang==='en' ? 'Who Are We' : 'Biz Kimik'}</h1>
            <h1 className="display-5 fw-bold  lh-1 mb-3 ms-5 title1">{lang==='en' ? 'We Are Amongest Best For Providing Fast Food' : 'Biz Fast Food Təmin etmək üçün Ən Yaxşısıyıq'}</h1>
            <p className="lead1 ms-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
<br />
Eusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
           
           <h3 className='ms-5 fw-bold'>{lang==='en' ? 'Christopher Nolan' : 'Kristofer Nolan'}</h3>
           <p className='lead1 ms-5 '>{lang==='en' ? 'Manager At Handout' : 'Handout da Menecer '}</p>
           <img className='ms-5' src="https://templates.envytheme.com/handout/default/assets/img/about/signature.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pricess col-12 d-flex align-items-center justify-content-evenly red">
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={100} end={340} duration={1} />+</h1>
        <p>{lang==='en' ? 'Cups of Coffee' : 'Qəhvə Fincanları'}</p>
      </div>
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={1000} end={2678} duration={1} />+</h1>
        <p>{lang==='en' ? 'Orders Everyday' : 'Hər Gün Sifarişlər'}</p>
      </div>
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={10} end={60} duration={1} /></h1>
        <p>{lang==='en' ? 'Skilled Professionals' : 'Bacarıqlı Peşəkarlar'}</p>
      </div>
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={60} end={130} duration={1} /></h1>
        <p>{lang==='en' ? 'Burgers at Hour' : 'Saatda Burger'}</p>
      </div>
     </div>

     {/* Section 3 */}

    <div className="aboutSection3 pb-3">
    <h1 className='pt-5 quality'>{lang==='en' ? 'Our Team' : 'Bizim Komanda'}</h1>
     <h1 className='pt-3 delOne'>{lang==='en' ? 'Our Experience Team' : 'Təcrübə Komandamız'}</h1>

     <Container className='hero3'>
     <Swiper slidesPerView={4}
         breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
         }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
         className="mySwiper">{productdata.slice(0,5).map((item) =>{
          if(item){
            return(
              <SwiperSlide key={item.id}> 
              <Col className='colBox1' sm={10} md={4} style={{"width":"100%"}} >
             <Card className='burgerCard1'
                 >
                  <div className="imgCard1">
                  <Card.Img  height={300}   variant="top"  src={item.team_image} className='cardImg1' />
                  <div className=' order rounded-5 '><div className="logos"><i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-pinterest-p"></i> <i className="fa-brands fa-youtube"></i> </div></div>
                  </div>
                  
                  <Card.Body>
                    <Card.Title className='text-center title'>{item.team_name}</Card.Title>
                    <p className='text-center grey'>{item.team_pos}</p>       
                  </Card.Body>
                </Card>
              </Col></SwiperSlide>
            )
          }
          
})}
        
            
      </Swiper>
     </Container>
    </div>

     {/* Section 4 */}

     <div className=" col-xxl-12 px-4 py-5 about4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-lg-6">
          <h1 className='mt-5 mb-3 quality text-start'>{lang==='en' ? 'Free Delivery' : 'Pulsuz Çatdırılma'}</h1>
            <h1 className="display-5 fw-bold text-light lh-1 mb-3">{lang==='en' ? 'Get Free If You Reach To Order For $10' : '10$-a Sifariş Etsəniz Pulsuz Alın'}</h1>
            <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to='/shop'><button className='btn  btn-danger px-5 py-3 rounded-5 '>{lang==='en' ? 'ORDER NOW ' : 'İNDİ SİFARİŞ EDİN'} <i className="fa-solid fa-caret-right"></i></button></Link>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
          </div>
        </div>
      </div>

      {/* Section 5 */}

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper about5 pb-5">
        {productdata.slice(0,4).map((item)=>{
          if(item){
            return(
              <SwiperSlide key={item.id}>
              <div className="px-4 py-5 my-5 text-center">
              <img className="d-block mx-auto mb-4" src="https://templates.envytheme.com/handout/default/assets/img/feedback/image.png" alt="" width={200} height={220} />
              <h3 className=" fw-bold text-body-emphasis">{item.review_name}</h3>
              <span>CEO, Foodplanet</span>
                <p className="lead mb-4 text-dark">{item.review_content}</p>
            </div>
              </SwiperSlide>
            )
          }
        })}
      </Swiper>
    </>
  )
}

export default About