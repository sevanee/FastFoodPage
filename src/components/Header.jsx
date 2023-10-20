import React, { useContext } from 'react'
import { Container, Nav, Navbar ,Button} from 'react-bootstrap'
import { ModeContext } from '../context/modeContext'
import { LangContext } from '../context/langContext'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Header = () => {
  const [mode, setMode] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  const {totalItems} = useCart();
  return (
    <Navbar expand="lg" className="bg-body-light navbar mb-5">
      <Container>
        <Navbar.Brand className='brand' href="/">Handout</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to= '/'><Nav.Link  className='page'>{lang==='en' ? 'Home' : 'Ana Səhifə'}</Nav.Link></LinkContainer>
            <LinkContainer to='/about'><Nav.Link  className='page'>{lang==='en' ? 'About' : 'Haqqımızda'}</Nav.Link></LinkContainer>
            
            <li className="nav-item dropdown page shopDrop">
               <a className="nav-link dropdown-toggle page" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {lang==='en' ? 'Shop' : 'Mağaza'}
        </a>
       
        <ul className="dropdown-menu dropdown1">
          <LinkContainer to="/product"><li><a  href='/product' className="dropdown-item" >{lang==='en' ? 'Shop List' : 'Mağaza Siyahısı'}</a></li></LinkContainer>
          
          <li><LinkContainer to="cart"><Link className="dropdown-item" >{lang==='en' ? 'Cart' : 'Səbət'}</Link></LinkContainer></li>
            <li><LinkContainer to='checkout'><Link className="dropdown-item" >{lang==='en' ? 'Checkout' : 'Ödəniş'}</Link></LinkContainer></li>
            <li><LinkContainer to='faq'><Link className="dropdown-item" >{lang==='en' ? 'FAQ' : 'TVS'}</Link></LinkContainer></li>
        </ul>
      </li>
          <LinkContainer to="/blog"><Nav.Link  className='page'>{lang==='en' ? 'Blog' : 'Bloq'}</Nav.Link></LinkContainer>  
            <LinkContainer to="/contact" ><Nav.Link className='page'>{lang==='en' ? 'Contact' : 'Əlaqə'}</Nav.Link></LinkContainer>
          </Nav>
          <Nav className="ms-auto">
            <LinkContainer to='/wishlist'><Nav.Link><i className="fa-regular fa-heart fs-5 mt-3"></i></Nav.Link></LinkContainer>
            <LinkContainer to="/cart"><Nav.Link  > <button type="button" className="btn btn-light position-relative mt-2 cartBtn">
            <i className="fa-solid fa-cart-shopping"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
        {totalItems}
          <span className="visually-hidden ">unread messages</span>
        </span>
      </button></Nav.Link></LinkContainer>
            
           <LinkContainer to="/product"><Nav.Link ><Button className='orderBtn ms-2'>{lang==='en' ? 'ORDER ONLİNE' : 'ONLİNE SİFARİŞ'}</Button></Nav.Link></LinkContainer> 
            <button className='modeBtn mt-3 ms-2' onClick={()=>{
          mode==='light' ? setMode('dark') : setMode('light')
          mode === 'light' ? localStorage.setItem('mode','dark') :  localStorage.setItem('mode','light')
        }} > {mode === 'light' ? <img src="https://i.ibb.co/FxzBYR9/night.png" alt="" /> : <img src="https://i.ibb.co/7JfqXxB/sunny.png" alt="" /> }</button>

        <button className='langBtn mt-3 ms-3' onClick={()=>{
          lang==='en' ? setLang('az') : setLang('en')
          lang === 'en' ? localStorage.setItem('lang','az') :  localStorage.setItem('lang','en')
        }}>{lang==='en' ? "AZ" : 'EN'}</button>
        <LinkContainer to='/admin'><button className='btn bg-light border-0 ms-2'><i className="fa-regular fa-user fs-4"></i></button></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header