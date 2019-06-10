import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
//import "./services-page.scss";
export const ServiceTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
  price,
  price_discount,
  discount,
  shipping
}) => {

  const PostContent = contentComponent || Content;
  const imageSrc = !!image.childImageSharp ? image.childImageSharp.fluid.src : image;
  const classPrice = discount ? "hasDiscount" : "";

  return (
    <section className="section services">
      {helmet || ''}
      <div className="container product__container">
        <div className="product__title">
          <h1 className="title">
            {title}
          </h1>
        </div>

        <div className="product__image">
          <img src={imageSrc} alt="" />
        </div>
        <div className={`product__content ${classPrice}`}>
          <p className="product__brand">Marca: L'oreal</p>
          <p className="product__price">{price}</p>
          <p className="product__discount">
            <span className="product__discount--text">OFERTA:</span>
            {price_discount}
          </p>
          <div className="product__button">
            <button className="btn">Solicitar</button>
          </div>
          <p className="product__description">{description}</p>
          <PostContent content={content} />
        </div>
        <div className="product__conditions">
          <h3>Condiciones: </h3>
          <p>{shipping}</p>

        </div>
      </div>

    </section>
  )
}

ServiceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  price: PropTypes.string,
  price_discount: PropTypes.string,
  discount: PropTypes.bool,
  shipping: PropTypes.string,
}

const services = ({ data }) => {
  const { markdownRemark: services } = data
  return (
    <Layout headerData={data.headerData}>
      <ServiceTemplate
        content={services.html}
        contentComponent={HTMLContent}
        description={services.frontmatter.description}
        image={services.frontmatter.image}
        price={services.frontmatter.price}
        price_discount={services.frontmatter.price_discount}
        discount={services.frontmatter.discount}
        shipping={services.frontmatter.shipping}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${services.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${services.frontmatter.description}`}
            />
          </Helmet>
        }

        title={services.frontmatter.title}
      />
    </Layout>
  )
}

services.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default services

export const pageQuery = graphql`
  query servicesByID($id: String!) {
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
        shipping
        image{ 
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