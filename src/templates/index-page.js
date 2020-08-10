import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";

import SearchBox from "../components/SearchBox";
import Quote from "../components/Quote";
import Featured from "../components/Featured";
import AboutUs from "../components/AboutUs";
import Recommended from "../components/Recommended";
import FindHotel from "../components/FindHotel";
import Testimonials from "../components/Testimonials";
import Container from "../components/Container";
import FooterCard from "../components/FooterCard";

import heart from "../img/heart-2.svg";
import dots from "../img/dots.svg";

export const IndexPageTemplate = ({
  image,
  aboutus,
  featured,
  findhotel,
  recommended,
  testimonials,
}) => (
  <div>
    <section className="mainscreen grid">
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
                  <img src={heart} alt="" srcSet="" />
                </div>
                <Quote />
                <Quote className="flex font-black" />

                <div>
                  <img src={heart} alt="" srcSet="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/*Featured*/}
      <div className="relative self-center row-span-2 row-start-6 col-start-1 z-10">
        <Container>
          <Featured data={featured} />
          <div className="absolute top-0 w-full h-full">
            <div className="absolute h-full w-full border border-transparent rounded-l-3xl gap-4 items-center bg-background-third-color"></div>
          </div>
        </Container>
      </div>

      {/* Background */}
      <div className="overflow-hidden row-span-6 row-start-1 col-start-1 w-full h-full z-0">
        <PreviewCompatibleImage imageInfo={image} />
        {/*<img className="object-cover h-full w-full" src={background} alt="" />*/}
      </div>
    </section>

    {/*About Hotely*/}
    <section className="bg-background-primary-color py-16">
      <Container>
        <AboutUs data={aboutus} />
      </Container>
    </section>

    {/* Recommended Hotel*/}
    <section className=" bg-background-third-color py-32">
      <Container>
        <Recommended data={recommended} />
      </Container>
    </section>

    {/*Find your best Hotel*/}
    <section className="relative bg-background-primary-color py-64">
      <Container>
        <img className="absolute" style={{ top: "-4%" }} src={dots} alt="" />

        <FindHotel data={findhotel} />
      </Container>
    </section>

    {/*Testimonials*/}
    <section className="bg-background-secondary-color pt-32">
      <div className="grid grid-rows-8">
        <div className="row-span-6 col-start-1 row-start-1">
          <Container>
            <Testimonials data={testimonials} />
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
  featured: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  aboutus: PropTypes.shape({
    title: PropTypes.string,
    par1: PropTypes.string,
    par2: PropTypes.string,
    counts: PropTypes.array,
  }),
  recommended: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  findhotel: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter.testimonials)
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        featured={frontmatter.featured}
        aboutus={frontmatter.aboutus}
        findhotel={frontmatter.findhotel}
        recommended={frontmatter.recommended}
        testimonials={frontmatter.testimonials}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutus {
          title
          par1
          par2
          counts {
            unit
            number
          }
        }
        findhotel {
          description
          items {
            country
            image1 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 256, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            name
          }
          title
        }
        testimonials {
          author
          country
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 512, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          quote
        }
        recommended {
          country
          description
          name
          review {
            author
            quote
          }
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        featured {
          text
          title
        }
      }
    }
  }
`;
