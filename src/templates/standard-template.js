import React from 'react'
import { graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'

// import Layout from '../components/layout'
// import SEO from '../components/seo'

class StandardTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <div>
        <header>
          <h3>H3 Header Test</h3>
        </header>
        <main>
          <h1>H1 Main Test</h1>
        </main>
      </div>
    )
  }
}

export default StandardTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
      }
    }
  }
`
// thumbnail {
//   childImageSharp {
//     fluid(maxWidth: 1360) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
