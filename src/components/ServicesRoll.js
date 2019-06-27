import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import './ServicesRoll.scss'
class ServicesRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: service } = data.allMarkdownRemark;
    return service && service.map(({ node: service }) => (

      <div key={service.id} className="services__item">
        <div className="services__card">
          <div className="services__card--image">
            <PreviewCompatibleImage
              imageInfo={{
                image: service.frontmatter.image,
                alt: `featured image thumbnail for service ${
                  service.title
                  }`,
              }}
            />
          </div>
          <div className="services__card--text">

            <div>
              <h2>{service.frontmatter.title}</h2>
              <p>{service.frontmatter.description}</p>
            </div>

            <div className="services__card--price">
              <p>{service.frontmatter.price} €</p>
            </div>


          </div>
        </div>
      </div>
    ))
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
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "service-page" } } }) {
          edges {
            node {
              excerpt(pruneLength:50)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                price
                discount
                price_discount
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