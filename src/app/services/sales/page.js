import Content from "../Content"

import data from "../services.json"
import Format2 from "@/app/layouts/format2"

export default function Launch(){
    let pData = {
        "title" : "",
        "heroimg" : "",
        "subtitle" : ""
    }
    let id = 1 //----------------------------------------------COMPANY Launch ID: 1-------------------------//
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
        <Format2 Content={ Content } data={ pData } id= { id } additions={ customizeContent } />
    )
}

function customizeContent() {
    return (
        <div></div>
    )
}