import React from "react";
import PropTypes from "prop-types";
import hotelFeatured from "../img/hotelFeatured.jpg";

const Recommended = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className="about-us grid grid-cols-2">
      <div className="info pr-10 pt-3 bg-background-third-color">
        <h2 className="pb-5">Shangai Hotel</h2>
        <p className="pb-5 text-background-secondary-color text-xs">
          Shangai China
        </p>
        <p className="pb-12 text-base font-normal text-font-secondary-color">
          Ullamcorper cras imperdiet eu feugiat viverra pulvinar. Gravida
          integer tincidunt pretium dis fames porttitor velit. Volutpat
          tincidunt
        </p>

        <div className="flex items-center">
          <button className="btn w-full">Book Now</button>
          <div className="w-full text-center">
            <p className="inline text-2xl font-bold">$40</p>
            <p className="inline ">/Night</p>
          </div>
        </div>
      </div>
      <div className="images squared-image">
        <img src={hotelFeatured} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Recommended;
