import Format1 from "@/app/layouts/format2"
import Content from "../Content"

import data from "../services.json"

export default function Softhelp(){
    let pData = {
        "title" : "",
        "heroimg" : "",
        "subtitle" : ""
    }
    let id = 3 //----------------------------------------------IT HELP ID: 3-------------------------//
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