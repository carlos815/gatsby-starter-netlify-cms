import React from "react";
import PropTypes from "prop-types";
import hotelFeatured from "../img/hotelFeatured.jpg";
import stars from "../img/stars.svg";
import arrowLeft from "../img/arrow-left.svg"
import arrowRight from "../img/arrow-right.svg"


const Testimonials = ({ testimonials }) => (
  <div className="grid-12 grid-rows-2 testimonials row-gap-16 pt-6">
    <div className="squared-image col-span-5  rounded-2xl overflow-hidden">
      <img className="" src={hotelFeatured} alt="" />
    </div>
    <div className="flex flex-col  col-span-6 col-start-7 items-start space-y-5 justify-between p-12 bg-background-primary-color bg-opacity-25 text-background-primary-color">
      <p>
        Aliquet tincidunt urna congue lectus sodales volutpat, in venenatis. In
        pellentesque est iaculis tortor proin eleifend ipsum nunc, sed. At
        malesuada fusce egestas placerat diam justo. At arcu, arcu tempor
        ultrices scelerisque tempus consequat. Feugiat id volutpat congue
        natoque sodales eleifend mattis posuere. Auctor viverra pulvinar massa
        vitae condimentum in tristique. Sed sit eu, eget pellentesque
      </p>
      <img src={stars} alt="" />
    </div>
    <div className="squared-image col-span-5  col-start-1 fade-out rounded-t-2xl overflow-hidden">
      <img src={hotelFeatured} alt="" />
    </div>
    <div className="flex col-span-6 col-start-7 justify-between">
      <div className="text-background-primary-color">
        <p className="text2xl font-bold">Robert Rene</p>
        <p>Singapore</p>
      </div>
      <div className="flex items-start gap-3">
        <div className="cursor-pointer"><img src={arrowLeft} alt="" srcset=""/></div>
        <div className="cursor-pointer"><img src={arrowRight} alt="" srcset=""/></div>
      </div>
    </div>
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
