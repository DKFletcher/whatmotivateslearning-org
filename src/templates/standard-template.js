import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {AppContent} from "../components/Layout"

const Template = props => {
  const { html } = props
  console.log('children:', html)
return (
<div className="container-login100">
  <AppContent>
  <div dangerouslySetInnerHTML={{ __html: html }}/>
  </AppContent>
</div>
)}

export default Template


// class Template extends React.Component {
//   render() {
//     const post = this.props.data.markdownRemark
//     const siteTitle = this.props.data.site.siteMetadata.title

//     return (

//     <div className="container-login100">
//     <AppContent>
//     <div
//       className="post-content-body"
//       dangerouslySetInnerHTML={{ __html: post.html }}
//     />
//       </AppContent>
//     </div>
//     )
//   }
// }
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `

