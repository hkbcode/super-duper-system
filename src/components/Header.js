import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return (
    <div className="header-style">
      <ul>
        <li>
          <Link style={{ textTransform: "uppercase", fontSize: 20 }} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
