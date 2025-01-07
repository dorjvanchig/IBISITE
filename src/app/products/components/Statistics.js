import React from 'react'
import stats from './json/ProductStatistics.json'


function Statistics() {
    return (
        <div className='w-full h-auto mt-[50px] mb-[100px] flex items-center justify-center'>
            <ul className='h-full w-[90%] flex flex-row overflow-hidden items-center flex-wrap justify-center'>
                {stats.map(function (curlylist, i) {
                    return (
                        <li key={'statistics' + i } className=' my-[20px] w-[85%] md:w-[45%] lg:w-[30%] h-[150px] mx-[1%] rounded-2xl flex flex-col items-center shadow-lg bg-[#fdfdfd] shadow-blue-300'>
                            <div className='w-full h-3/4 flex justify-center items-center'><p className='text-blue-800 text-8xl'>{ curlylist["number"] }</p></div>
                            <div className='w-[90%] h-1/4'><p className='text-center text-[10.5px] text-gray-600'>{ curlylist["description"] }</p></div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Statistics