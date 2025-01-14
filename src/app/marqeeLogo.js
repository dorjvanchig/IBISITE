import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

import partner1 from '../../public/CompanyLogo/1.jpg';
import partner2 from '../../public/CompanyLogo/2.png';
import partner3 from '../../public/CompanyLogo/3.jpg';
import partner4 from '../../public/CompanyLogo/4.png';
import partner5 from '../../public/CompanyLogo/5.jpg';
import partner6 from '../../public/CompanyLogo/6.png';
import partner7 from '../../public/CompanyLogo/7.png';
import partner8 from '../../public/CompanyLogo/8.jpg';
import partner9 from '../../public/CompanyLogo/9.jpg';
import partner10 from '../../public/CompanyLogo/10.jpg';
import partner11 from '../../public/CompanyLogo/11.jpg';
import partner12 from '../../public/CompanyLogo/12.png';
import partner13 from '../../public/CompanyLogo/13.png';
import partner14 from '../../public/CompanyLogo/14.png';
import partner15 from '../../public/CompanyLogo/15.png';
import partner16 from '../../public/CompanyLogo/16.jpg';
import partner17 from '../../public/CompanyLogo/17.png';
import partner18 from '../../public/CompanyLogo/18.png';
import partner19 from '../../public/CompanyLogo/19.jpg';
import partner20 from '../../public/CompanyLogo/20.jpg';
import partner21 from '../../public/CompanyLogo/21.jpg';
import partner22 from '../../public/CompanyLogo/22.png';
import partner23 from '../../public/CompanyLogo/23.jpg';
import partner24 from '../../public/CompanyLogo/24.png';
import partner25 from '../../public/CompanyLogo/25.jpg';
import partner26 from '../../public/CompanyLogo/26.png';
import partner27 from '../../public/CompanyLogo/27.jpg';
import partner28 from '../../public/CompanyLogo/28.jpg';

const partners = [
  partner1, partner2, partner3, partner4, partner5, partner6, partner7,
  partner8, partner9, partner10, partner11, partner12, partner13, partner14,
  partner15, partner16, partner17, partner18, partner19, partner20, partner21,
  partner22, partner23, partner24, partner25, partner26, partner27, partner28,
];
export default function Marquee() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 10,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-screen h-[220px] bg-blue-500 px-10 backdrop-blur-md hover:cursor-pointer ">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-md sm:text-lg md:text-xl font-bold font-poppins text-white text-center mt-[5px]">
          Хамтрагч байгууллагууд
        </h3>
      </div>
      <div className="inline-block whitespace-nowrap w-full">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center mt-2">
              <Image src={partner} alt={`partner${index + 1}`} width={120} height={120} className="inline-block mx-4 object-contain"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

