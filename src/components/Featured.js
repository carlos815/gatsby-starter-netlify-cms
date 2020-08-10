import React from "react";
import PropTypes from "prop-types";
import heart from "../img/heart.svg";
import Container from "./Container";
const Featured = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className="featured grid grid-cols-7 border border-transparent rounded-l-3xl gap-4 items-center p-16 z-10">
      <img className="col-span-1" src={`${heart}`} alt="" srcset="" />
      <p className="text-background-secondary-color col-span-3 text-4xl font-bold">
        It takes less than 1 minute to book a room
      </p>
      <p className="col-span-3 text-background-secondary-color  text-base">
        Suspendisse tristique porttitor vel iaculis iaculis nec imperdiet.
        Senectus risus nisi, eget vel sit faucibus praesent netus. Ut velit
        pellent porttitor vel iaculis iaculis
      </p>
    </div>
  );
};

export default Featured;
