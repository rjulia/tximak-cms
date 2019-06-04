import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage' 

class ProductsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: product } = data.allMarkdownRemark;
    console.log(product);
    return (
      <div>
        {product && product.map(({ node: post }) => (

          <div key={post} className="product__item">
            <div className="product__card">
              <div className="product__card--image">
                <img src="/img/shampoo_16.9oz.jpg" alt="" />
              </div>
              <div className="product__card--text">
                <div>
                  <h4>Champu acondicinador cabello graso</h4>
                  <p>Description del producto que puede tenr todas estas lineas</p>
                </div>
                <div className="product__card--button">
                  <div className="product__card--price">
                    <p> 55€</p>
                  </div>
                  <button className="btn"> + Info</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

ProductsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC }
          filter: { frontmatter: { templateKey: { eq: "product-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 10)
              id
              fields {
                slug
              }
              frontmatter {
                description
                title
                price
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
    render={(data, count) => <ProductsRoll data={data} count={count} />}
  />
)