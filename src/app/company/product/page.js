import Content from "../Content"

import data from "../company.json"
import Format1 from "@/app/layouts/format1"

export default function Product(){
    let pData = {
        "title" : "",
        "heroimg" : "",
        "subtitle" : ""
    }
    let id = 1 //----------------------------------------------COMPANY PRODUCT ID: 1-------------------------//
    data.map(function(curlylist) {
        if ( curlylist["id"] === id) {
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

function customizeContent() {
    return (
        <div></div>
    )
}
