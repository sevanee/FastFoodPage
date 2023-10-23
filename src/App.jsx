import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductProvider } from './context/productContext'
import { ModeContext, ModeProvider } from './context/modeContext'
import { LangProvider } from './context/langContext'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from 'react-use-wishlist'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/client/Home'
import About from './pages/client/About'
import ShopList from './pages/client/ShopList'
import Cart from './pages/client/Cart'
import Checkout from './pages/client/Checkout'
import Contact from './pages/client/Contact'
import Blog from './pages/client/Blog'
import Wishlist from './pages/client/Wishlist'
import FAQ from './pages/client/FAQ'
import ProductDetails from './pages/client/ProductDetails'
import Dashboard from './pages/admin/Dashboard'
import AddProduct from './pages/admin/update/AddProduct'
import EditProduct from './pages/admin/update/EditProduct'
import AuthorizationPage from './pages/AuthorizationPage'
import Thanks from './pages/client/Thanks'
import NotFoundPage from './pages/client/NotFoundPage'
import SignUp from './pages/client/SignUp'


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
          <Route path='/admin' element={<Dashboard />}></Route>
          <Route path="/admin/add" element={<AddProduct />}></Route>
          <Route path="/admin/edit/:pe" element={<EditProduct />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/thank' element={<Thanks />}></Route>
          <Route path='/authorization' element={<AuthorizationPage />}></Route>
          <Route path='/product/:url' element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
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