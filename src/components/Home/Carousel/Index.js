import React from "react";
import Slider from "react-slick";
import "./carousel.scss";
import { ArrowIcon } from "../../../Assets/index";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowIcon className={"icon-arrow icon-arrow__next"} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowIcon className={"icon-arrow"} />
    </div>
  );
}


export default class Carousel extends React.Component {
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

                <div className="full-width-image margin-top-0" style={{
                  backgroundImage: `url(${
                    imageSrc
                    })`,
                }}>
                  <div className="caroulsel__text" >
                    <h1>{slideshow[key].heading}</h1>
                    <h2>{slideshow[key].subHeading}</h2>
                  </div>

                </div>

              </div>
            )
          })
        }

      </Slider>
    );
  }
}