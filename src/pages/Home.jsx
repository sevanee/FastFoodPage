import React, { useContext, useState } from 'react'
import { Card, Col, Button, Container } from 'react-bootstrap';
import "swiper/css";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from 'react-countup';
import Footer from '../components/Footer';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
// import { ProductContext } from '../context/productContext';
import { LangContext } from '../context/langContext'
// import MenuList from '../components/MenuList';
const Home = () => {
  // const [homedatas] = useContext(ProductContext);
  const [iframe, setIframe] = useState();
 const  [lang] = useContext(LangContext);
  return (
    <div className='homePage'>
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
            <h1 className='chicken'> {lang==='en' ? 'CHICKENSUP BURGER' : 'TOYUQ ƏTLİ BURGER'} <br /> </h1>
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
            <h1 className='chicken'> {lang==='en' ? 'CHICKENSUP BURGER' : 'TOYUQ ƏTLİ BURGER'} <br /> </h1>
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

      <div className=" col-xxl-12 pe-4 py-5">
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

      <div className='section3 col-12 d-flex  align-items-center my-5 commonBox'>
        
            <div className='left d-flex ms-2'>
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

            <div className='right d-flex me-2'>
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
        
     {/* Section 4 */}
     <h1 className='mt-5 quality'>Quality Products</h1>
     <h1 className='mt-3 delOne'>Burgers As Expected <br /> Dilicious One</h1>
     <Container>
     <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper my-5"
        >
          <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
            <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                 <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
            <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                 <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
            <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                 <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
            <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                 <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
            <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                 <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
            <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                 <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
            <SwiperSlide> <Col className='colBox' sm={10} md={4} style={{"width":"100%"}} >
              <Card className='burgerCard'
               >
                 <div className="imgCard">
                <Card.Img  height={300}  variant="top" src='https://templates.envytheme.com/handout/default/assets/img/burger-shop/2.png' className='cardImg' />
                <LinkContainer to="/product"><button className='btn order rounded-5 '>ORDER ONLINE<i className="fa-solid fa-caret-right"></i></button></LinkContainer>
                </div>
                
                <Card.Body>
                  <Card.Title className='text-center title'>Crazy Burger</Card.Title>
                  <p className='text-center grey'>Learning do amet contur dicivt <br /> suia non nuameius velit</p>
                   <p className='text-center price'>$35.000</p>                  
                </Card.Body>
              </Card>
            </Col></SwiperSlide>
      </Swiper>
     </Container>

     {/* Section 5 */}

     {/* <section className='five d-flex align-items-center justify-content-center'>
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <h1>Watch Our Video</h1>
          <button className='bg-transparent mt-5 d-flex align-items-center justify-content-center' onClick={() => { setIframe(<iframe width={660} height={315} src="https://www.youtube.com/embed/qV8PpOiPFW4?start=94" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />) }}><i className="fa-solid fa-play"></i>
          </button>
          {iframe}

        </div>
      </section> */}

     <div className="orders col-12 mt-5 d-flex justify-content-center align-items-center">
      <div className="backCircle ">
      <div className="video ">
        <button className='btn video-btn bg-transparent' onClick={()=>{setIframe(<iframe width="660" height="315" src="https://www.youtube.com/embed/qaHWDmFtBl0?si=az37yL_SHQkMfhuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)}}><i className="fa-solid fa-play fs-1 text-center "></i></button>
        {iframe}
      </div>
      </div>
     </div>
     <div className="pricess col-12 d-flex align-items-center justify-content-evenly">
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
     
     {/* Section 6 */}

     <h1 className='mt-5 quality'>Pricing Lists</h1>
     <h1 className='mt-3 delOne'>Choose & Order Now!</h1>
     <div className="container section6 mt-5">

     <div className="row">
     <div className="card" style={{width: '15rem'}}>
        <i className="fa-solid fa-burger "></i>
        <div className="card-body">
          <h5 className="card-title">Burgers</h5>
        </div>
      </div>
      <div className="card" style={{width: '15rem'}}>
      <i className="fa-solid fa-drumstick-bite"></i>
        <div className="card-body">
          <h5 className="card-title">Chickhen</h5>
        </div>
      </div>
      <div className="card" style={{width: '15rem'}}>
      <i className="fa-solid fa-martini-glass-citrus"></i>
        <div className="card-body">
          <h5 className="card-title">Beverage</h5>
        </div>
      </div>
      <div className="card" style={{width: '15rem'}}>
      <i className="fa-solid fa-mug-hot"></i>
        <div className="card-body">
          <h5 className="card-title">Coffee</h5>
        </div>
      </div>
      <div className="card" style={{width: '15rem'}}>
      <i className="fa-solid fa-pizza-slice"></i>
        <div className="card-body">
          <h5 className="card-title">Snacks</h5>
        </div>
      </div>
     </div>
    
     </div>

     {/* Section 7 */}

     {/* <div className=" container col-12 d-flex my-5 ">

       {homedatas.slice(0,4).map(item=>(
       <div className="col-6 d-flex flex-column justify-content-between leftMenu">
          <div className="menuList d-flex flex-column">
         <MenuList key={item.id} allmenu={item} />
         </div>
       </div>  
       ))}
</div> */}
       {/* <div className="col-6 d-flex flex-column justify-content-between leftMenu">
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">{homedatas.name} .................... <span>{homedatas.price}</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">Magninil's Apple Juice .................... <span>$12</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">6 Piece Sostikno Sticks .................... <span>$45</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">Dilso Chicken Sandwich .................... <span>$12</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
       </div> */}

       {/* <div className="col-6 d-flex flex-column justify-content-between leftMenu">
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">Ocean Spray Swits Juice ................ <span>$12</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">Smoked Brisket Sandwich .............. <span>$45</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">Japanies Dilicious Burger .............. <span>$12</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
         <div className="menuList d-flex flex-column">
          <h3 ><a className='nav-link' href="/product">Fotboy Combo Packs ....................... <span>$12</span></a></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse  ultrices gravida.</p>
         </div>
       </div> */}
   

     {/* Section 8 */}

     <h1 className='mt-5 quality'>Photos</h1>
     <h1 className='mt-3 delOne'>Our Food Gallery</h1>

     <div className="container mb-5 section8">
     <Swiper slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]} className="mySwiper">
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

     {/* Section 9 */}

     <div className="col-xxl-12 px-5 py-5 mt-5 section9">
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


     <div className="container col-xxl-12 px-5 py-5 mt-5  section10">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <h1 className='mt-5 quality'>Testimonial</h1>
     <h1 className='mt-3 delOne'>Our Clients Review</h1>
          <div className="col-10 col-sm-8 col-lg-6 ">
            <img  src="https://templates.envytheme.com/handout/default/assets/img/feedback/image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={400} loading="lazy" />
          </div>
          <div className="col-lg-6 ">

          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        <h4 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">David McLean</h4>
            <p className=" mt-3 fs-4 text-secondary">CEO, Foodplanet</p>
            <p className="lead fs-3 text-dark mt-4">I chose Handout because of  their value And <br />incredible   superior customer Service they 
             really awesome Food with quality service</p>
        </SwiperSlide>
        <SwiperSlide>
        <h4 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">David McLean</h4>
            <p className=" mt-3 fs-4 text-secondary">CEO, Foodplanet</p>
            <p className="lead fs-3 text-dark mt-4">I chose Handout because of  their value And <br /> incredible  superior customer Service they 
             really awesome Food with quality service</p>
        </SwiperSlide>
        <SwiperSlide>
        <h4 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">David McLean</h4>
            <p className=" mt-3 fs-4 text-secondary">CEO, Foodplanet</p>
            <p className="lead fs-3 text-dark mt-4">I chose Handout because of  their value And <br />incredible  superior customer Service they 
             really awesome Food with quality service</p>
        </SwiperSlide>
       
      </Swiper>

          </div>
        </div>
      </div>

      {/* Section 11 */}

    <div className="container section11 mb-5 ">
      
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
      
   <Footer />
    </div>
  )
}


export default Home