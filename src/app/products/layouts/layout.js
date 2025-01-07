

import { useState } from 'react'
import Header from '@/app/header'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import Viewcontainer1 from './viewcontainer'
import Othersubpage from './othersubpage'
import Footer from '@/app/footer'
import Detailssubpage from './detailssubpage'
import MainFormat from '@/app/layouts/mainFormat'
import SideNav from '@/app/sidenav'
import Pricesubpage from './pricesubpage'

// import { Text } from '../Diamond6/page'

export default function Layout( props ) {
  //----------------------------"Buteegdehuunii tuhai", "Bureldehuun" gsn tovchnd deer darahad state uurclugdune--------------------//
  const [isDetails, SetIsDetails] = useState(0)
  const HandleDetailsButtonClick = () => {
    SetIsDetails(0)
  }
  const HandleOtherButtonClick = () => {
    SetIsDetails(1)
  }
  const HandlePriceButtonClick = () => {
    SetIsDetails(2)
  }

  //-------------------------Give parameter to Text function-------------//
  //------------------------------Tovchnuud-----------------------------//
  function Detailsbutton() {
    return (
      <button className='relative w-3/4 h-2/3 flex items-center' onClick={ HandleDetailsButtonClick }>
        <h2 className='absolute left-0 text-[13px] sm:text-[16px] font-semibold w-auto flex-col text-black'>
          Бүтээгдэхүүний тухай
          <LineButton detailsbuttonclicked={ isDetails } detailsbutton={ 0 }/>
        </h2>
      </button>
    )
  }
  function Otherbutton() {
    return (
      <button className='relative w-3/4 h-2/3 flex items-center' onClick={ HandleOtherButtonClick }>
        <h2 className='absolute left-0 text-[13px] sm:text-[16px] font-semibold w-auto flex-col text-black'>
            Системийн үндсэн модулиуд
          <LineButton detailsbuttonclicked={ isDetails } detailsbutton={ 1 }/>
        </h2>
      </button>
    )
  }
  function Pricebutton() {
    return (
      <button className='relative w-3/4 h-2/3 flex items-center' onClick={ HandlePriceButtonClick }>
        <h2 className='absolute left-0 text-[13px] sm:text-[16px] font-semibold w-auto flex-col dark:text-black'>
          Үнийн санал
          <LineButton detailsbuttonclicked={ isDetails } detailsbutton={ 2 }/>
        </h2>
      </button>
    )
  }

  //-----------------------------Undsen butsaalt-------------------//
  return (
    <main className="flex min-h-screen flex-col scroll-smooth bg-white overflow-x-hidden">
      <section id="SideNav" className='z-50'>
          <SideNav />
      </section>
      <section id='Header'>
          <Header />
      </section>
      <div className='h-auto w-full'>
        <div className="relative w-full h-[620px] bg-[#C5E9FF] flex items-center justify-center">
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${ props.data["herosrc"] })`,
            }}
          ></div>
          <Viewcontainer1 details={ props.data }/>
          <div className=' absolute left-0 top-[70px]'><Backbutton /></div>
        </div>
        <div id='details0' className='relative h-[100px] w-full'>
          <div className='absolute left-[10%] h-full w-full sm:w-5/6 md:w-4/6 lg:w-3/6 flex items-center flex-row'>
            <div className='relative w-1/2 h-1/2'>
              <Detailsbutton />
            </div>
            <div className='relative w-1/2 h-1/2'>
              <Otherbutton />
            </div>
            <div className='relative w-1/2 h-1/2'>
              <Pricebutton />
            </div>
          </div>
        </div>
        <props.Text isDetails={ isDetails } id={ props.id }>{ props.children }</props.Text>
        <Othersubpage isDetails={ isDetails } data={ props.data }/>
        <Pricesubpage isDetails={ isDetails } tableinfo={ props.data["tableinfo"] } id={ props.id } />
      </div>
      <section id='Footer'>
        <Footer />
      </section>
    </main>
  )
}

//------------------------------Tovchnii doorh zuraas-------------------------------//
function LineButton({ detailsbuttonclicked, detailsbutton}) {

  //--------------Ene kodiig unshij baigaa hund uuchlaaarai, uneheer zalhuuraad ingeed hiiclee-----------------------------------------//
  if (detailsbuttonclicked === 0) {
    if (detailsbutton != detailsbuttonclicked) {
      return
    } else {
      return (<div className='w-full h-1 bg-blue-900'></div>)
    }
  } else {
    if (detailsbuttonclicked === 1) {
      if (detailsbutton != detailsbuttonclicked) {
        return
      } else {
        return (<div className='w-full h-1 bg-blue-900'></div>)
      }
    } else {
      if (detailsbuttonclicked === 2) {
        if (detailsbutton != detailsbuttonclicked) {
          return
        } else {
          return (<div className='w-full h-1 bg-blue-900'></div>)
        }
      }
    }
  }
}

//------------------------------Undsen buteegdehuun huudas ruu butsah tovch----------------------//
function Backbutton() {
  return (
    <button className='absolute top-[30px] left-[35px] xl:left-[70px] h-auto w-auto rounded-full bg-blue-950 transition duration-300 hover:bg-white hover:text-blue-950'>
      <a href='/products'><ChevronLeftIcon className='h-[35px] md:h-[40px] w-auto lg:h-[50px]'/></a>
    </button>
  )
}
