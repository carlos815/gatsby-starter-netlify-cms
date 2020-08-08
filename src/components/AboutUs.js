import React from "react";
import PropTypes from "prop-types";
import aereal from "../img/aereal.jpg";


const AboutUs = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;
  console.log(data.counts)
  return (
    <div className='about-us grid grid-cols-2'>
        <div className='images squared-image'>
            <img src={aereal} alt="" srcset=""/>
        </div>
        <div className='info pl-16'>
            <h2 className='pb-12'>{data.title}</h2>

            <p className='pb-12 text-base font-normal text-font-secondary-color'>
              {data.par1}
            </p>
            <div className='flex pb-12 '>
              {data.counts.map((count) => {return <Counts data={count}/>})}
            
            </div>
            <p className='pb-12 text-base font-normal text-font-secondary-color'>
            {data.par2}
            </p>
            <button className='btn'>Explore More</button>
        </div>
    </div>
  );
};

export default AboutUs;


const Counts = ({ data }) => {
    //const { frontmatter } = data.markdownRemark;
    console.log(data)
    return (
      <div className='flex pr-8 items-baseline'>
         <div className='text-background-secondary-color font-bold text-2xl pr-2'>
             {data.number}
         </div>
         <div>{data.unit}</div>
      </div>
    );
  };