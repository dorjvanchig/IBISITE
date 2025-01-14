import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ButtonGroup, Button } from "@material-tailwind/react"
import Gridcolumn from './gridcolumn'
import Statistics from './Statistics'
import Marquee from '@/app/marqeeLogo'


export default function MainPage(){
    return (
        <div>
            <div className='static ml-[10%] mt-[10px] mr-[10%]' >
                <div id='topPart' className='w-full h-auto'>
                    <div id='title' className='flex text-center justify-start items-center flex-row w-full h-1/6 text-2xl font-bold md:text-4xl lg:text-5xl mt-[40px]'><h1 className='mx-[5%]'><span className='text-blue-600'>ҮНДСЭН</span>{' '}<span className='dark:text-black'>БҮТЭЭГДЭХҮҮН</span></h1></div>
                    <div id='text' className='mx-[10%] mt-[40px] md:mx-[5%] text-justify sm:text-start text-sm md:text-base dark:text-black'><p>ERP гэдэг нь байгууллагын нөөц төлөвлөлтийн цогц шийдэл юм. Байгууллагын нөөц төлөвлөлтийн системийг зөвхэрэглэснээр өөрсдийн бизнесээ өргөжүүлж, байгууллагын санхүү, цалин, хүний нөөц, түгээлт, ханган нийлүүлэлт,агуулах, үйлдвэрлэлээс гадна салбарын онцлогт тохирсон хэрэглэхэд хялбар системээр бизнесийнхээ үнэн бодитоймэдээллийг цаг тухайд нь хүлээн авч оновчтой шийдвэр гарган, үр ашигтай удирдаж, бүтээмжээ нэмэгдүүлэн ажиллах боломжтой болно.</p></div>
                </div>
                <Statistics />
                <div id='middlePart' className='mt-[0px] flex flex-col items-center'>
                    <div className="bg-slate-200 w-screen h-[100px] md:h-[140px] flex justify-center items-center aspect-auto bg-[url('https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg')] bg-cover bg-center bg-fixed">
                        <h1 className='text-2xl font-sans font-bold md:text-3xl lg:text-4xl'>
                            <span className=' text-gray-50'>ДАВУУ</span> {' '}
                            <span className='text-gray-100'>ТАЛУУД</span>
                        </h1>
                    </div>
                    <Gridcolumn />
                </div>
            </div>
        </div>
        
    )
}




