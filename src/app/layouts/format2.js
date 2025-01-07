import React from 'react'
import MainFormat from './mainFormat'

function Format2( props ) {
  return (
    <MainFormat>
      <section id='heroSection'>
          <div className='w-full h-[400px] text-white bg-gradient-to-r from-blue-500 via-sky-800 to-blue-700 flex justify-center items-center relative flex-col'>
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center bg-fixed brightness-[40%] z-0"
            style={{
              backgroundImage: `url(${props.data["heroimg"]})`,
            }}
          ></div>
            <h1 id='CompanyIntro' className='text-[40px] md:text-[60px] font-opensans font-bold text-center z-10 text-white'>
              { props.data["title"] }
            </h1>
            <h2 id='CompanyIntroSubtitle' className='text-[16px] md:text-2xl font-opensans font-normal text-center z-10 text-white'>
              { props.data["subtitle"]}
            </h2>
          </div>
        </section>
        <section id='content'>
          <props.Content id={ props.id }><props.additions /></props.Content>
        </section>
    </MainFormat>
  )
}

export default Format2