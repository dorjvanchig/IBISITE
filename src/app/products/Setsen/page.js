'use client'

import React from 'react'
import Layout from '../layouts/layout'
import unfilteredDetails from '../main.json'
import Text from '../layouts/text'

export default function Page() {
  //SQL Query: details = SELECT * FROM (table_name) WHERE ID=5;
  let id = 5
  let details
  unfilteredDetails.map(function (curlylist) {
    if (curlylist["id"] === id) {
      details = curlylist
    }
  })
  return (
    <div><Layout data={ details } Text={ Text } id={ id }><CustomizeDetails /></Layout></div>
  )
}

function CustomizeDetails() {
  return (
    <div></div>
  )
}