import React from "react";
import PropTypes from "prop-types";
import hotelFeatured from "../img/hotelFeatured.jpg";
import QuoteLarge from "./QuoteLarge"

const Recommended = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className="relative about-us grid-12 grid-rows-6">
      <div className="info col-span-4 row-span-6">
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
      <div className="wide-image max-w-screen-xl w-screen h-full row-span-5 col-span-8 col-start-5 row-start-1 border rounded-3xl overflow-hidden border-transparent">
        <img className='cover' src={hotelFeatured} alt="" srcset="" />
      </div>
      <div className='col-span-5 col-start-8 row-start-5 row-end-7 z-10 self-end relative'>
       
          <QuoteLarge/>
  
      </div>
    </div>
  );
};

export default Recommended;
