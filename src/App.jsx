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
          <Route path='/product/:url' element={<ProductDetails />}></Route>
        </Routes>
        </ProductProvider>
        </div>
  )
}

const App = () => {
  return (
   
   <BrowserRouter>
   <LangProvider>
    <ModeProvider>
        <Main />
      </ModeProvider>
      </LangProvider>
    </BrowserRouter>

    
  )
}

export default App