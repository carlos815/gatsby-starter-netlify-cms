import React from "react";

const QuoteLarge = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className='QuoteLarge h-full rounded-xl bg-background-secondary-color p-8 '
    >
      <p className='text-background-primary-color pb-4'>{data.quote}</p>
      <p className='text-background-primary-color font-bold text-xl'>{data.author}</p>
     
    </div>
  );
};

export default QuoteLarge;
