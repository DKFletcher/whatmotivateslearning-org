/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)



exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/*`
    
    // Update the page.
    createPage(page)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // const blogPost = path.resolve(`./src/templates/blog-post.js`)
  // const installationPost = path.resolve(`./src/templates/installation-post.js`)
  // const tagPage = path.resolve(`./src/templates/tag-page.js`)
  
  return graphql(
    `
    query {
       allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: 1000)
      {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
 `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node })=>{
      console.log('a page')
    })
    // createPage({
    //   path: node.fields.slug
    //   component: path.resolve(`./src/templates/blog-post.js`),
    //   context: {
    //     // Data passed to context is available
    //     // in page queries as GraphQL variables.
    //     slug: node.fields.slug,
    //   },
    // })
  })
  }





//   const result = await graphql(`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/blog-post.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
