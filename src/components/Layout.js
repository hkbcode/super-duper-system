import React from "react"
import "../style/App.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="body-style">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
