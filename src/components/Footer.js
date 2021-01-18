import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  return (
    <div>
      <p>
        Createad by <i>{data.site.siteMetadata.author}</i> - 2020 with Gatsbyjs
      </p>
    </div>
  )
}

export default Footer
