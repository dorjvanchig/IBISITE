import React from 'react'

function Product() {
  return (
    // <header className="bg-white text-black h-11 px-8">
    //       <div className="flex items-center justify-between">
    //         <div className="text-xl font-bold">Logo</div>
    //         <nav>
    //           <ul className="flex space-x-4 justify-center">
    //             <li><a href="#" className="hover:text-gray-300">Компани</a></li>
    //             <li><a href="#" className="hover:text-gray-300">Бүтээгдэхүүн</a></li>
    //             <li><a href="#" className="hover:text-gray-300">Үйлчилгээ</a></li>
    //             <li><a href="#" className="hover:text-gray-300">Тоног төхөөрөмж</a></li>
    //             <li><a href="#" className="hover:text-gray-300">Хүний нөөц</a></li>
    //             <li><a href="#" className="hover:text-gray-300">Хамтрагчид</a></li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </header>
    <>
      <div className='h-24 bg-[#C5E9FF]'></div>
      <div className='flex items-center justify-center h-screen bg-gradient-to-b from-[#009dff00] to-[#009dff]'>
        <p className='absolute font-bold top-[500px] font-sans text-9xl text-white'>Даймонд ERP</p>
        <img className='w-[843px] h-auto absolute top-[120px]' src="https://freepngimg.com/download/diamond/36748-2-transparent-diamond.png" alt='nothing' />
        <img className='w-[350px] h-auto absolute top-[150px] left-[130px] rotate-[20deg]' src="https://freepngimg.com/download/diamond/36748-2-transparent-diamond.png" alt='nothing' />
        <img className='w-[300px] h-auto absolute top-[370px] right-[150px] rotate-[-12deg]' src="https://freepngimg.com/download/diamond/36748-2-transparent-diamond.png" alt='nothing' />
      </div>
    </>
  )
}

export default Product