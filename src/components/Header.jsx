import React, { useContext, useState } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { ModeContext } from '../context/modeContext'
import { LangContext } from '../context/langContext'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Header = () => {
  const [navbarClassScrolled, setNavbarClassScrolled] = useState("");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 400) {
      setNavbarClassScrolled("navbarFixed");
    } else {
      setNavbarClassScrolled("");
    }
  });
  const [mode, setMode] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  const { totalItems } = useCart();



  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'))

  const defineUser = () => {
    if (!user) {
      return "Login"
    } else {
      return user.user_name;
    }
  }

  return (
    <header className={`${navbarClassScrolled}`}>
 <Navbar expand="lg" className="bg-body-light navbar">
      <Container>
        <Navbar.Brand className='brand' href="/">Handout</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/'><Nav.Link className='page navbar-collapse collapse show'>{lang === 'en' ? 'Home' : 'Ana Səhifə'}</Nav.Link></LinkContainer>
            <LinkContainer to='/about'><Nav.Link className='page'>{lang === 'en' ? 'About' : 'Haqqımızda'}</Nav.Link></LinkContainer>

            <li className="nav-item dropdown page shopDrop navbar-collapse collapse show">
              <a className="nav-link dropdown-toggle page" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {lang === 'en' ? 'Shop' : 'Mağaza'}
              </a>

              <ul className="dropdown-menu dropdown1 mt-5">
                <LinkContainer to="/product"><li><a href='/product' className="dropdown-item" >{lang === 'en' ? 'Shop List' : 'Mağaza Siyahısı'}</a></li></LinkContainer>

                <li><LinkContainer to="cart"><Link className="dropdown-item" >{lang === 'en' ? 'Cart' : 'Səbət'}</Link></LinkContainer></li>
                <li><LinkContainer to='checkout'><Link className="dropdown-item" >{lang === 'en' ? 'Checkout' : 'Ödəniş'}</Link></LinkContainer></li>
                <li><LinkContainer to='faq'><Link className="dropdown-item" >{lang === 'en' ? 'FAQ' : 'TVS'}</Link></LinkContainer></li>
              </ul>
            </li>
            <LinkContainer to="/blog"><Nav.Link className='page navbar-collapse collapse show' onClick={()=>{}}>{lang === 'en' ? 'Blog' : 'Bloq'}</Nav.Link></LinkContainer>
            <LinkContainer to="/contact" ><Nav.Link className='page navbar-collapse collapse show'>{lang === 'en' ? 'Contact' : 'Əlaqə'}</Nav.Link></LinkContainer>
          </Nav>
          <Nav className="ms-auto">
            <LinkContainer to='/wishlist'><Nav.Link className='navbar-collapse collapse show'><i className="fa-regular fa-heart fs-5 mt-3"></i></Nav.Link></LinkContainer>

            <button type="button" className="btn btn-light position-relative mt-3 mx-1 cartBtn navbar-collapse collapse show" onClick={() => {
              console.log(user);
              if (!user) {
                navigate("/authorization")
              } else {
                navigate("/cart")
              }


            }}>
             
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {totalItems}
                <span className="visually-hidden ">unread messages</span>
              </span>
            </button>


            {/* <LinkContainer to="/product"><Nav.Link ><Button className='orderBtn ms-2'>{lang === 'en' ? 'ORDER ONLİNE' : 'ONLİNE SİFARİŞ'}</Button></Nav.Link></LinkContainer> */}
            <button className='modeBtn mt-3 ms-2' onClick={() => {
              mode === 'light' ? setMode('dark') : setMode('light')
              mode === 'light' ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light')
            }} > {mode === 'light' ? <img src="https://i.ibb.co/FxzBYR9/night.png" alt="" /> : <img src="https://i.ibb.co/7JfqXxB/sunny.png" alt="" />}</button>

            <button className='langBtn mt-3 ms-3' onClick={() => {
              lang === 'en' ? setLang('az') : setLang('en')
              lang === 'en' ? localStorage.setItem('lang', 'az') : localStorage.setItem('lang', 'en')
            }}>{lang === 'en' ? "AZ" : 'EN'}</button>


            <button className=' ms-2 mt-3 adminBtn navbar-collapse collapse show' onClick={() => {
              if (user == undefined) {
                navigate('/authorization')
              } else if (user.user_status === "admin") {
                navigate('/admin')
              }
            }}>
              <i className="fa-regular fa-user "></i>
            </button>

            <div className="user-info-box bg-light rounded-1 ms-2 px-2 py-1 mt-3 d-flex align-items-center ">
              <p className='text-dark fw-bold' style={{cursor: 'pointer'}} onClick={() => {
                if (!user) {
                  navigate('/authorization')
                } else {
                  if (user.user_status === 'admin') {
                    navigate("/admin")
                  } else {
                    navigate("/cart")
                  }
                }
              }}>{defineUser()}</p>

              {
                !user ? ""
                :   (
                  <p className='text-white bg-danger z-5 p-1 rounded-1 logout ' style={{cursor: 'pointer'}}  onClick={()=>{
                    localStorage.removeItem("user");
                    navigate('/')
                    // for refresing page
                    window.location.reload();
                  }}>{lang==='en' ? 'Log out' : 'Çıxış Et'}</p>
                )
              }
              

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
   
  )
}

export default Header