import { Typography } from "@material-tailwind/react";
import product from './products/components/json/productjson.json'
 
const SITEMAP = [
  {
    title: "Компани",
    links: [
      {
        "name" : "Танилцуулга",
        "href" : "./company"
      },
      {
        "name" : "Бүтэц зохион байгуулалт",
        "href" : "#"
      },
      {
        "name" : "Холбоо барих",
        "href" : "#"
      }
    ]
  },
  {
    title: "Бүтээгдэхүүн",
    links: [ 
      {
      "name" : "Даймонд ERP",
      "href" : "/products/DiamondERP"
      },
      {
        "name" : "Импакт",
        "href" : "/products/Impact"
      },
      {
        "name" : "Эмералд",
        "href" : "/products/Emerald"
      },
      {
        "name" : "Спинел",
        "href" : "/products/Spinel"
      }
    ]
  },
  {
    title: "Үйлчилгээ",
    links: [
      {
        "name" : "Десктоп програм хөгжүүлэх",
        "href" : "#"
      },
      {
        "name" : "Веб програм хөгжүүлэх",
        "href" : "#"
      },
      {
        "name" : "Мобайл програм хөгжүүлэх",
        "href" : "#"
      },
      {
        "name" : "Програм нэвтрүүлэх үйлчилгээ",
        "href" : "#"
      },
      {
        "name" : "Техник хангамжийн үйлчилгээ",
        "href" : "#"
      },
      {
        "name" : "Онлайн үйлчилгээ",
        "href" : "#"
      }
    ]
  },
  {
    title: "Хүний нөөц",
    links: [
      {
        "name" : "Компанийн хүний нөөц",
        "href" : "#"
      },
      {
        "name" : "Нээлттэй ажлын байр",
        "href" : "#"
      },
      {
        "name" : "Анкет бөглөх",
        "href" : "#"
      }
    ]
  }
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="w-full">
    <div className="max-w-screen bg-gradient-to-tr from-[#013a63] from-[10%] via-[#014f86] to-[#61a5c2] to-[80%]">
      <div className="mx-auto w-full max-w-7xl px-8 bg-tranparent">
        <div className="mx-auto grid w-full grid-cols-1 gap-5 py-12 md:grid-cols-2 lg:grid-cols-5">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50 text-white"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a
                      href={ link["href"] }
                      className="inline-block py-1 pr-2 transition-transform text-white hover:scale-95"
                    >
                      {link["name"]}
                    </a>
                  </Typography>
                ))}
              </ul>

            </div>
          ))}
          <div>
            <Typography color='blue-gray' className='mb-4 font-bold uppercase opacity-50 text-white'>
                Холбоо барих
            </Typography>
            <Typography color="blue-gray" className='font-normal text-white'>
                    <span className="font-bold">
                        Байршил: {' '}
                        <span className="font-normal italic">
                            Улаанбаатар хот,
                            Сүхбаатар дүүрэг, 1-р хороо,
                            Чингисийн өргөн чөлөө-17,
                            Виста оффис төв
                        </span>
                    </span> <br></br> <br></br>
                    <span className="font-bold">
                        Утас: {' '}
                        <span className="font-normal italic">
                            976-70002626
                        </span>
                    </span> <br></br> <br></br>
                    <span className="font-bold">
                        Факс: {' '}
                        <span className="font-normal italic">
                            976-70130120
                        </span>
                    </span> <br></br> <br></br>
                    <span className="font-bold">
                        И-Мэйл: {' '}
                        <span className="underline font-normal text-white hover:text-blue-500">
                            support@ibi.mn
                        </span>
                    </span>
            </Typography>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-white"
          >
            &copy; {currentYear} <a href="#">IBI LLC</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-white sm:justify-center">
            <Typography as="a" href="https://www.facebook.com/InteractiveBI/" className="opacity-80 scale-125 transition-opacity duration-200 hover:opacity-100 hover:scale-110">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity duration-200 hover:opacity-100 hover:scale-95">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 scale-125 transition-opacity duration-200 hover:opacity-100 hover:scale-110">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 scale-125 transition-opacity duration-200 hover:opacity-100 hover:scale-110">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>       
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}