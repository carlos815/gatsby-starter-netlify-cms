import React from "react";
import PropTypes from "prop-types";
import quote from "../img/quote.svg";

const QuoteLarge = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className='QuoteLarge rounded-xl bg-background-secondary-color p-8 max-w-md'
    >
      <p className='text-background-primary-color'>Convallis posuere nec convallis nec porta eleifend. Nam ornare sit pellentesque sapien senectus viverra vitae.</p>
      <p className='text-background-primary-color font-bold text-xl'>Robert Rene</p>
     
    </div>
  );
};

export default QuoteLarge;
