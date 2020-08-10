import React from "react";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FindHotel = ({ data }) => {

  return (
    <div className="find-hotel flex flex-col items-center">
      <div className='flex flex-col text-center items-center max-w-xl pb-32'>
        <h2>{data.title}</h2>
        <p className='text-font-secondary-color py-10'>
          {data.description}
        </p>
        <button className="btn w-auto inline-block">View All</button>
      </div>

      <div className="cardGroup grid-12">

        {data.items.map((item) => {
          return <Card data={item} key={item.name}/>
        })}

      </div>
    </div>
  );
};

export default FindHotel;

const Card = ({ data }) => {
  return (
    <div
      className="
      card
    group
    grid grid-rows-2
    col-span-3
    bg-background-primary-color 
    rounded-xl 
    overflow-hidden  
    hover:bg-background-secondary-color 
    cursor-pointer"
    >
      <div className="imagecontainer overflow-hidden">
      <PreviewCompatibleImage imageInfo={data.image1} />
      {/*<img src={hotelFeatured} alt="" />*/}
      </div>
      <div className="p-8  border-2 rounded-b-xl group-hover:border-background-secondary-color">
        <p className="font-bold text-xl group-hover:text-background-primary-color">
          {data.name}
        </p>
        <p className="text-font-secondary-color group-hover:text-background-primary-color">
        {data.country}
        </p>
      </div>
    </div>
  );
};
