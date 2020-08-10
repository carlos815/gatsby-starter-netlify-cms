import React from "react";
import quote from "../img/quote.svg";

const Quote = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className='quote'
    >
      <p className='text-font-secondary-color font-bold'>
      This hotel is like paradise!
      </p>
      <img className='col-span-1' src={`${quote}`} alt="" srcSet=""/>
    </div>
  );
};

export default Quote;
