import React from 'react'
import Bureldehuun from '../../components/json/diamondModule'

export default function Othersubpage({ isDetails, data }) {
    if (isDetails === 1) {
        console.log(Bureldehuun);
        return (
            <div className='w-full h-auto flex justify-center'>
                <NiitBureldeguun Bureldehuun={ Bureldehuun } Bureldeh={ data }/>
            </div>
        )
    } else {
        return
    }
}

function BureldehCom(props) {
    return (
        <div className='w-full sm:w-[50%] md:w-[40%] h-44 mb-[290px] relative flex items-center justify-center flex-col'>
            <button className='w-[500px] h-36'>
                <a href={ props.href}>
                    <div className='w-full h-[50%] flex flex-row'>
                        <div className='px-[5%] aspect-[89.16/64.8] w-auto flex items-center justify-center'><img src={ props.img } className='aspect-square w-full sm:w-4/6 min-[912px]:w-5/6 min-[1074px]:w-full' /></div>
                        <h2 className='flex items-center text-left h-full w-auto font-extrabold text-[14px] sm:text-[12px] min-[850px]:text[18px] min-[1074px]:text-[18px] text-blue-900'>{ props.name }</h2>
                    </div>
                    <div className='bg-blue-900 h-[2px] mb-3'></div>
                    {/* paragraph */}
                    <div className='w-full h-[100px] relative'>
                        <div className='w-full h-4/6 sm:h-5/6 absolute mt-3'>
                            <p className='flex items-center text-left dark:text-black h-full w-auto text-[12px] sm:text-[11px] min-[1074px]:text-[13px]'> { props.desc } </p>
                        </div>
                        
                    </div>

                    {/* list */}
                    <div className="w-full mt-[40px] overflow-scroll">
                        <ul className="list-disc dark:text-black text-[12px] sm:text-[11px] min-[1074px]:text-[13px] ml-[3%] lg:w-2/3 text-left">
                        {props?.list?.map((item, index) => (
                            <li key={index} className="mb-2">
                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br/>') }} />
                            </li>
                        ))}
                        </ul>
                    </div>
                </a>
            </button>
            <div className='w-full h-[40%]'></div>
        </div>
    )
} 


function NiitBureldeguun(props) {
    return (
        <div className='w-full flex justify-center flex-wrap overflow-y-scroll'>
            {props.Bureldehuun.map(function(comp) {
                if (props.Bureldeh[comp["id"]]) {
                    return (
                        <BureldehCom key={ comp["id"] } name={comp["name"]} img={comp["img"]} desc={comp["desc"]} href={ comp["href"]} list={comp["list"]}/>
                    )
                }
            })}
            {/* <div className="flex items-center justify-center w-[400px] h-[200px] bg-gray-100 mx-auto my-4">
                <p className="font-bold text-center dark:text-black text-[16px]" >
                        Системд урьдчилан тодорхойлсон маш олон тайлангийн загварууд байх бөгөөд эдгээр загварын дагуу та шаардлагатай
                        тайлан мэдээгээ авч болох ба байгууллагынхаа онцлогоос хамаарсан нэмэлт тайлангуудыг хүссэн хэлбэрээрээ үүсгэх
                        боломжтой.
                </p>
            </div> */}

        </div>
        
    )
}