import Format1 from "@/app/layouts/format1"
import Content from "../Content"

import data from "../company.json"

import Component1 from "@/app/components/component1"

export default function Strategy(){
    let pData = {
        "title" : "",
        "heroimg" : "",
        "subtitle" : ""
    }
    let id = 4 //----------------------------------------------COMPANY STRATEGY ID: 4-------------------------//
    data.map(function(curlylist) {
        if ( curlylist["id"] === 4) {
            pData = {
                "title" : curlylist["title"],
                "heroimg" : curlylist["heroimg"],
                "subtitle" : curlylist["subtitle"]
            }
        }
    })

    return (
        <Format1 Content={ Content } data={ pData } id={ id } additions={ customizeContent } />
    )
}

//JSON TYPE FORMAT VARIABLE TO BE PASSED ONTO COMPONENT 1;
//COMPONENT 1 HAS BEEN THOUGHT TO BE STATIC, THUS DOES NOT NEED A JSON FILE ON ITS OWN.

//COMPONENT 1 ALSO TAKES IN INPUT CALLED "LEFT" IN WHICH TELLS THE COMPONENET WHERE TO PLACE THE TEXT.

let comData = {
    "header" : "Уян хатан байдал",
    "description" : "Өмнө нь хөгжүүлсэн процессууд, дүрмүүд, тайлангууд болон бусад загваруудыг дахин ашиглах замаар шинэ процессуудыг хялбархан үүсгэж, ашиглах боломжтой болсон",
    "imgsrc" : "/testcomponentpic.png"
}

function customizeContent() {
    return (
        <div className=""><Component1 left={ true } data={ comData } /></div>
    )
}
