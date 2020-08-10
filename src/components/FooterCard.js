import React from "react";
import { Link } from "gatsby";

const FooterCard = class extends React.Component {
  render() {
    return (
      
        <div className='footer-top grid grid-cols-4 bg-background-primary-color rounded-2xl px-20 py-16'>
          <div className='col-span-2'>
            <div className='text-2xl leading-none font-bold text-font-primary-color pb-2'>Hote<p className='inline-block text-call-to-action-color'>
              ly
            </p></div>
            <p className='text-font-secondary-color leading-loose'>Nunc, lobortis cras vulputate faucibus dictumst. Viverra sit nec
            pellentesque mattis. Ipsum amet nunc bibendum ut. Aliquam ut lorem</p>
          </div>
          <div className='text-font-secondary-color'>
            <ul className='space-y-6'>
              <li className='font-bold text-font-primary-color'>Navigation</li>
              <div className='space-y-3'><li>
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
              </li></div>
            </ul>
          </div>
          <div className='text-font-secondary-color'>
            <ul className='space-y-6'>
              <li className='font-bold text-font-primary-color'>Contact Us</li>
              <div className='space-y-3'><li>+62 123 123981</li>
              <li>
              <a href="mailto:info@hotely.com">info@hotely.com</a>
              </li>
              <li>
              <a href="http://hotely.com">hotely.com</a>
              </li></div>
            </ul>
          </div>
        </div>
    );
  }
};

export default FooterCard;
