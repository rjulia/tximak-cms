import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from './SiteMetadata';
import { graphql } from 'gatsby';
import { Header } from "./Home";
import Navbar from "./Navbar";
import Cookies from "./Cookies";
import { CookiesProvider } from 'react-cookie';


const TemplateWrapper = ({ headerData = null, children }) => {
  const { title, description } = useSiteMetadata()

  let logo
  let header
  if (headerData) {
    if (headerData.edges[0].node.frontmatter.logo === null) {
      logo = headerData.edges[1].node
      header = headerData.edges[0].node
    } else {
      logo = headerData.edges[0].node
      header = headerData.edges[1].node
    }
  }
  return (
    <CookiesProvider>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />

      </Helmet>
      <Header data={header} />
      <Navbar logo={logo} />
      <div>{children}</div>
      <Cookies />
    </CookiesProvider>
  )
}

export const query = graphql`
  fragment LayoutFragment on Query {
    headerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { in: ["header","home-page" ] } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            telephone
            logo { 
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper
