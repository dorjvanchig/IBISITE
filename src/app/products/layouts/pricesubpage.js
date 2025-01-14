import React from 'react'
import alldata from '../tablecsv/data.json'

export default function Pricesubpage({ isDetails, id, tableinfo }) {
    if (isDetails != 2) {
        return
    }
    let data
    alldata.map(function(curlylist) {
      if (curlylist["id"] === id) {
        data = curlylist["data"]
      }
    })
    data = data? data : ""
    let tableinfodemo = tableinfo["heading"] ? tableinfo["heading"] : ""
    let additionalinfodemo = tableinfo["additionalinfo"] ? tableinfo["additionalinfo"] : ""
    return (
        <div className='h-auto w-[80%] mx-[10%] overflow-hidden'>
            <div className='mb-[16px] mt-[35px]'>
                <h1 className='flex text-3xl md:text-4xl text-blue-500 font-opensans font-bold'> {tableinfodemo} </h1>
            </div>
            <div className='mt-[10px] w-full lg:w-2/3 '>
                <p className='font-normal text-black text-base text-md md:text-lg'>
                    {additionalinfodemo}
                </p>
            </div>
            <Table data={ data } />
        </div>
    )
}
const Table = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0 || !data[0]) {
    return <div>No data available</div>; // Optionally, render a fallback message if data is not valid.
  }

  return (
    <div className="flex mt-8 mb-16 overflow-x-auto overflow-hidden">
      <table className="min-w-full divide-y divide-black">
        <thead className="bg-blue-500">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                scope="col"
                className="px-6 py-3 text-left font-extrabold text-xs min-[680px]:text-sm md:text-base lg:text-lg text-white uppercase tracking-wider border-x border-black"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-black text-black">
          {data.map((row, index) => (
            <tr key={index}>
              {Object.entries(row).map(([key, value]) => (
                <td
                  key={key}
                  className={`px-6 py-4 whitespace-nowrap text-xs md:text-sm lg:text-base border-x border-black ${
                    !isNaN(row["№"]) ? "font-bold bg-green-500" : "font-bold bg-white"
                  }`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
