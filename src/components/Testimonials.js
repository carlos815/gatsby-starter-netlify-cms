import React from "react";
import PropTypes from "prop-types";
import stars from "../img/stars.svg";
import arrowLeft from "../img/arrow-left.svg"
import arrowRight from "../img/arrow-right.svg"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Testimonials = ({ data }) => (
  <div className="grid-12 grid-rows-2 testimonials row-gap-16 pt-6">
    <div className="squared-image col-span-5  rounded-2xl overflow-hidden">
    <PreviewCompatibleImage imageInfo={data[0].image1} />
    </div>
    <div className="flex flex-col  col-span-6 col-start-7 items-start space-y-5 justify-between p-12 bg-background-primary-color bg-opacity-25 text-background-primary-color">
      <p>
        {data[0].quote}
      </p>
      <img src={stars} alt="" />
    </div>
    <div className="squared-image col-span-5 col-start-1 fade-out rounded-t-2xl overflow-hidden">
    <PreviewCompatibleImage imageInfo={data[1].image1} />
    </div>
    <div className="flex col-span-6 col-start-7 justify-between">
      <div className="text-background-primary-color">
        <p className="text2xl font-bold">{data[0].author}</p>
        <p>{data[0].country}</p>
      </div>
      <div className="flex items-start gap-3">
        <div className="cursor-pointer"><img src={arrowLeft} alt="" srcSet=""/></div>
        <div className="cursor-pointer"><img src={arrowRight} alt="" srcSet=""/></div>
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
