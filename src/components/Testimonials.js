import React from "react";
import PropTypes from "prop-types";
import hotelFeatured from "../img/hotelFeatured.jpg";
import stars from "../img/stars.svg";

const Testimonials = ({ testimonials }) => (
  <div className="grid testimonials row-gap-16">
    <div className="squared-image rounded-2xl overflow-hidden mr-32">
      <img className="" src={hotelFeatured} alt="" />
    </div>
    <div className="flex flex-col items-start space-y-5 justify-between p-12 bg-background-primary-color bg-opacity-25 text-background-primary-color">
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
    <div className="squared-image fade-out-background-primary-color rounded-2xl overflow-hidden mr-32">
      <img src={hotelFeatured} alt="" />
    </div>
    <div className="flex justify-between">
      <div className="text-background-primary-color">
        <p className="text2xl font-bold">Robert Rene</p>
        <p>Singapore</p>
      </div>
      <div className="flex items-start">
        <div className="rounded-full bg-background-primary-color">{'<-'}</div>
        <div className="rounded-full bg-background-primary-color">{'->'}</div>
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
