import React from 'react'
import Detailssubpage from './detailssubpage'
import data from '../main.json'

export default function Text( props ) {
    let pData
    data.map(function (curlylist) {
      if (props.id === curlylist["id"]) {
        pData = curlylist["text"]
      }
    })
    return (
    <Detailssubpage isDetails={ props.isDetails }>
      <div className='h-auto w-full mb-[100px]'>
          { props.children }
            {pData.map(function ({content, type}, i) {
                switch (type) {
                case 'heading1':
                    return (
                        <div className='mb-[16px] mt-[35px]' key={i}>
                            <h1 className='flex text-3xl md:text-4xl text-blue-500 font-opensans font-bold'> {content} </h1>
                        </div>
                    )
                case 'bullet' :
                    return (
                        <ul key={i} className=' list-disc dark:text-black text-md md:text-lg my-[10px] w-full ml-[3%] lg:w-2/3'>
                            { content.map(function( curlylist2, i ) {
                                return (
                                    <li key={"textbulletlistnotnumbered" + i }> {curlylist2["bulletlist"]} </li>
                                )
                            })}
                        </ul>
                    )
                case 'num' :
                    return (
                        <ul key={i} className=' list-decimal dark:text-black text-md md:text-lg my-[10px] w-full ml-[3%] lg:w-2/3'>
                            { content.map(function( curlylist2, i ) {
                                return (
                                    <li key={"textbulletlist" + i }> {curlylist2["bulletlist"]} </li>
                                )
                            })}
                        </ul>
                    )
                case 'heading2':
                    return (
                        <div className='mb-[16px] mt-[35px]' key={i}>
                            <h1 className='flex text-xl md:text-2xl text-black font-opensans font-bold'> {content} </h1>
                        </div>
                    )
                case 'long':
                    return (
                        <div className='mt-[10px] w-full' key={i}>
                            <p className='font-normal dark:text-black text-base text-md md:text-lg'>
                                {content}
                            </p>
                        </div>
                    )
                default:
                    break;
                }

                return (
                <div key={i} className='mt-[10px] w-full lg:w-2/3 '>
                    <p className='font-normal text-black text-base text-md md:text-lg'>
                        {content}
                    </p>
                </div>
                );
            })}
      </div>
    </Detailssubpage>
    )
  }
