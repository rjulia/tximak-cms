import React from 'react'
import Helmet from 'react-helmet'
import { Footer, Navbar } from './Index'
import { Header } from '../components/Header/Header'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { graphql } from 'gatsby'

const TemplateWrapper = ({ headerData = null, children }) => {
  console.log(headerData)
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Header data={headerData} />
      <Navbar />
      <div>{children}</div>
      <Footer />
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
