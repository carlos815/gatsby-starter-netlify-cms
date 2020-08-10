import React from "react";
import heart from "../img/heart.svg";

const Featured = ({ data }) => {

  return (
    <div className="featured h-full grid grid-cols-7 border border-transparent rounded-l-3xl gap-4 items-center p-16 z-20">
      <img className="col-span-1 z-20" src={`${heart}`} alt="" srcSet="" />
      <p className="text-background-secondary-color col-span-3 text-4xl font-bold z-20">
        It takes less than 1 minute to book a room
      </p>
      <p className="col-span-3 text-background-secondary-color  text-base z-20">
        Suspendisse tristique porttitor vel iaculis iaculis nec imperdiet.
        Senectus risus nisi, eget vel sit faucibus praesent netus. Ut velit
        pellent porttitor vel iaculis iaculis
      </p>
    </div>
  );
};

export default Featured;
