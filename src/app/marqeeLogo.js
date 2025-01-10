import React from 'react'
import Image from 'next/image'
import partner1 from '../../public/CompanyLogo/1.jpg'
import partner2 from '../../public/CompanyLogo/2.png'
import partner3 from '../../public/CompanyLogo/3.jpg'
import partner4 from '../../public/CompanyLogo/4.png'
import partner5 from '../../public/CompanyLogo/5.jpg'
import partner6 from '../../public/CompanyLogo/6.png'



export default function Marqee() {
  return (
    <div className='w-screen h-[200px] bg-blue-500 bg-opacity-50 backdrop-blur-md hover:cursor-default'>
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-md sm:text-lg md:text-xl font-bold font-poppins text-white text-center mt-[5px]'>
                Хамтрагч байгууллагууд
            </h3>
        </div>
        <div className="inline-block animate-marquee whitespace-nowrap w-full">
            <Image src={partner1} alt="partner1" className="inline-block mx-4" width={120} height={120} />
            <Image src={partner2} alt="partner2" className="inline-block mx-4" width={120} height={120} />
            <Image src={partner3} alt="partner3" className="inline-block mx-4" width={120} height={120} />
            <Image src={partner4} alt="partner4" className="inline-block mx-4" width={120} height={120} />
            <Image src={partner5} alt="partner5" className="inline-block mx-4" width={120} height={120} />
            <Image src={partner6} alt="partner6" className="inline-block mx-4" width={120} height={120} />

        </div>
    </div>
  )
}
