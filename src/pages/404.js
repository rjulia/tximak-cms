import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const NotFoundPage = ({ data }) => (
  <Layout headerData={data.headerData}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    
    ...LayoutFragment
  }
`
