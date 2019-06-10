import React from 'react'
import { graphql } from "gatsby";

import Layout from '../../components/Layout'
import ProductsRoll from '../../components/ProductsRoll'
import './products.scss';

const ProductIndexPage = ({ data }) => {


  return (

    <Layout headerData={data.headerData}>
      <div
        className="full-width-image-container products"
        style={{
          backgroundImage: `url('/img/icon_email.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            backgroundColor: '#f7931e',
            color: 'white',
            padding: '0rem 1rem',
          }}
        >
          Productos
          </h1>
      </div>
      <section className="section products">
        <div className="container products__contatiner">

          <ProductsRoll />

        </div>
      </section>
    </Layout>

  )

}

export default ProductIndexPage;

export const ProductPageQuery = graphql`
  query ProductPage {
    ...LayoutFragment
    
  }
`;
