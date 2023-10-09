import React, { useContext } from 'react'
import { Container, Nav, Navbar ,Button} from 'react-bootstrap'
import { ModeContext } from '../context/modeContext'
import { LangContext } from '../context/langContext'

const Header = () => {
  const [mode, setMode] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  return (
    <Navbar expand="lg" className="bg-body-light navbar">
      <Container>
        <Navbar.Brand className='brand' href="/">Handout</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='page'>{lang==='en' ? 'Home' : 'Ana Səhifə'}</Nav.Link>
            <Nav.Link href="/about" className='page'>{lang==='en' ? 'About' : 'Haqqımızda'}</Nav.Link>
            <li className="nav-item dropdown page">
        <a className="nav-link dropdown-toggle page" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {lang==='en' ? 'Shop' : 'Mağaza'}
        </a>
        <ul className="dropdown-menu dropdown1">
          <li><a className="dropdown-item" href="/product">{lang==='en' ? 'Shop List' : 'Mağaza Siyahısı'}</a></li>
          <li><a className="dropdown-item" href="/cart">{lang==='en' ? 'Cart' : 'Səbət'}</a></li>
          <li><a className="dropdown-item" href="/checkout">{lang==='en' ? 'Checkout' : 'Ödəniş'}</a></li>
          <li><a className="dropdown-item" href='/'>{lang==='en' ? 'Product Details' : 'Məhsul Təfərrüatları'}</a></li>
        </ul>
      </li>
            <Nav.Link href="/" className='page'>{lang==='en' ? 'Blog' : 'Bloq'}</Nav.Link>
            <Nav.Link href="/contact" className='page'>{lang==='en' ? 'Contact' : 'Əlaqə'}</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/cart" > <button type="button" className="btn btn-light position-relative">
            <i className="fa-solid fa-cart-shopping"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          0
          <span className="visually-hidden">unread messages</span>
        </span>
      </button></Nav.Link>
            <Nav.Link href="/product"><Button className='orderBtn ms-2'>{lang==='en' ? 'ORDER ONLİNE' : 'ONLİNE SİFARİŞ'}</Button></Nav.Link>
            <button className='modeBtn mt-3 ms-2' onClick={()=>{
          mode==='light' ? setMode('dark') : setMode('light')
          mode === 'light' ? localStorage.setItem('mode','dark') :  localStorage.setItem('mode','light')
        }} > {mode === 'light' ? <img src="https://i.ibb.co/FxzBYR9/night.png" alt="" /> : <img src="https://i.ibb.co/7JfqXxB/sunny.png" alt="" /> }</button>

        <button className='langBtn mt-3 ms-3' onClick={()=>{
          lang==='en' ? setLang('az') : setLang('en')
          lang === 'en' ? localStorage.setItem('lang','az') :  localStorage.setItem('lang','en')
        }}>{lang==='en' ? "AZ" : 'EN'}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header