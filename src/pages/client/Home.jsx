import React, { useContext, useState } from 'react'
import { Card, Col, Button, Container } from 'react-bootstrap';
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from 'react-countup';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';
import { LangContext } from '../../context/langContext';

const Home = () => {
  const [iframe, setIframe] = useState();
  const [productdata] = useContext(ProductContext);
  const  [lang] = useContext(LangContext);
  return (
    <div className='homePage mt-5'>
    {/* Section 1 */}
    <div id="carouselExample" className="carousel slide " >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className=" col-xxl-12 px-5  background ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ms-5">
          <div className="col-10 col-sm-8 col-lg-6 burger ">
            <img src="https://templates.envytheme.com/handout/default/assets/img/slider/image1.png" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width={800} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6 txtBody " >
            <img width={600} height={120}  src="https://templates.envytheme.com/handout/default/assets/img/slider/burger.png" alt="" />
            <p className="lead mt-3 text-light"> {lang==='en' ? 'UPDATED MENU\'S ITEM' : 'YENILƏNMİŞ MENYU ELEMENTİ'}</p>
            <h1 className='chicken'> {lang==='en' ? 'CHICKENSUP BURGER' : 'TOYUQ ƏTLİ BURGER'} <br /> </h1>
            <p className="mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Integrated With Mushroom' : 'Göbələk İlə Birləşdirilmişdir'} </p>
            <p className=" mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Cheese Integrated' : 'Pendir İlə Birləşdirilmiş'} </p>
            <p className=" mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Bacon Flavour' : 'Bekon Dadı'}</p>
           
          </div>
        </div>
      </div>
           
          </div>
          <div className="carousel-item">
          <div className=" col-xxl-12 px-5 background ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ms-5">
          <div className="col-10 col-sm-8 col-lg-6 burger ">
            <img src="https://templates.envytheme.com/handout/default/assets/img/slider/image2.png" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width={800} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6 txtBody" >
            <img width={600} height={120}  src="https://templates.envytheme.com/handout/default/assets/img/slider/burger.png" alt="" />
            <p className="lead mt-3 text-light"> {lang==='en' ? 'UPDATED MENU\'S ITEM' : 'YENILƏNMİŞ MENYU ELEMENTİ'}</p>
            <h1 className='chicken'> {lang==='en' ? 'THE CRISPY BUN' : 'XIRTILDAYAN ÇÖRƏK'} <br /> </h1>
            <p className="mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Integrated With Mushroom' : 'Göbələk İlə Birləşdirilmişdir'} </p>
            <p className=" mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Cheese Integrated' : 'Pendir İlə Birləşdirilmiş'} </p>
            <p className=" mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Bacon Flavour' : 'Bekon Dadı'}</p>
           
          </div>
        </div>
      </div>
          </div>
          <div className="carousel-item">
         <div className=" col-xxl-12 px-5  background ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ms-5">
          <div className="col-10 col-sm-8 col-lg-6 burger ">
            <img src="https://templates.envytheme.com/handout/default/assets/img/slider/image3.png" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width={800} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6 txtBody " >
            <img width={600} height={120}  src="https://templates.envytheme.com/handout/default/assets/img/slider/burger.png" alt="" />
            <p className="lead mt-3 text-light"> {lang==='en' ? 'UPDATED MENU\'S ITEM' : 'YENILƏNMİŞ MENYU ELEMENTİ'}</p>
            <h1 className='chicken'> {lang==='en' ? 'BEEF FRESH' : 'TƏZƏ MAL ƏTİ'} <br /> </h1>
            <p className="mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Integrated With Mushroom' : 'Göbələk İlə Birləşdirilmişdir'} </p>
            <p className=" mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Cheese Integrated' : 'Pendir İlə Birləşdirilmiş'} </p>
            <p className=" mt-3 text-light arrow"><i className="fa-solid fa-share text-warning me-2"></i>{lang==='en' ? 'Bacon Flavour' : 'Bekon Dadı'}</p>
           
          </div>
        </div>
      </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="visually-hidden">Next</span>
        </button>
      </div>


{/* Section 2 */}

      <div className=" col-xxl-12 pe-4 py-5 homeSection2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-lg-6">
          <p className="welcome mt-3 ">{lang==='en' ? 'Welcome' : 'Xoş gəlmisiniz'}</p>
          <h1 className='burger' >{lang==='en' ? 'Burger With Yummy Test Real Love' : 'Ləzzətli Dadlı Burger Əsl Sevgi'}</h1>
          <p className='ipsum'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, beatae repellat nulla <br /> odio expedita doloribus magni aut amet, earum cumque, error cupiditate. <br /> Necessitatibus temporibus quam nemo nihil illum quisquam facere.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <LinkContainer to='/about'><button className='btn btn-warning rounded-5 explore'>{lang==='en' ? 'Explore History' : 'Tarixi Araşdırın'} <i className="fa-solid fa-caret-right"></i></button></LinkContainer>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://templates.envytheme.com/handout/default/assets/img/welcome.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className='section3 col-12 d-flex  align-items-center  commonBox'>
      <img className='background-img' src="https://templates.envytheme.com/handout/default/assets/img/others-bg.jpg" alt="" />
            <div className="cards-box">
            <div className='left d-flex  col-lg-5 col-sm-2'>
              <div className="cards">
              <div className="boxes d-flex align-items-center">
                <div className="box p-4">
                    <h3>{lang==='en' ? 'Mild Butter' : 'Yumşaq Kərə Yağı'}</h3>
                    <p className='fs-5 '>Learning do amet contur diiscvt suia <br /> non nuameius velit modi</p>
                </div>
                <i className="fa-solid fa-caret-right  fs-1"></i>
                </div>
                <div className="boxes d-flex align-items-center ms-5">
                    <div className="box p-4">
                    <h3>{lang==='en' ? 'Slices Beef' : 'Mal Əti Dilimləri'}</h3>
                    <p className='fs-5 '>Learning do amet contur diiscvt suia <br /> non nuameius velit modi</p>
                </div>
                <i className="fa-solid fa-caret-right  fs-1"></i>
                </div>
                <div className="boxes d-flex align-items-center">
                    <div className="box p-4">
                    <h3>{lang==='en' ? 'Sleek Onion' : 'İncə Soğan'}</h3>
                    <p className='fs-5 '>Learning do amet contur diiscvt suia <br /> non nuameius velit modi</p>
                </div>
                <i className="fa-solid fa-caret-right  fs-1"></i>
                </div>
              </div>
              <div className="arrows">
                <img height={750} src="https://templates.envytheme.com/handout/default/assets/img/shape/shape1.png" alt="" />
              </div>
                
                
            </div>

            <div className='right d-flex ms-3  col-lg-5 col-sm-2'>
            <div className="arrows">
                <img height={750} src="https://templates.envytheme.com/handout/default/assets/img/shape/shape2.png" alt="" />
              </div>
              <div className="cards">
              <div className="boxes d-flex align-items-center">
              <i className="fa-solid fa-caret-left  fs-1"></i>
                <div className="box p-4">
                    <h3>{lang==='en' ? 'Fresh Bread' : 'Təzə Çörək'}</h3>
                    <p className='fs-5 '>Learning do amet contur diiscvt suia <br /> non nuameius velit modi</p>
                </div>
                </div>
                <div className="boxes d-flex align-items-center ms-5">
                <i className="fa-solid fa-caret-left  fs-1"></i>
                    <div className="box p-4">
                    <h3>{lang==='en' ? 'Lettuce Leaf' : 'Kahı Yarpağı'}</h3>
                    <p className='fs-5 '>Learning do amet contur diiscvt suia <br /> non nuameius velit modi</p>
                </div>
                </div>
                <div className="boxes d-flex align-items-center">
                <i className="fa-solid fa-caret-left fs-1"></i>

                    <div className="box p-4">
                    <h3>{lang==='en' ? 'Glow Cheese' : 'Parıldayan Pendir'}</h3>
                    <p className='fs-5'>Learning do amet contur diiscvt suia <br /> non nuameius velit modi</p>
                </div>
                </div>
              </div>
              
                
                
            </div>
            </div>
        </div>
        
     {/* Section 4 */}

     <div className='homeSection4 pb-5'>
        <h1 className=' py-5 quality'>Quality Products</h1>
     <h1 className='mb-3 mt-2 delOne'>Burgers As Expected <br /> Dilicious One</h1>
     <Container >
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
         className="mySwiper">
          
          {
            productdata.slice(0,6).map((item)=>  {
              if(item){
                return(
  
                  <SwiperSlide className='mb-2'> 
                  <Col className='colBox ' sm={10} md={4}  >
                    <Card className='burgerCard mb-1'
                     >
                      <div className="imgCard">
                      <Card.Img  height={300}  variant="top" src={item.image} className='cardImg' />
                      <LinkContainer to={`/product/${item.id}`}><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                      </div>
                      
                      <Card.Body>
                        <Card.Title className='text-center title'>{item.name}</Card.Title>
                        <p className='text-center grey'>{item.description.substring(0,25)}</p>
                         <p className='text-center price'>${item.price}</p>                  
                      </Card.Body>
                    </Card>
                  </Col>
                </SwiperSlide>
                )
              }
            })
          }
           
           
      </Swiper>
     </Container>
     </div>
   

     {/* Section 5 */}

     <div className="orders col-12 mt-5 d-flex justify-content-center align-items-center">
      
      <div className="backCircle ">
      <div className="video ">
        <button className='btn video-btn bg-transparent' onClick={()=>setIframe(true)}><i class="fa-solid fa-play fs-2"></i></button>

          {
            iframe=== true ? <>
            <div className="burger-video">
          
        <iframe  src="https://www.youtube.com/embed/qaHWDmFtBl0?si=az37yL_SHQkMfhuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button className='btn btn-dark esc d-flex align-items-center' onClick={()=> setIframe(false)} >X</button>
            </div>

            </> : ""
          }
      </div>
      </div>
     </div>

     {/* Section 6 */}
     <div className="pricess col-12 d-flex align-items-center justify-content-evenly ">
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
    


     {/* Section 8 */}

  <div className="section8">
  <h1 className='pt-5 quality'>Photos</h1>
     <h1 className='my-3 delOne'>Our Food Gallery</h1>

     <div className="container mb-5 ">
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
         className="mySwiper">
        <SwiperSlide> 
        <div className="card sliderCard" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/gallery/image3.jpg" className="card-img-top" alt="..." />
        <div className="front d-flex flex-column justify-content-center align-items-center">
         <LinkContainer to='/product'><Button className='btn btn-warning text-light mb-2 '>Burger</Button></LinkContainer>
         <h5>Burger Name</h5>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div className="card sliderCard" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/gallery/image4.jpg" className="card-img-top" alt="..." />
        <div className="front d-flex flex-column justify-content-center align-items-center">
         <LinkContainer to='/product'><Button className='btn btn-warning text-light mb-2 '>Burger</Button></LinkContainer>
         <h5>Burger Name</h5>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div className="card sliderCard" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/gallery/image2.jpg" className="card-img-top" alt="..." />
        <div className="front d-flex flex-column justify-content-center align-items-center">
         <LinkContainer to='/product'><Button className='btn btn-warning text-light mb-2 '>Burger</Button></LinkContainer>
         <h5>Burger Name</h5>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div className="card sliderCard" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/gallery/image5.jpg" className="card-img-top" alt="..." />
        <div className="front d-flex flex-column justify-content-center align-items-center">
         <LinkContainer to='/product'><Button className='btn btn-warning text-light mb-2 '>Burger</Button></LinkContainer>
         <h5>Burger Name</h5>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div className="card sliderCard" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/gallery/image6.jpg" className="card-img-top" alt="..." />
        <div className="front d-flex flex-column justify-content-center align-items-center">
         <LinkContainer to='/product'><Button className='btn btn-warning text-light mb-2 '>Burger</Button></LinkContainer>
         <h5>Burger Name</h5>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div className="card sliderCard" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/gallery/image1.jpg" className="card-img-top" alt="..." />
        <div className="front d-flex flex-column justify-content-center align-items-center">
         <LinkContainer to='/product'><Button className='btn btn-warning text-light mb-2 '>Burger</Button></LinkContainer>
         <h5>Burger Name</h5>
        </div>
      </div>
      </SwiperSlide>
      </Swiper>
     </div>
  </div>

     {/* Section 9 */}

     <div className="col-xxl-12 px-5   section9">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img  src="https://templates.envytheme.com/handout/default/assets/img/delivery.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={650} height={450} loading="lazy" />
          </div>
          <div className="col-lg-6">
          <p className="welcome mt-3 ">Delivery</p>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">What You Want To Select A Pick Up Through Online</h1>
            <p className="lead  mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
 <br /><br />
Eusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
             <Link to='/product'> <button type="button" className="btn  btn-lg px-4 me-md-2 orderBtn">ORDER NOW <i className="fa-solid fa-caret-right"></i></button></Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* Section 10 */}


     <div className="section10">
     <div className="container col-xxl-12 px-5 py-5  ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <h1 className='pt-5 quality'>Testimonial</h1>
     <h1 className='mt-3 delOne'>Our Clients Review</h1>
          <div className="col-10 col-sm-8 col-lg-6 ">
            <img  src="https://templates.envytheme.com/handout/default/assets/img/feedback/image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={400} loading="lazy" />
          </div>
          <div className="col-lg-6 ">

          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {productdata.slice(0,4).map((item)=>{
              if(item){
                return(
<SwiperSlide>
        <h3 className=" fw-bold text-body-emphasis lh-1 mb-3">{item.review_name}</h3>
            <p className=" mt-3 fs-4 text-secondary">CEO, Foodplanet</p>
            <p className="lead fs-3 text-dark mt-4">{item.review_content}</p>
        </SwiperSlide>
                )
              }
            })}
        
       
      </Swiper>

          </div>
        </div>
      </div>
     </div>

      {/* Section 11 */}

   <div className="section11 pb-5">
   <div className="container  pb-5 ">
      
      <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card card1">
              <div className="text-center " >
              <div className="burgPrice d-flex flex-column align-items-center justify-content-center mt-3">
                <p>Burger</p>
                <h3>$12</h3>
              </div>
              </div>
              <div className="card-body ">
              <p className="card-text">Pangolin Burger</p>
               <a href="/product" className='nav-link'> <h1 className="card-title">Festive Special Burger</h1></a>
                <a href="/product" className="btn ">ORDER NOW <i className="fa-solid fa-caret-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
          <div className="card card2">
              <div className="text-center " >
              <div className="burgPrice d-flex flex-column align-items-center justify-content-center mt-3">
                <p>Burger</p>
                <h3>$45</h3>
              </div>
              </div>
              <div className="card-body ">
              <p className="card-text">Flat 30% Off</p>
               <a href="/product" className='nav-link'> <h1 className="card-title">Burger King Special</h1></a>
                <a href="/product" className="btn ">ORDER NOW <i className="fa-solid fa-caret-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container section11">
   <div className=" row">
   <div className="col-sm-4">
        <div className="card card3">
            <div className="text-center " >
            <div className="burgPrice d-flex flex-column align-items-center justify-content-center mt-3">
              <p>Burger</p>
              <h3>$65</h3>
            </div>
            </div>
            <div className="card-body ">
            <p className="card-text">Pangolin Burger</p>
             <a href="/product" className='nav-link'> <h1 className="card-title">Festive Burger</h1></a>
              <a href="/product" className="btn ">ORDER NOW <i className="fa-solid fa-caret-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card card4">
            <div className="text-center " >
            <div className="burgPrice d-flex flex-column align-items-center justify-content-center mt-3">
              <p>Burger</p>
              <h3>$09</h3>
            </div>
            </div>
            <div className="card-body ">
            <p className="card-text">CrazyBurger</p>
             <a href="/product" className='nav-link'> <h1 className="card-title">Jurik Burger</h1></a>
              <a href="/product" className="btn ">ORDER NOW <i className="fa-solid fa-caret-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card card5">
            <div className="text-center " >
            <div className="burgPrice d-flex flex-column align-items-center justify-content-center mt-3">
              <p>Burger</p>
              <h3>$10</h3>
            </div>
            </div>
            <div className="card-body ">
            <p className="card-text">Summer 30% Off</p>
             <a href="/product" className='nav-link'> <h1 className="card-title">Burger Vulso</h1></a>
              <a href="/product" className="btn ">ORDER NOW <i className="fa-solid fa-caret-right"></i></a>
            </div>
          </div>
        </div>
    </div>
   </div>
   </div>

    </div>
  )
}


export default Home