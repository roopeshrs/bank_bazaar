import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Achievement from './Components/Achievement/Achievement'
import Service from './Components/Service/Service'
import SignupBanner from './Components/SignupBanner/SignupBanner'
import Product from './Components/Product/Product'
import About from './Components/About/About'
import Funded from './Components/Funded/Funded'
import MoreInfo from './Components/MoreInfo/MoreInfo'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Achievement />
      <Service />
      <SignupBanner />
      <Product />
      <About />
      <Funded />
      <MoreInfo />
      <Footer />
    </div>
  )
}

export default App