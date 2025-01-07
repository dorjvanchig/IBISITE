import React from "react";
import { useState } from "react";
import { ArrowDownTrayIcon, BellAlertIcon, ChartBarIcon, CloudIcon, RssIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid'


const SIDE = [
  { name: 'Navigation Item', href: '#', icon: ArrowDownTrayIcon, color: 'bg-[#014F86]', ringColor: 'ring-[#014F86]' },
  { name: 'TeamViewer татах', href: '/installs/TeamViewerQS.exe', icon: 'teamviewer', color: 'bg-[#0e8ee9]', ringColor: 'ring-[#0e8ee9]' },
  { name: 'AnyDesk татах', href: '/installs/AnyDesk.exe', icon: 'anydesk', color: 'bg-[#ef443b]', ringColor: 'ring-[#ef443b]' },
  { name: 'QuickJoin татах', href: '#', icon: CloudIcon, color: 'bg-[#468FAF]', ringColor: 'ring-[#468FAF]' },
  { name: 'Navigation Item', href: '#', icon: RssIcon, color: 'bg-[#61A5C2]', ringColor: 'ring-[#61A5C2]' },
]


export default function SideNav(){
  const [isHover, setIsHover] = useState(Array(SIDE.length).fill(false));

  const handleMouseEnter = (index) => {
    setIsHover((prevHover) => {
      const hoverCopy = [...prevHover];
      hoverCopy[index] = true;
      return hoverCopy;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHover((prevHover) => {
      const hoverCopy = [...prevHover];
      hoverCopy[index] = false;
      return hoverCopy;
    });
  };

  const getDownloadFileName = (name) => {
    if (name === 'TeamViewer татах') {
      return 'TeamViewer_Installer.exe';
    } else if (name === 'AnyDesk татах') {
      return 'AnyDesk_Installer.exe';
    } else if (name === 'QuickJoin татах') {
      return 'QuickJoin_Installer.exe';
    } else {
      return '';
    }
  };

  const getIcon = (icon) => {
    if (icon === 'teamviewer') {
      return '/teamviewer.png';
    } else if (icon == 'anydesk') {
      return '/anydesk_icon.png'
    }
    // Add more conditions for other icons if needed
    return icon;
  };

  return(
    <div className="hidden md:flex md:fixed md:right-0 md:items-center md:justify-center md:h-screen z-50">
      <div className="w-52 h-auto">
        <div className="py-2 pl-2 flex flex-col space-y-2 font-poppins">
          {SIDE.map((item, index) => (
            <a
              href={item.href}
              download={item.href.endsWith('.exe') ? getDownloadFileName(item.name) : undefined}
              className="hover:cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
            >
              <div
                className={`w-full h-9 flex items-center ${item.color} justify-between rounded-l-2xl ring-2 ${item.ringColor} transform ${
                  isHover[index] ? 'translate-x-0 duration-500 shadow-xl shaodow-gray-800' : 'translate-x-40 duration-500'
                }`}
              >
                {typeof item.icon === 'string' ? (
                  <img src={getIcon(item.icon)} className="ml-2 h-6 w-6 text-white" alt="Icon" />
                ) : (
                  <item.icon className="ml-2 h-6 w-6 text-white" />
                )}
                <div className="w-full text-center text-white">{item.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

