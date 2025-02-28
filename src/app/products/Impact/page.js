'use client'

import React from 'react'
import Layout from '../layouts/impact/impactlayout'
import unfilteredDetails from '../main.json'
import Text from '../layouts/text'

export default function Page() {
  //SQL Query: details = SELECT * FROM (table_name) WHERE ID=3;
  let id = 3
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