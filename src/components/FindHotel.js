import React from "react";
import PropTypes from "prop-types";
import hotelFeatured from "../img/hotelFeatured.jpg";

const FindHotel = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className="find-hotel flex flex-col items-center">
      <div className='flex flex-col text-center items-center max-w-xl pb-32'>
        <h2>Find your best hotel</h2>
        <p className='text-font-secondary-color py-10'>
          Ullamcorper cras imperdiet eu feugiat viverra pulvinar. Gravida
          integer tincidunt pretium dis fames porttitor velit. Volutpat
          tincidunt
        </p>
        <button className="btn w-auto inline-block">View All</button>
      </div>

      <div className="cardGroup flex space-x-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FindHotel;

const Card = ({ data }) => {
  return (
    <div
      className="
    group
    grid
    grid-rows-2 
    bg-background-primary-color 
    rounded-xl 
    overflow-hidden  
    hover:bg-background-secondary-color 
    cursor-pointer"
    >
      <div classname="squared-image">
        <img src={hotelFeatured} alt="" />
      </div>
      <div className="p-8 border-outline border-2 rounded-b-xl group-hover:border-background-secondary-color">
        <p className="font-bold text-xl group-hover:text-background-primary-color">
          Hotel De’Luna
        </p>
        <p className="text-font-secondary-color group-hover:text-background-primary-color">
          Singapore
        </p>
      </div>
    </div>
  );
};
