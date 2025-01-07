"use client"

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShieldCheckIcon,
  ArrowUturnUpIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  HomeModernIcon,
  CommandLineIcon,
  LightBulbIcon,
  CurrencyDollarIcon,
  DocumentArrowUpIcon,
  QuestionMarkCircleIcon,
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  PhoneArrowDownLeftIcon,
  PaperAirplaneIcon,
  InformationCircleIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'


const aboutUS = [
    { name: 'Танилцуулга', description: 'Бидний бүтээсэн түүх', href: '/company/introduction', icon: BuildingOfficeIcon},
    { name: 'Бүтээгдэхүүн', description: 'Бүтээгдэхүүний хөгжлийн түүх', href: '/company/product', icon: CodeBracketSquareIcon},
    { name: 'Зохион байгуулалт', description: 'Албадуудын үйл ажиллагааны чиглэл', href: '/company/organization', icon: HomeModernIcon},
    { name: 'Хамтрагч', description: 'Харилцагч байгууллагуудын мэдээлэл', href: '/company/partners', icon: UserGroupIcon},
    { name: 'Стратеги', description: 'Бизнесийн үзэл санаа', href: '/company/strategy', icon: CommandLineIcon},
]
const service = [
  { name: 'Зөвлөх үйлчилгээ', description: 'ERP системийн үр өгөөж', href: '/services/advising', icon: LightBulbIcon},
  { name: 'Борлуулалт', description: 'Борлуулалтын үеийн үйлчилгээ', href: '/services/sales', icon: CurrencyDollarIcon},
  { name: 'Нэвтрүүлэлт', description: 'Худалдаж авсны дараах үйлчилгээ', href: '/services/launch', icon: DocumentArrowUpIcon},
  { name: 'IT үйлчилгээ', description: 'Техник, тоног төхөөрөмжийн үйлчилгээ', href: '/services/softhelp', icon: ComputerDesktopIcon},
]
const HR = [
  { name: 'Яагаад бид гэж?', description: 'Бидэнтэй нэгдэх шалтгаан', href: '/humanResources/whyUs', icon: QuestionMarkCircleIcon},
  { name: 'Ажлын байр', description: 'Нээлттэй ажлын байрны зарууд', href: '/humanResources/vacancy', icon: BuildingOffice2Icon},
  { name: 'CV илгээх', description: 'Ажилд орох хүсэлт гаргах', href: '/humanResources/Resume', icon: ClipboardDocumentCheckIcon},
  { name: 'Санал хүсэлт', description: 'Яагаад бид таныг ажилд авах ёстой вэ?', href: '#', icon: DocumentMagnifyingGlassIcon},
]
const feedback = [
  { name: 'Шууд холбогдох', description: 'Мэдээллийн ажилтнаас мэдээлэл авах', href: '/feedback/contact', icon: PhoneArrowDownLeftIcon},
  { name: 'Албан хүсэлт', description: 'Хамтран ажиллах санал', href: '/feedback/partnershipreq', icon: PaperAirplaneIcon},
  { name: 'Санал гомдол', description: '', href: '/feedback/complaints', icon: InformationCircleIcon},
]

function classNames(...classes) {  
  return classes.filter(Boolean).join(' ')
}

export default function Headertwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true);
    }else{ 
      setColor(false);
     }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  })

  const handleMouseEnter1 = () => {
    setIsOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };

  const handleMouseEnter3 = () => {
    setIsOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setIsOpen3(false);
  };

  const handleMouseEnter4 = () => {
    setIsOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsOpen4(false);
  };


  return (
    <header className='fixed top-0 w-full z-50 font-poppins'>
      <div className={color ? 'transition duration-300 bg-white drop-shadow text-gray-900' : 'transition duration-300 bg-transparent text-white'}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-[15px] px-8 relative" aria-label="Global">
          <div className="flex items-center">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IBI</span>
              <img className="h-[52px] w-auto transition duration-[400ms] ease-in-out hover:scale-110" 
              src={color ? "/ibicoloredlogo.png" : "/ibiwhitelogo.png"} alt="IBI LOGO" />
            </a>
          </div>
          <div id='Hamburger' className="flex justify-end lg:hidden absolute right-[30px]">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Цэс нээх</span>
              <Bars3Icon className={color ? "h-6 w-6 text-gray-900" : "h-6 w-6 text-white"} aria-hidden="true" />
            </button>
          </div>
          <div className='flex justify-center flex-1'>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <div
                  className="flex items-center gap-x-1 text-md font-semibold leading-6 ring-0 transition duration-300 hover:text-gray-500 hover:cursor-default"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  Бидний тухай
                  <ChevronDownIcon className={`h-5 w-5 flex-none transform ${isOpen1 ? 'rotate-180 transition-transform duration-300' : 'rotate-0 transition-transform duration-300'}`} 
                    aria-hidden="true" />
                </div>

                <Transition
                  as={Fragment}
                  show={isOpen1}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-1 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                      {aboutUS.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover >

              <a href="/products" className="text-md font-semibold leading-6 transition duration-300 hover:text-gray-500 hover:cursor-default">
                Бүтээгдэхүүн
              </a>

              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div> */}
                        
              <Popover className="relative">
                <div
                  className="flex items-center gap-x-1 text-md font-semibold leading-6 ring-0 transition duration-300 hover:text-gray-500 hover:cursor-default"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  Үйлчилгээ
                  <ChevronDownIcon className={`h-5 w-5 flex-none transform ${isOpen2 ? 'rotate-180 transition-transform duration-300' : 'rotate-0 transition-transform duration-300'}`} 
                    aria-hidden="true" />
                </div>

                <Transition
                  as={Fragment}
                  show={isOpen2}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-1 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                      {service.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover >
              <Popover className="relative">
                <div
                  className="flex items-center gap-x-1 text-md font-semibold leading-6 ring-0 transition duration-300 hover:text-gray-500 hover:cursor-default"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  Хүний нөөц
                  <ChevronDownIcon className={`h-5 w-5 flex-none transform ${isOpen3 ? 'rotate-180 transition-transform duration-300' : 'rotate-0 transition-transform duration-300'}`} 
                    aria-hidden="true" />
                </div>

                <Transition
                  as={Fragment}
                  show={isOpen3}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-1 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                      {HR.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover >
              <Popover className="relative">
                <div
                  className="flex items-center gap-x-1 text-md font-semibold leading-6 ring-0 transition duration-300 hover:text-gray-500 hover:cursor-default"
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  Санал хүсэлт
                  <ChevronDownIcon className={`h-5 w-5 flex-none transform ${isOpen4 ? 'rotate-180 transition-transform duration-300' : 'rotate-0 transition-transform duration-300'}`} 
                    aria-hidden="true" />
                </div>

                <Transition
                  as={Fragment}
                  show={isOpen4}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-1 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                      {feedback.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover >
              {/* <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                    </div>
                </div> */}
            </Popover.Group>
          </div>
          
        </nav>
        
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-[75%] h-screen overflow-y-auto bg-white border-l-4 border-gray-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-end bg-opacity-100">
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Цэс хаах</span>
                    <XMarkIcon className="items-end h-6 w-6 text-gray-900" aria-hidden="true" />
                  </button>
                </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <> 
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-md font-extrabold leading-7 text-gray-900 hover:bg-gray-50">
                              Бидний тухай
                              <ChevronDownIcon
                                className={classNames(open ? 'rotate-180 duration-200' : 'rotate-0 duration-200', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Transition 
                                show={open}
                                enter="transform duration-300 ease-in"
                                enterFrom="opacity-0 translate-y-0"
                                enterTo="opacity-100 translate-y-0"
                                leave="transform duration-300 ease-out"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-0">
                                  <Disclosure.Panel className="mt-2 space-y-2">
                                    {[...aboutUS ].map((item) => (
                                      <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                      >
                                        {item.name}
                                      </Disclosure.Button>
                                    ))}
                                  </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                    <a
                      href="./products"
                      className="-mx-3 block rounded-lg px-3 py-2 text-md font-extrabold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Бүтээгдэхүүн
                    </a>
                    <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <> 
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-md font-extrabold leading-7 text-gray-900 hover:bg-gray-50">
                              Үйлчилгээ
                              <ChevronDownIcon
                                className={classNames(open ? 'rotate-180 duration-200' : 'rotate-0 duration-200', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Transition 
                                show={open}
                                enter="transform duration-300 ease-in"
                                enterFrom="opacity-0 translate-y-0"
                                enterTo="opacity-100 translate-y-0"
                                leave="transform duration-300 ease-out"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-0">
                                  <Disclosure.Panel className="mt-2 space-y-2">
                                    {[...service ].map((item) => (
                                      <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                      >
                                        {item.name}
                                      </Disclosure.Button>
                                    ))}
                                  </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <> 
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-md font-extrabold leading-7 text-gray-900 hover:bg-gray-50">
                              Хүний нөөц
                              <ChevronDownIcon
                                className={classNames(open ? 'rotate-180 duration-200' : 'rotate-0 duration-200', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Transition 
                                show={open}
                                enter="transform duration-300 ease-in"
                                enterFrom="opacity-0 translate-y-0"
                                enterTo="opacity-100 translate-y-0"
                                leave="transform duration-300 ease-out"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-0">
                                  <Disclosure.Panel className="mt-2 space-y-2">
                                    {[...HR ].map((item) => (
                                      <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                      >
                                        {item.name}
                                      </Disclosure.Button>
                                    ))}
                                  </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <> 
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-md font-extrabold leading-7 text-gray-900 hover:bg-gray-50">
                              Санал хүсэлт
                              <ChevronDownIcon
                                className={classNames(open ? 'rotate-180 duration-200' : 'rotate-0 duration-200', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Transition 
                                show={open}
                                enter="transform duration-300 ease-in"
                                enterFrom="opacity-0 translate-y-0"
                                enterTo="opacity-100 translate-y-0"
                                leave="transform duration-300 ease-out"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-0">
                                  <Disclosure.Panel className="mt-2 space-y-2">
                                    {[...feedback ].map((item) => (
                                      <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                      >
                                        {item.name}
                                      </Disclosure.Button>
                                    ))}
                                  </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
        </Dialog>
      </div>
    </header>

  )
}
