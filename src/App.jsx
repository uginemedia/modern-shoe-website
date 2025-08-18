import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ProductTab from './components/Products/ProductTab'
import Feature from './components/Features/Feature'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ProductTab />
      <Feature />
      <Footer />
    </div>
  )
}

export default App