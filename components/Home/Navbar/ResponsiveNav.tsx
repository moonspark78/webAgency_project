"use client"

import { useState } from "react"
import MobileNav from "./MobileNav"
import Nav from "./Nav"


const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false)


  return (
    <div>
      <Nav/>
      <MobileNav/>
    </div>
  )
}

export default ResponsiveNav
