import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const errorPage = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </Layout>
  )
}

export default errorPage
