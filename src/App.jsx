import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import ShopList from './pages/ShopList'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import { ProductProvider } from './context/productContext'
import { ModeContext, ModeProvider } from './context/modeContext'
import { LangProvider } from './context/langContext'
import { CartProvider } from 'react-use-cart'
import Blog from './pages/Blog'
import Wishlist from './pages/Wishlist'
import { WishlistProvider } from 'react-use-wishlist'
import FAQ from './pages/FAQ'
import Footer from './components/Footer'


const Main = () => {
  const [mode] = useContext(ModeContext);
  return(
    <div className={mode}>
        <ProductProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<ShopList />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/product/:url' element={<ProductDetails />}></Route>
        </Routes>
        <Footer />
        </ProductProvider>
        </div>
  )
}

const App = () => {
  return (
   
   <BrowserRouter>
   <CartProvider>
   <WishlistProvider>
   <LangProvider>
    <ModeProvider>
        <Main />
      </ModeProvider>
      </LangProvider>
    </WishlistProvider>
      </CartProvider>
    </BrowserRouter>

    
  )
}

export default App