import React from "react";
import Slider from "react-slick";
import "./carousel.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "20px",
        zIndex: "5"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "20px"
      }}
      onClick={onClick}
    />
  );
}


export default class SimpleSlider extends React.Component {
  render() {
    const { slideshow } = this.props
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Slider {...settings}>
        {
          Object.keys(slideshow).map(key => {

            const { image } = slideshow[key]
            const imageSrc = !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            return (
              <div key={key} className="caroulsel__container">
                <img className="full-width-image caroulsel__image margin-top-0" src={imageSrc} alt="" />
                <div className="caroulsel__text">
                  <h1>{slideshow[key].heading}</h1>
                  <h2>{slideshow[key].subHeading}</h2>
                </div>
              </div>
            )
          })
        }

      </Slider>
    );
  }
}