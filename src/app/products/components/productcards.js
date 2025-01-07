import React from 'react'
import data from './json/othersystem'

export default function Productcards() {
  return (
    <div className='relative h-full w-[80%] left-[10%] flex justify-center items-center flex-col'>
        <div id="otherSystem" className='w-full h-[100px]'></div>
            <div className="w-screen h-[100px] md:h-[140px] flex items-center justify-center 
            bg-[url('https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg')] 
            bg-cover bg-center bg-fixed">
                <h1 id='buteegdehuunHeader' className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>БУСАД СИСТЕМҮҮД</h1>
            </div>
        <div className='h-[90%] w-full flex items-center relative flex-wrap justify-center translate-y-[20px]'>
            { data.map(function(curlylist, i) {
                return (
                    <ProductButton key={'card' + curlylist["name"] + i} name={ curlylist["name"] } src={ curlylist["srcimg"] } href={ 'products/' + curlylist["href"] } desc={ curlylist["desc"] }/>
                )
            })}
            <div className='h-[20px] w-full'></div>
        </div>
    </div>
  )
}

function ProductButton(props) {
    return (
        <div className='w-full sm:w-1/2 lg:w-[300px] flex items-center justify-center flex-col'>
            <div className='h-[36px] w-full'></div>
                <button className='bg-gray-50 hover:bg-slate-100  hover:-translate-y-4 ease-in-out aspect-[0.65] w-[90%] flex-col rounded-xl ring-1 ring-gray-300 transition duration-500 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-black hover:scale-110'>
                    <a href={ props.href }>
                        <div className='h-1/2 w-full flex justify-center items-center rounded-t-xl'>
                            <img className='h-[90%] w-[80%]' src={ props.src }></img>
                        </div>
                        <div className='h-1/2 w-full flex justify-center flex-wrap overflow-hidden py-[10px] bg-[#0096c7] rounded-b-xl'>
                            <div className='w-[85%] h-1/3 flex items-center text-[16px] sm:[8px] lg:text-[16px] xl:text-[20px] font-semibold dark:text-white text-start'>{ props.name }</div>
                            <div className='w-[85%] h-[60%] text-[10px] sm:text-[9px] xl:text-[11px] 2xl:text-[12px] font-normal text-left dark:text-white'>{ props.desc }</div>
                        </div>
                    </a>
                </button>
            {/* <div className='h-[18px] w-full'></div> */}
        </div>
    )
}