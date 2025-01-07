import Format2 from "@/app/layouts/format2"
import Content from "../Content"

import data from "../hr.json"

export default function Resume(){
    let pData = {
        "title" : "",
        "heroimg" : "",
        "subtitle" : ""
    }
    let id = 3 //----------------------------------------------COMPANY RESUME ID: 2-------------------------//
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
        <Format2 Content={ Content } data={ pData } id={ id } additions={ customizeContent } />
    )
}

function customizeContent() {
    return (
        <div></div>
    )
}