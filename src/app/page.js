'use client'

import Headertwo from './Headertwo'
import MainPage from './products/components/MainProductPage'
import Footer from './footer'
import SideNav from './sidenav'
import Header from './header'
import Component2 from './components/component2'
import PurposeWord from './components/purposeWord'
import Marqee from './marqeeLogo'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <section id='SideNavigation' className='z-50'>
        <SideNav />
      </section>
      <div id='topContainer' className="bg-[url('/bigheroimg.jpeg')] bg-cover bg-center bg-fixed min-h-screen max-h-screen">
        <section id='header'>
          <Header />
        </section>
        <section id='heroSection' className='z-40 '>
          <div className="w-screen max-h-screen min-h-screen backdrop-brightness-50">
            <div className="container mx-auto flex px-5 h-screen items-left justify-center flex-col relative">
              <div className="text-center md:text-start text-white lg:w-8/12 w-full relative">
                <h1 className="my-4 text-[45px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight uppercase">

                  {/* <span className='text-[#072ac8] drop-shadow-2xl'>I</span>nteractive<br/>
                  <span className='text-[#1e96fc] drop-shadow-2xl'>B</span>usiness<br/>
                  <span className='text-[#072ac8] drop-shadow-2xl'>I</span>ntelligence */}

                  <span className='text-white drop-shadow-2xl'>I</span>nteractive<br/>
                  <span className='text-white drop-shadow-2xl'>B</span>usiness<br/>
                  <span className='text-white drop-shadow-2xl'>I</span>ntelligence

                  {/* <span className='text-white'>И</span>нтерактив<br/>
                  <span className='text-white'>БИ</span>{' '}АЙ{' '}
                  <span className='text-white'>ХХК</span> */}

                </h1>
                <h2 className="text-white text-xl md:text-2xl mb-8 font-medium tracking-wide normal-case">
                  Санхүү, нягтлан бодох бүртгэл болон бусад бүх төрлийн програм хангамж
                </h2>
                {/* <p className="text-lr md:text-xl mb-8">
                  Бид бизнесийн бүхий л салбарт програм хангамжийн автоматжуулалтын цогц шийдлийг санал болгож байна.
                </p> */}
              </div>
              {/* <div className="w-full flex justify-center items-center absolute bottom-[10px] left-0">
                  <button className=" text-white transition durantion-200 hover:text-gray-500 hover:-translate-y-[3px] font-bold rounded-2xl py-4 px-8 ">
                    <a href="/company/introduction" className='text-[13px] sm:text-[15px] lg:text-[18px]'>[Танилцуулга]</a>
                  </button>
                  <button className="ml-2 text-white transition durantion-200 hover:text-gray-500 hover:-translate-y-[3px] font-bold rounded-2xl py-4 px-8 ">
                    <a href="/products" className='text-[13px] sm:text-[15px] lg:text-[18px]'>[Бүтээгдэхүүн]</a>
                  </button>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <div className='ml-[10%] mr-[10%] mt-[2%] py-2'>
        <h2 className='uppercase text-2xl md:text-3xl text-start font-extrabold text-black'>
          САНХҮҮ,{' '}<span className='text-blue-600'>НЯГТЛАН БОДОХ БҮРТГЭЛ</span>{' '}БОЛОН БУСАД БҮХ ТӨРЛИЙН{' '}<span className='text-blue-600'>ПРОГРАМ ХАНГАМЖ</span>
        </h2>
        <p className='text-black text-start text-md md:text-lg font-normal'>
          Бид бизнесийн бүхий л салбарт програм хангамжийн автоматжуулалтын цогц шийдлийг санал болгож байна.
        </p>
        <h1 className='mt-[3%] uppercase text-2xl md:text-3xl text-black font-opensans font-extrabold text-start'>
            МОНГОЛЫН {' '}<span className='text-blue-600'>ТОП-150</span> {' '}
            {' '}АЖ АХУЙ НЭГЖИЙН <span className='text-blue-600'>88 НЬ</span> МАНАЙ КОМПАНИЙН {' '}
            <span className='text-blue-600'>ХАРИЛЦАГЧИД</span>
        </h1>
        <p className='mt-[20px] text-lr md:text-xl lr:text-2xl text-start font-normal text-black italic'>
          Монгол улсын 3000 орчим байгууллага манай бүтээгдэхүүнийг өдөр тутмын үйл ажиллагаандаа хэрэглэж байна.
        </p>
      </div>
      <div className='py-8'>
          <PurposeWord />
      </div>
      <div className=''>
          <Component2 />
      </div>
      <section id='marqeeSection'> 
        <Marqee />
      </section>
      <section id='footerSection'>
        <Footer />
      </section>
    </main>
  )
}
