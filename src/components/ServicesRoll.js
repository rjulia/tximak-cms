import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ServiceRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: services } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {services &&
          services.map(({ node: service }) => (
            <div className="is-parent column is-6" key={service.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  {service.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: service.frontmatter.featuredimage,
                          alt: `featured image thumbnail for service ${
                            service.title
                            }`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="service-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={service.fields.slug}
                    >
                      {service.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                  </p>
                </header>
                <p>
                  {service.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={service.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ServiceRoll.propTypes = {
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
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "service-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
    render={(data, count) => <ServiceRoll data={data} count={count} />}
  />
)
