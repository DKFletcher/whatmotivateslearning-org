import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import WMLIcon from '../../images/icon-512.png'

const IndexPage = props => {
  const indexQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
        <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 40px'
      }}
    >
      <h1>{indexQuery.site.siteMetadata.title}</h1>
      <h4>{indexQuery.allMarkdownRemark.totalCount} Posts</h4>
        {indexQuery.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </div>

  )
}
export default IndexPage

// const IndexPage = () => {
//   return (
//     <div
//       style={{
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: '0 40px'
//       }}
//     >
//     </div>
//   )
// }

// export default IndexPage
