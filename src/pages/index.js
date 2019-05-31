import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Carousel } from "../components/index";
//import Helmet from "react-helmet";


import Layout from "../components/Layout";

import "../components/all.sass";

export const HomePageTemplate = ({ home }) => {
  return (
    <Fragment>
      <Carousel slideshow={home.slideshow} />
      <p>{home.title}</p>
    </Fragment>
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
