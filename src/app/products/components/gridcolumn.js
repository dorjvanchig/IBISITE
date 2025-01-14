import React from 'react'
import data from './json/Advantages'

function Gridcolumn() {
  return (
    <>
        <div className='h-[30px] w-full'></div>
        <div className='h-auto w-full flex justify-center flex-wrap'>
            {data.map(function(curlylist, i) {
                return (
                    <Card3 key={ i } title={ curlylist["title"] } src={ curlylist["imgsrc"] } sdesc={ curlylist["shortdesc"] } fdesc={ curlylist["fulldesc"] } imgsrc={ curlylist["imgsrc"] }/>
                )
            })}
        </div>
    </>
  )
}

function Card3(props) {
    return (
        <div className="w-1/2 lg:w-1/3 h-[200px] flex justify-center items-center mb-4">
            <div className="w-[90%] h-[85%] relative">
                <div className=' bg-[#e8f6ff] dark:text-black h-full w-full absolute top-0 opacity-0 hover:opacity-100 transition duration-[400ms] ease-in-out rounded-xl'>
                    <div className="w-full h-1/5 flex justify-center items-center"><h3 className="font-semibold text-[70%] text-center"> { props.title } </h3></div>
                    <div className="w-full h-4/5 overflow-y-auto "><p className="text-[60%] text-center sm:text-[80%] sm:ml-5 sm:text-start">{ props.fdesc }</p></div>
                </div>
                <div className="w-full h-1/3 flex justify-center items-center static"><img className="aspect-auto h-[80%]" src={ props.imgsrc } /></div>
                <div className="h-full">
                    <div className="w-full h-1/5 flex justify-center items-center"><h3 className="font-semibold text-[70%] sm:text-[90%] text-center dark:text-black">{ props.title }</h3></div>
                    <div className="w-full h-[46.66%] overflow-y-hidden"><p className="text-[75%] text-center dark:text-black">{ props.sdesc }</p></div>
                </div>
            </div>
        </div>
    )
}

export default Gridcolumn