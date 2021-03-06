import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import _ from 'lodash';

class ProductsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: product } = data.allMarkdownRemark;
    // const filteredProducts = product.filter(({ node: item }) => {
    //   if (filter === "all" || filter === '') return item
    //   return item.frontmatter.category === filter
    // });

    return product && product.map(({ node: product }) => (

      <div key={product.id} className="product__item">
        <div className="product__card">
          <div className="product__card--image">
            <PreviewCompatibleImage
              imageInfo={{
                image: product.frontmatter.image,
                alt: product.title
              }}
            />
          </div>
          <div className="product__card--text">
            <div>
              <h4>{product.frontmatter.title}</h4>
              <p className="product__card--category">{product.frontmatter.size ? _.lowerCase(product.frontmatter.size) : ""}</p>
              <p>{product.excerpt}</p>
            </div>
            <div className="product__card--button">
              <div className="product__card--price">
                <p>{product.frontmatter.price} €</p>
              </div>
              <Link className="button" to={product.fields.slug}>
                Mas info →
              </Link>
              {/* <Link className="btn"> + Info</Link> */}
            </div>
          </div>
        </div>
      </div>
    ))
  }
}

ProductsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default (props) => (
  <StaticQuery
    query={graphql`
      query ProductRollQuery {
        allMarkdownRemark(filter: { 
          frontmatter: { templateKey: { eq: "product-page" } } }) {
          edges {
            node {
              excerpt(pruneLength:80)
              id
              fields {
                slug
              }
              frontmatter {
                description
                title
                price
                size
                price_discount
                discount
                image {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <ProductsRoll data={data} {...props} />}
  />
)