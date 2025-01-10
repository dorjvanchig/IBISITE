import React from 'react'

function Component2() {
//-----------------------------------This is a component that can hold an image on the right and a description with a link button on the right side------------//
  return (
    <div className="w-screen h-fit md:h-auto bg-white flex flex-col md:flex-row px-[10%]">
      
        <div className="w-full md:w-auto md:h-96 flex items-center justify-center">
          <img src="/productIcons/diamond5.png" alt="pic" className="h-auto w-auto" />
        </div>
        <div className="w-full md:w-auto flex flex-col justify-center">
          <div className="mt-4 ml-4 md:mt-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">Шинэлэг шийдэл</h2>
            <p className="mt-2 md:mt-[15px] text-sm sm:text-base md:text-lg text-gray-500 mb-6">
              Мөнгөн хөрөнгө, бараа материал, хангамжийн материал, үндсэн хөрөнгө, авлага өглөг, төсөв, төсөл, зардал болон байгууллагын санхүүтэй холбоотой бүх бүртгэлээ хөтлөх, тайлан мэдээллүүдээ цаг алдалгүй, үнэн зөвөөр авахад зориулагдсан систем юм. Уг систем нь Даймонд ERP цогц системийн бусад бүх системтэйгээ холбогдон ажилладгаараа онцлогтой юм.
            </p>
            <ul className="hover:cursor-pointer mt-4 mb-3 w-[fit-content] bg-white drop-shadow-xl rounded-xl text-blue-600 text-center ring-2 ring-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white">
              <a href="/products/Diamond5" className="block w-full h-full py-2 px-4 text-md md:text-xl">
                Дэлгэрэнгүй
              </a>
            </ul>
          </div>
        </div>
    </div>
  );
  
}

export default Component2;

  