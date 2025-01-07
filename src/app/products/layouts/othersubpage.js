import React from 'react'
import Bureldehuun from '../components/json/Bureldehuun'

export default function Othersubpage({ isDetails, data }) {
    if (isDetails === 1) {
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
        <div className='w-full sm:w-[50%] md:w-[40%] h-44 relative flex items-center justify-center flex-col'>
            <button className='w-[65%] h-36'>
                <a href={ props.href}>
                    <div className='w-full h-[45%] flex flex-row   '>
                        <div className='px-[5%] aspect-[89.16/64.8] w-auto flex items-center justify-center'><img src={ props.img } className='aspect-square w-full sm:w-4/6 min-[912px]:w-5/6 min-[1074px]:w-full' /></div>
                        <h2 className='flex items-center text-left h-full w-auto font-extrabold text-[14px] sm:text-[12px] min-[850px]:text[14px] min-[1074px]:text-[18px] text-blue-900'>{ props.name }</h2>
                    </div>
                    <div className='bg-blue-900 h-[2px]'></div>

                    <div className='w-full h-[54%] relative'>
                        <div className='w-full h-4/6 sm:h-5/6 absolute bottom-0'>
                            <p className='flex items-center text-left dark:text-black h-full w-auto text-[12px] sm:text-[11px] min-[1074px]:text-[13px]'> { props.desc } </p>
                        </div>
                    </div>
                </a>
            </button>
            <div className='w-full h-[40%]'></div>
        </div>
    )
}

function NiitBureldeguun(props) {
    return (
        <div className='w-full flex justify-center flex-wrap'>
            {props.Bureldehuun.map(function(comp) {
                if (props.Bureldeh[comp["id"]]) {
                    return (
                        <BureldehCom key={ comp["id"] } name={comp["name"]} img={comp["img"]} desc={comp["desc"]} href={ comp["href"] } />
                    )
                }
            })}
        </div>
    )
}