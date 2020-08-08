import React from "react";
import PropTypes from "prop-types";
import quote from "../img/quote.svg";

const Quote = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className='quote'
    >
      <p className='text-font-secondary-color'>
      This hotel is like paradise!
      </p>
      <img className='col-span-1' src={`${quote}`} alt="" srcset=""/>
    </div>
  );
};

export default Quote;
