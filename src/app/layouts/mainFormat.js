'use client'

import React from 'react'
import Header from '../header'
import Footer from '../footer'
import RootLayout from '../layout'
import SideNav from '../sidenav'
import Marqee from '../marqeeLogo'

function MainFormat({ children }) {
  return (
    <RootLayout>
      <main>
        <section id="SideNav" className="z-50">
          <SideNav />
        </section>
        <section id="Header">
          <Header />
        </section>
        <section id="Body" className="mr-[0%] ml-[0%]">
          {children}
        </section>
        <section>
          <Marqee />
        </section>
        <section id="Footer">
          <Footer />
        </section>
      </main>
    </RootLayout>
  )
}

export default MainFormat
