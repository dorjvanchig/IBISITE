import React from 'react'
import MainFormat from './mainFormat'
import Image from 'next/image'

function Format1( props ) {
  return (
    <MainFormat>
      <section id='heroSection'>
          <div className='w-full h-[550px] text-white bg-gradient-to-r from-blue-500 via-sky-800 to-blue-700 flex justify-center items-center relative flex-col'>
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center bg-fixed brightness-[40%] z-0"
            style={{
              backgroundImage: `url(${props.data["heroimg"]})`,
            }}
          ></div>
            <h1 id='CompanyIntro' className='text-[50px] md:text-[80px] font-opensans font-bold text-center z-10 text-white'>
              { props.data["title"] }
            </h1>
            <h2 id='CompanyIntroSubtitle' className='text-[16px] md:text-2xl font-opensans font-normal text-center z-10 text-white'>
              { props.data["subtitle"]}
            </h2>
          </div>
        </section>
        <section id='content'>
          <props.Content id={ props.id }><props.additions /></props.Content>
          {/* <div
            className="absolute top-0 bg-cover bg-center bg-fixed brightness-[40%] z-0 w-full h-[500px] md:h-[500px]"
            style={{
              backgroundImage: `url(${props.data["image"]})`,
            }}
          ></div> */}
        </section>
    </MainFormat>
  )
}

export default Format1