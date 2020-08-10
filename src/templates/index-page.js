import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchBox from "../components/SearchBox";
import Quote from "../components/Quote";
import QuoteLarge from "../components/QuoteLarge";
import Featured from "../components/Featured";
import AboutUs from "../components/AboutUs";
import Recommended from "../components/Recommended";
import FindHotel from "../components/FindHotel";
import Testimonials from "../components/Testimonials";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterCard from "../components/FooterCard";
import Image from 'gatsby-image'

import heart from "../img/heart-2.svg";
import dots from "../img/dots.svg";

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  background,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  aboutUs,
}) => (
  <div>
    <section className="grid grid-rows-7">
      {/*This part has three sections nested in one to make them overlayed with CSS grid*/}

      <div className="row-span-7 row-start-1 col-start-1 py-20 opacity-0">
        {/*This is the space for the navbar, which is positioned as absolute to allow it to overlay with the background image. Every page should leave this space at the beggining*/}
      </div>

      {/* Search screen */}
      <div className="row-span-4 row-start-2 col-start-1 z-10">
        <Container>
          <div className="grid-12 h-auto">
            <div className="col-span-5">
              <SearchBox />
            </div>
            <div className="floating-parent col-span-6 col-start-7">
              <div className="floating-globes">
                <div>
                  <img src={heart} alt="" srcset="" />
                </div>
                <Quote />
                <Quote className="flex font-black" />

                <div>
                  <img src={heart} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/*Featured*/}
      <div className="relative row-span-2 row-start-6 col-start-1 z-10">
        <Container>
          <Featured/>
          <div className="absolute top-0 w-full h-full">
            <div className="absolute h-full w-full border border-transparent rounded-l-3xl gap-4 items-center bg-background-third-color"></div>
          </div>
        </Container>
      </div>

      {/* Background */}
      <div className="row-span-6 row-start-1 col-start-1 w-full h-full z-0">
        <PreviewCompatibleImage imageInfo={background} />
        {/*<img className="object-cover h-full w-full" src={background} alt="" />*/}
      </div>
    </section>

    {/*About Hotely*/}
    <section className="bg-background-primary-color py-16">
      <Container>
        <AboutUs data={aboutUs} />
      </Container>
    </section>

    {/* Recommended Hotel*/}
    <section className=" bg-background-third-color py-32">
      <Container>
        <Recommended />
      </Container>
    </section>

    {/*Find your best Hotel*/}
    <section className="relative bg-background-primary-color py-64">

      <Container>
      <img className="absolute" style={{top: "-4%"}} src={dots} alt="" />

        <FindHotel />
      </Container>
    </section>

    {/*Testimonials*/}
    <section className="bg-background-secondary-color pt-32">
      <div className="grid grid-rows-8">
        <div className="row-span-6 col-start-1 row-start-1">
          <Container>
            <Testimonials />
          </Container>
        </div>
        <div className="row-span-2 col-start-1 row-start-6 z-10">
          <Container>
            <FooterCard />
          </Container>
        </div>
        <div className="col-start-1  row-start-7 row-span-2 bg-background-third-color"></div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  background: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;


  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        background={frontmatter.background}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        aboutUs={frontmatter.aboutUs}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
 
        aboutUs {
          title
          par1
          par2
          counts {
            unit
            number
          }
        }
      }
    }
  }
`;
