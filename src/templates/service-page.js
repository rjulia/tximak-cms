import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
import "./service-page.scss";
export const ServiceTemplate = forwardRef(({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
  price,
  price_discount,
  discount,
}, ref) => {
  const PostContent = contentComponent || Content;
  const imageSrc = image && !!image.childImageSharp ? image.childImageSharp.fluid.src : image;
  const classPrice = discount ? "hasDiscount" : "";

  return (
    <section ref={ref} className="section service">
      {helmet || ''}
      <div className="container service__container">
        <div className="service__title">
          <h1 className="title">
            {title}
          </h1>
        </div>

        <div className="service__image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className={`service__content ${classPrice}`}>
          <p className="service__brand">Marca: L'oreal</p>
          <p className="service__price">{price}</p>
          <p className="service__discount">
            <span className="service__discount--text">OFERTA:</span>
            {price_discount}
          </p>
          <div className="service__button">
            <button className="btn">Solicitar</button>
          </div>
          <p className="service__description">{description}</p>
          <PostContent content={content} />
        </div>
      </div>

    </section>
  )
})

ServiceTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  price: PropTypes.string,
  price_discount: PropTypes.string,
  discount: PropTypes.bool,
}

const Service = ({ data }) => {
  const { markdownRemark: service } = data
  return (
    <Layout headerData={data.headerData}>
      <ServiceTemplate
        title={service.frontmatter.title}
        description={service.frontmatter.description}
        image={service.frontmatter.image}
        price={service.frontmatter.price}
        price_discount={service.frontmatter.price_discount}
        discount={service.frontmatter.discount}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${service.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${service.frontmatter.description}`}
            />
          </Helmet>
        }

      />
    </Layout>
  )
}

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Service

export const pageQuery = graphql`
  query ServiceByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        size
        price
        discount
        price_discount
        image { 
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    ...LayoutFragment
  }
`