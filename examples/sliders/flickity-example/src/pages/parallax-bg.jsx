/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useEffect, useRef, Fragment } from "react";
import { jsx, Styled, Box } from "theme-ui";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Flickity from "flickity";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";
import BgImage from "@affectionatedoor/gatsby-theme-ui/src/components/BgImage";

let flkty;
const contentSelector = ".flickity-slider picture > img";

const Content = () => (
  <Fragment>
    <p sx={{ fontSize: 4, lineHeight: 1.7, m: 0 }}>
      Lorem, ipsum dolor sit amet consectetur.
    </p>
    <p sx={{ fontSize: 3 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
    </p>
  </Fragment>
);

const ParallaxBgPage = ({ data }) => {
  const cityImages = data.cityImages.nodes;

  const carouselRef = useRef();
  useEffect(() => {
    flkty = new Flickity(".carousel");

    const { slides } = flkty;
    const things = carouselRef.current.querySelectorAll(contentSelector);

    // This is called on resize and the slider breaks.
    function scrollHandler() {
      slides.forEach((slide, i) => {
        const thing = things[i];
        const x = (slide.target + flkty.x) * 0.53;
        thing.style.transform = `translateX(${-x}px)`;
      });
    }

    flkty.on("scroll", scrollHandler);
  }, []);
  return (
    <Layout>
      <Styled.h1 sx={{ textAlign: "center", my: 5 }}>
        Parallax example with background image
      </Styled.h1>
      <div className="carousel" ref={carouselRef}>
        {cityImages.map(({ fluid }, i) => {
          const slideNo = i + 1;
          return (
            <Box key={fluid.src} sx={{ width: "100%" }}>
              <BgImage
                fluid={fluid}
                title={`Slide ${slideNo}`}
                height="800px"
                mobileHeight="500px"
                overlayColor="#00000040"
              >
                <Centered sx={{ color: "white", p: 3 }}>
                  <Styled.h2 as="h3">{`Slide ${slideNo}`}</Styled.h2>
                  <Content />
                </Centered>
              </BgImage>
            </Box>
          );
        })}
      </div>
    </Layout>
  );
};

ParallaxBgPage.propTypes = {
  data: PropTypes.shape({
    cityImages: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
  }).isRequired
};

export default ParallaxBgPage;

export const query = graphql`
  query ParallaxBgPageQuery {
    cityImages: allImageSharp(
      filter: { fluid: { originalName: { regex: "/city/i" } } }
    ) {
      nodes {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
