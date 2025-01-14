import data from './company.json'

export default function Content( props ) {

    let id = props.id

    //structure:
    // {
    //     "id" : 0,
    //     "title" : "Танилцуулга",
    //     "subtitle" : "Бидний бүтээсэн түүх",
    //     "heroimg" : "/companyheroimg/team.png",
    //     "text" : [
    //         {
    //             "type" : "heading1",
    //             "content" : "Бидний Түүх"
    //         },
    //         {
    //             "type" : "normal",
    //             "content" : "Aute mollit nulla aute amet anim labore voluptate pariatur Lorem consequat pariatur mollit dolore elit. Nisi reprehenderit pariatur eiusmod ullamco esse dolor commodo voluptate do laboris amet. Laborum ut nisi cupidatat cillum ad sit velit velit. Pariatur dolor esse eiusmod esse dolore adipisicing tempor aute adipisicing. Do culpa ut pariatur sint."
    //         },
    //         {
    //             "type" : "heading2",
    //             "content" : "Ажиллах арга барил"
    //         },
    //         {
    //             "type" : "normal",
    //             "content" : "Aute mollit nulla aute amet anim labore voluptate pariatur Lorem consequat pariatur mollit dolore elit. Nisi reprehenderit pariatur eiusmod ullamco esse dolor commodo voluptate do laboris amet. Laborum ut nisi cupidatat cillum ad sit velit velit. Pariatur dolor esse eiusmod esse dolore adipisicing tempor aute adipisicing. Do culpa ut pariatur sint."
    //         },
    //         {
    //             "type" : "bullet",
    //             "content" : [
    //                 {
    //                     "bulletlist" : "Aute mollit nulla aute amet anim labore voluptate"
    //                 },
    //                 {
    //                     "bulletlist" : "Aute mollit nulla aute amet anim labore voluptate"
    //                 },
    //                 {
    //                     "bulletlist" : "Aute mollit nulla aute amet anim labore voluptate"
    //                 }
    //             ]
    //         }
    //     ]
    // }

    let text
    data.map(function(curlylist) {
        if ( curlylist["id"] === id) {
            text = curlylist["text"]
        }
    })

    return (
        <div className='flex min-h-screen flex-col bg-white overflow-x-hidden'>
            <div className='ml-[10%] mr-[10%] mt-[5%]'>
            {text.map(paragraph => {
                const { id, content, type } = paragraph;
                let paragraphStyle = {};

                switch (type) {
                case 'heading1':
                    return (
                        <div className='mb-[16px] mt-[35px]'>
                            <h1 className='flex text-3xl md:text-4xl text-blue-500 font-opensans font-bold'> {content} </h1>
                        </div>
                    )
                case 'bullet' :
                    return (
                        <ul className=' list-disc dark:text-black text-md md:text-lg my-[10px] w-full ml-[3%] lg:w-2/3'>
                            { content.map(function( curlylist2) {
                                return (
                                    <li> {curlylist2["bulletlist"]} </li>
                                )
                            })}
                        </ul>
                    )
                case 'num' :
                    return (
                        <ul className=' list-decimal dark:text-black text-md md:text-lg my-[10px] w-full ml-[3%] lg:w-2/3'>
                            { content.map(function( curlylist2) {
                                return (
                                    <li> {curlylist2["bulletlist"]} </li>
                                )
                            })}
                        </ul>
                    )
                case 'heading2':
                    return (
                        <div className='mb-[16px] mt-[35px]'>
                            <h1 className='flex text-xl md:text-2xl text-black font-opensans font-bold'> {content} </h1>
                        </div>
                    )
                case 'long':
                    return (
                        <div className='mt-[10px] w-full'>
                            <p key={id} className='font-normal text-black text-base text-md md:text-lg'>
                                {content}
                            </p>
                        </div>
                    )
                case "image":
                    return (
                        <div className="mt-[20px] flex justify-center bg-blue-500">
                            <img 
                                src="/companyheroimg/time.png"  
                                alt="Бүтээгдэхүүний хөгжлийн зураг"  
                                className="max-w-full h-auto"
                            />
                        </div>
                    );
                    
                default:
                    break;
                }

                return (
                <div className='mt-[10px] w-full lg:w-2/3 '>
                    <p key={id} className='font-normal text-black text-base text-md md:text-lg'>
                        {content}
                    </p>
                </div>
                );
            })}
            { props.children }
            </div>
        </div>
    )
}