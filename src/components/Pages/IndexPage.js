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
