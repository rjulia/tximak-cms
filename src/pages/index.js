import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Carousel, Team, Services, Location } from "../components/Home/index";
//import Helmet from "react-helmet";
import Layout from "../components/Layout";
import "../styles/all.sass";

export const HomePageTemplate = ({ home }) => {
  return (
    <div className="app">
      <Carousel slideshow={home.slideshow} />
      <Services tratement={home.tratement} />
      <Team ourteam={home.ourteam} />
      <Location location={home.location} />
    </div>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { headerData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;

    return (
      <Layout headerData={headerData}>
        <HomePageTemplate home={home} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            logo { 
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
            ourteam {
              body
              title
            }
            location {
              body
              mapsLink
              name
            }
            tratement {
              firstTratement {
                heading
                subHeading
                image{ 
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fourTratement {
                heading
                subHeading
                image{ 
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              secondTratement {
                heading
                subHeading
                image{ 
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              threeTratement {
                heading
                subHeading
                image{ 
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            slideshow {
              firstpicture {
                heading
                subHeading
                image{ 
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                imageAlt
              }
              secondpicture {
                heading
                subHeading
                image{ 
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                imageAlt
              }
              thirdpicture {
                heading
                subHeading
                image{ 
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                imageAlt
              }
            }
          }
        }
      }
    }
  }
`;
