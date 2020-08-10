import React from "react";
import QuoteLarge from "./QuoteLarge";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Recommended = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className="recommended relative about-us grid-12">
      <div className="info col-span-4 row-span-6">
        <h2 className="pb-5"> {data.name}</h2>
        <p className="pb-5 text-background-secondary-color text-xs">
          {data.country}
        </p>
        <p className="pb-12 text-base font-normal text-font-secondary-color">
          {data.description}
        </p>

        <div className="flex items-center">
          <button className="btn w-full">Book Now</button>
          <div className="w-full text-center">
            <p className="inline text-2xl font-bold">$40</p>
            <p className="inline ">/Night</p>
          </div>
        </div>
      </div>
      <div className="image max-w-screen-xl h-full row-span-5 col-span-8 col-start-5 row-start-1 border rounded-l-3xl overflow-hidden border-transparent">
        <PreviewCompatibleImage imageInfo={data.image1} />
      </div>
      <div className="self-center col-span-5 col-start-8 row-start-5 row-end-7 z-10 relative">
        <QuoteLarge data={data.review} />
      </div>
    </div>
  );
};

export default Recommended;
