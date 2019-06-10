import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class ServicesRoll extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data)
    return null
    //const { edges: product } = data.allMarkdownRemark;
    //return product && product.map(({ node: product }) => (

    // <div key={product.id} className="services__item">
    //   <div className="services__card">
    //     <div className="services__card--image">
    //       <PreviewCompatibleImage
    //         imageInfo={{
    //           image: product.frontmatter.image,
    //           alt: `featured image thumbnail for product ${
    //             product.title
    //             }`,
    //         }}
    //       />
    //     </div>
    //     <div className="services__card--text">
    //       <div>
    //         <h4>{product.frontmatter.title}</h4>
    //         <p>{product.excerpt}</p>
    //       </div>
    //       <div className="services__card--button">
    //         <div className="services__card--price">
    //           <p>{product.frontmatter.price}</p>
    //         </div>
    //         <Link className="button" to={product.fields.slug}>
    //           Mas info →
    //         </Link>
    //         {/* <Link className="btn"> + Info</Link> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // ))
  }
}

ServicesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default () => (
  <StaticQuery
    query={graphql`
      query ServiceRollQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "service" } } }) {
          edges {
            node {
              excerpt(pruneLength:50)
              id
              fields {
                slug
              }
              frontmatter {
                description
                title
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
    render={(data, count) => <ServicesRoll data={data} count={count} />}
  />
)