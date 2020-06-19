import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Router } from '@reach/router'
import {
  Profile,
  Home,
  IndexPage,
  Reset,
  SignIn,
  SignUp,
  MarkdownTest,
} from '../components/Pages'
import PrivateRoute from '../components/Routes/PrivateRoute'
import PublicRoute from '../components/Routes/PublicRoute'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Template from '../templates/standard-template'
const App = () => {
  Amplify.configure(config)
  var count=0;
  const markdown = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt(pruneLength: 160)
            html
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)
  return (
    <Router>
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/profile" component={Profile} />
      <PublicRoute path="/signin" component={SignIn} />
      <PublicRoute path="/signup" component={SignUp} />
      <PublicRoute path="/reset" component={Reset} />
      <PublicRoute path="/" component={IndexPage} />
      {markdown.allMarkdownRemark.edges.map(({node})=>{
        let path ="/test"+String(count++)
       return (
        <PrivateRoute 
          key={node.id}
          path={path}
          component={Template} 
        />
       )})}
    </Router>
  )
}

export default App