import Format1 from "@/app/layouts/format1";
import Content from "../Content";
import data from "../company.json";

export default function Company() {
    const id = 0;  // COMPANY INTRODUCTION ID: 0

    // Find the object that matches the given ID
    const pData = data.find(item => item.id === id) || {
        title: "",
        heroimg: "",
        subtitle: ""
    };

    return (
        <Format1 Content={Content} data={pData} id={id} additions={customizeContent} />
    );
}

// Customize additional HTML if needed
function customizeContent() {
    return (
        <div></div>
    );
}
