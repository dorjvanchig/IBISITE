import React from 'react'


// FURTHER CLARIFICATION AND PURPOSE OF COMPONENT 1

//COMPONENT 1 CAN BE USED IN ANY PAGES; BE SURE TO, HOWEVER, CHECK IF ALL NECESSARY INPUTS ARE INPUTTED
//COMPONENT 1 TAKES IN 2 INPUTS:

// INPUT #1: "left"
//          THIS PROP IS A BOOLEAN VARIABLE WHCIH TELLS THE COMPONENE WHETHER TO PUT ITS TEXT ON THE LEFT OR NOT.
// INPUT #2: "data"
//          THIS PROP IS A VARIABLE (DICTIONARY) WITH KEY VALUE PAIRS;
//          KEY VALUE PAIRS SHOULD HAVE EXACTLY 3 ATTRIBUTES:
//                  1. "header" : SHOULD CONTAIN THE TITLE OF THE COMPONENT TEXT IN STRING FORMAT
//                  2. "description" : SHOULD CONTAIN THE CONTENT OF THE COMPONENT TEXT IN STRING FORMAT
//                  3. "imgsrc" : SHOULD CONTAIN THE PATH TO THE IMAGE FROM THE PUBLIC FOLDER IN STRING FORMAT
export default function Component1( props ) {
    if (props.left) {
        return (
            <div className=' w-full h-[350px] flex items-center relative'>
                <div id='text' className=' w-1/2 h-[80%] absolute left-0'>
                    <div id='header' className=' w-full h-[35%] flex items-end'><h2 className='text-[30px] font-bold text-black'>{ props.data["header"] }</h2></div>
                    <div id='desc' className=' w-full h-[60%] flex items-start absolute bottom-0'><p className='text-[18px] font-normal text-gray-800'>{ props.data["description"] }</p></div>
                </div>
                <div id='picture' className=' w-[45%] h-[80%] absolute right-0 flex justify-center'>
                    <img src='/testcomponentpic.png' className=' aspect-auto h-full'></img>
                </div>
            </div>
        )
    } else {
        return (
            <div className=' w-full h-[350px] flex items-center relative'>
                <div id='text' className=' w-1/2 h-[80%] absolute right-0'>
                    <div id='header' className=' w-full h-[35%] flex items-end'><h2 className='text-[30px] font-bold text-black'>{ props.data["header"] }</h2></div>
                    <div id='desc' className=' w-full h-[60%] flex items-start absolute bottom-0'><p className='text-[18px] font-normal text-gray-800'>{ props.data["description"] }</p></div>
                </div>
                <div id='picture' className=' w-[45%] h-[80%] absolute left-0 flex justify-center'>
                    <img src='/testcomponentpic.png' className=' aspect-auto h-full'></img>
                </div>
            </div>
        )
    }
}