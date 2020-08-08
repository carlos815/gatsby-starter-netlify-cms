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




export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  aboutUs,
}) => (
  <div>
    <section>
      <SearchBox />
      <Quote />
      <Quote />
    </section>
    <section>
      <Featured />
    </section>
    <section className="bg-background-primary-color">
      <AboutUs data={aboutUs}/>
    </section>
    <section>
      <Recommended/>
      <QuoteLarge/>
    </section>
    <section className="bg-background-primary-color py-64">
      <FindHotel/>
    </section>
    <section className='bg-background-secondary-color py-32'>
      <Testimonials/>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        } aboutUs 
            {
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
