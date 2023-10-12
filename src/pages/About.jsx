import React, { useContext } from 'react'
import {  Container } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext';
import TeamCard from '../components/TeamCard';

const About = () => {
  const [teamdatas] = useContext(ProductContext);
  return (
    <>
{/* Section 1 */}

<div className="hero1">
<div className="px-4 pb-5 mb-5 text-center topHero d-flex flex-column align-items-center justify-content-center ">
        
        <h1 className="display-5 fw-bold text-light mt-5">About Handout</h1>
        <div className="col-lg-6 mx-auto d-flex justify-content-center">
          <div className="d-flex align-items-center lead mb-4"><a className='nav-link me-3' href="/">Home</a> <i className="fa-solid fa-mug-hot me-3"></i> <a className='nav-link' href="/about">About</a> </div>
        </div>
      </div>
      <div className="below">
        <img src="https://templates.envytheme.com/handout/default/assets/img/page-title/down-shape.png" alt="" />
      </div>
</div>

{/* Section 2 */}


<div className=" hero2 col-xxl-11  py-5 mb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img  src="https://templates.envytheme.com/handout/default/assets/img/about/image1.jpg" className="d-block mx-lg-auto img-fluid brg-image" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
          <h1 className='mt-5 whoAre ms-5'>Who Are We</h1>
            <h1 className="display-5 fw-bold  lh-1 mb-3 ms-5 title1">We Are Amongest Best For Providing Fast Food</h1>
            <p className="lead1 ms-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
<br />
Eusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
           
           <h3 className='ms-5 fw-bold'>Christopher Nolan</h3>
           <p className='lead1 ms-5 '>Manager At Handout</p>
           <img className='ms-5' src="https://templates.envytheme.com/handout/default/assets/img/about/signature.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pricess col-12 d-flex align-items-center justify-content-evenly red">
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={100} end={340} duration={1} />+</h1>
        <p>Cups of Coffee</p>
      </div>
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={1000} end={2678} duration={1} />+</h1>
        <p>Orders Everyday</p>
      </div>
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={10} end={60} duration={1} /></h1>
        <p>Skilled Professionals</p>
      </div>
      <div className="cups d-flex flex-column align-items-center">
        <h1><CountUp  start={60} end={130} duration={1} /></h1>
        <p>Burgers at Hour</p>
      </div>
     </div>

     {/* Section 3 */}

     <h1 className='mt-5 quality'>Our Team</h1>
     <h1 className='mt-3 delOne'>Our Experience Team</h1>

     <Container className='hero3'>
     <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper my-5 row"
        > {teamdatas.slice(0,5).map(item=>(
              <div className="col">
                <TeamCard key={item.id} teamdata={item}/>
              </div>
            ))}
        
            
      </Swiper>
     </Container>

     {/* Section 4 */}

     <div className=" col-xxl-12 px-4 py-5 about4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-lg-6">
          <h1 className='mt-5 mb-3 quality text-start'>Free Delivery</h1>
            <h1 className="display-5 fw-bold text-light lh-1 mb-3">Get Free If You Reach <br /> To Order For $10</h1>
            <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to='/shop'><button className='btn  btn-danger px-5 py-3 rounded-5 '>ORDER NOW  <i className="fa-solid fa-caret-right"></i></button></Link>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
          </div>
        </div>
      </div>

      {/* Section 5 */}

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper about5">
        <SwiperSlide>
        <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://templates.envytheme.com/handout/default/assets/img/feedback/image.png" alt="" width={200} height={220} />
        <h3 className=" fw-bold text-body-emphasis">David McLean</h3>
        <span>CEO, Foodplanet</span>
          <p className="lead mb-4 text-dark">I chose Handout because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality</p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://templates.envytheme.com/handout/default/assets/img/feedback/image.png" alt="" width={200} height={220} />
        <h3 className=" fw-bold text-body-emphasis">David McLean</h3>
        <span>CEO, Foodplanet</span>
          <p className="lead mb-4 text-dark">I chose Handout because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality</p>
      </div>
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  )
}

export default About