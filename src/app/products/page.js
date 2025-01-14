'use client'

import Header from '../header'
import MainPage from './components/MainProductPage'
import Footer from '../footer'
import Productlist2 from './components/productlist2'
import SideNav from '../sidenav'
import Marquee from '../marqeeLogo'

//this is temporary - integrate this into MainPage after this is finished
import ProductCards from './components/productcards'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-20 w-full">
      <section id='SideNavigation' className='z-50'>
        <SideNav />
      </section>
      <section id='header' className='fixed top-0 w-full z-50'>
        <div className="bg-gradient-to-r from-[#013a63] from-[10%] via-[#014f86] to-[#61a5c2] to-[80%] h-20 w-full">
          <Header />
        </div>  
      </section>
      <section id='productList'>
        <Productlist2 />
      </section>
      <section id='mainPage'>
        <MainPage />
      </section>
      <sectiod id='productCards'>
        <ProductCards />
      </sectiod>
      <section>
        <Marquee />
      </section>
      <section id='footerSection'>
        <Footer />
      </section>
    </main>
  )
}
