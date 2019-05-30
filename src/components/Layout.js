import React from 'react'
import Helmet from 'react-helmet'
import { Header } from '../components/Header/Header'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { graphql } from 'gatsby'

const TemplateWrapper = ({ headerData = null, children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />

      </Helmet>
      <Header data={headerData} />

      <div>{children}</div>
    </div>
  )
}

export const query = graphql`
  fragment LayoutFragment on Query {
    headerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "header" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            telephone
          }
        }
      }
    }
  }
`;

export default TemplateWrapper
