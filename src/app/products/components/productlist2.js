import React from 'react';
import { useState } from 'react';
import productjson from './json/productjson.json';
import Head from 'next/head';


////--------------------------product listing structure---------------------------////

const productstruct = {
  name: '',
  imgsrc: '',
  href: '',
  key: ''
};



////-----------------------------------display--------------------------------////
function Productlist2() { 

  const [productnumber, SetProductnumber] = useState(0)
  const [width, setWidth] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  React.useEffect(() => {
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  let products = []

  let product = {
    name: '',
    imgsrc: '',
    href: '',
    key: ''
  };

  productjson.map(function(curlylist) {
    product = {
      name: curlylist['name'],
      imgsrc: curlylist['srcimg'],
      href: curlylist['href'],
      key: curlylist['key']
    }
    products.push(product)
  })
  


  //---------------------------------------Undsen Butsaalt-----------------------------------//
  let displayproducts = products

  return (
    <div className='h-[100px] w-screen flex items-center justify-center z-30 border-black shadow-md'>
      <div className=' bg-transparent h-[100px] w-screen inline-block align-middle relative'>
            <div className='h-auto w-screen flex justify-center scroll-smooth'><Productbox productlist={displayproducts}/></div>
      </div>
    </div>
  )
}

//------------------------------------COMPLEMENTARY FUNCTIONS-------------------------------------//

function Productbox({ productlist }) {
  const listRef = React.useRef(null)
  //index of "selected" (active) product icon
  const [index, setIndex] = useState(0)

  //state of whether left and right button (LB, RB) is visisble or not
  const [isRBVisible, setIsRBVisible] = useState(false)
  const [isLBVisible, setIsLBVisible] = useState(true)

  //function using the states to hide RB or LB on scroll (Hide RB or LB on where the scroll is: When it is at the start, hide LB for example)
  function HandleScroll() {
    const listItems = listRef.current.getElementsByTagName('li')
    const itemWidth = 100
    const { scrollLeft, scrollWidth, clientWidth } = listRef.current;

    //ActiveIndex is the index number of the product list element to be ACTIVE: essentially saying that the product
    //at ActiveIndex is the product list element that is selected
    let activeIndex = Math.floor(scrollLeft / itemWidth)
    activeIndex = Math.max(0, Math.min(activeIndex, listItems.length - 1))

    if ((scrollLeft + 1) >= scrollWidth - clientWidth) {
      if (isLBVisible) {
        setIsLBVisible(false)
      }
    } else {
      if (!isLBVisible) {
        setIsLBVisible(true)
      }
    }

    if (scrollLeft === 0) {
      setIsRBVisible(false)
    } else {
      if (!isRBVisible) {
        setIsRBVisible(true)
      }
    }

    setIndex(activeIndex)
  }

  //Functionality of the Right Button (scrolling to the next list element)
  function scrollNext() {
    if (listRef.current) {
      const ListElements = listRef.current.getElementsByTagName("li")
      if (index >= 0 && index < ListElements.length - 1) {
        ListElements[index].classList.remove('active')
        ListElements[index + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        ListElements[index + 1].classList.add('active')
      }
    }
  }

  //Functionality of the Left Button (scrolling to the previous list element)
  function scrollPrevious() {
    if (listRef.current) {
      const ListElements = listRef.current.getElementsByTagName("li")
      if (index > 0 && index <= ListElements.length - 1) {
        ListElements[index].classList.remove('active')
        ListElements[index - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        ListElements[index - 1].classList.add('active')
      }
    }
  }

  //Body of the RightButton
  function RightButton() {
    let bopacity = 1 //Bopacity is short for: Button Opacity
    if (isRBVisible) {
      bopacity = 1
    } else {
      bopacity = 0
    }
    return (
      <>
      <div className='w-auto h-auto border-gray-300 border-r-[1px]' style={{
        opacity: bopacity,
      }}>
        <button className=' w-[40px] h-full overflow-hidden flex justify-center items-center' onClick={ scrollPrevious }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      </>
    )
  }
  function LeftButton() {
    let bopacity = 1
    if (isLBVisible) {
      bopacity = 1
    } else {
      bopacity = 0
    }
    return (
      <>
      <div className='w-auto h-auto border-gray-300 border-l-[1px] md:invisible' style={{
        opacity: bopacity,
      }}>
        <button className='w-[40px] h-full overflow-hidden flex justify-center items-center' onClick={ scrollNext }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button> 
      </div>
      </>
    )
  }

  //-------------------------------------------------------UNDSEN BUTSAALTIIN BODY------------------------------------//

  return (
  <>
    <RightButton />
    <ul onScroll={ HandleScroll } ref={ listRef } className='static h-[100px] w-auto flex overflow-hidden overflow-x-auto flex-row [&::-webkit-scrollbar]:hidden'>
      {productlist.map(function(product) {
        return (
        <li key={ product.key }>
          <a href={ '/products' + product.href } className='relative h-[100px] w-[100px] bg-transparent flex justify-center hover:text-blue-500 dark:text-black'>
            <img className='absolute top-5 justify-center w-[46.4px] h-[42px]' src={ product.imgsrc } alt={ product.name }/>
            <p className='absolute bottom-4 text-xs'>{ product.name }</p>
          </a>
        </li>
        )
      })}
    </ul>
    <LeftButton />
  </>
  )
}

export default Productlist2