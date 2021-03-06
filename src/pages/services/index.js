import React from 'react'
import { graphql } from "gatsby";

import Layout from '../../components/Layout'
import ServicesRoll from '../../components/ServicesRoll'
import './services.scss';

const ServicesIndexPage = ({ data }) => {


  return (

    <Layout headerData={data.headerData}>
      <div
        className="full-width-image-container services"
        style={{
          backgroundImage: `url('/img/cebecera_servicio_c.jpg')`,
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
          SERVICIOS
          </h1>
      </div>
      <section className="section services">
        <div className="container services__contatiner">

          <ServicesRoll />

        </div>
      </section>
    </Layout>

  )

}

export default ServicesIndexPage;

export const ServicesPageQuery = graphql`
  query ServicePage {
    ...LayoutFragment
    
  }
`;