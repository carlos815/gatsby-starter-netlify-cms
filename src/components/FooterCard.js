import React from "react";
import { Link } from "gatsby";

const FooterCard = ({data, title}) => {
  const {about, contactInfo} = data;

  return (
    <div className="footer-top grid grid-cols-4 bg-background-primary-color rounded-2xl px-20 py-16 justify-center">
      <div className="col-span-2">
        <div className="text-2xl leading-none font-bold text-font-primary-color pb-2">
  {title.slice(0, title.length-2)}<p className="inline-block text-call-to-action-color">{title.slice(title.length-2, title.length)}</p>
        </div>
        <p className="text-font-secondary-color leading-loose">
          {about}
        </p>
      </div>
      <div className="text-font-secondary-color">
        <ul className="space-y-6">
          <li className="font-bold text-font-primary-color">Navigation</li>
          <div className="space-y-3">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/find">Find Hotel</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="text-font-secondary-color">
        <ul className="space-y-6">
          <li className="font-bold text-font-primary-color">Contact Us</li>
          <div className="space-y-3">
            <li>{contactInfo[0].text}</li>
            <li>
              <a href={"mailto:" + contactInfo[1].text}>{contactInfo[1].text}</a>
            </li>
            <li>
              <a href={'http://' + contactInfo[2].text}>{contactInfo[2].text}</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FooterCard;
