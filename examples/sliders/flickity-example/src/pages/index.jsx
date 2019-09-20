/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useEffect, useRef, Fragment } from "react";
import { jsx, Styled, Box } from "theme-ui";
import Flickity from "flickity";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";

let flkty = null;
// const contentSelector = ".flickity-slider img";
// const contentSelector = ".flickity-slider h2";
// const contentSelector = ".flickity-slider > div > div";
const contentSelector = ".flickity-slider .content";

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

export default () => {
  const carouselRef = useRef();
  useEffect(() => {
    flkty = new Flickity(".carousel");
    const { slides } = flkty;
    const things = carouselRef.current.querySelectorAll(contentSelector);
    function scrollHandler() {
      slides.forEach(function(slide, i) {
        const thing = things[i];
        const x = (slide.target + flkty.x) * 0.53;
        thing.style.transform = `translateX(${-x}px)`;
      });
    }
    flkty.on("scroll", scrollHandler);
  }, []);
  return (
    <Layout>
      <div className="carousel" ref={carouselRef}>
        <Box sx={{ width: "100%", margin: 2 }}>
          <Centered
            sx={{
              p: 4,
              minHeight: "500px",
              bg: "secondary",
              overflow: "hidden"
            }}
          >
            <div className="content">
              <Styled.h2>Slide #1</Styled.h2>
              <Content />
            </div>
          </Centered>
        </Box>
        <Box sx={{ width: "100%", margin: 2 }}>
          <Centered
            sx={{
              p: 4,
              minHeight: "500px",
              bg: "primary",
              color: "white",
              overflow: "hidden"
            }}
          >
            <div className="content">
              <Styled.h2>Slide #2</Styled.h2>
              <Content />
            </div>
          </Centered>
        </Box>
        <Box sx={{ width: "100%", margin: 2 }}>
          <Centered
            sx={{
              p: 4,
              minHeight: "500px",
              bg: "accent",
              color: "white",
              overflow: "hidden"
            }}
          >
            <div className="content">
              <Styled.h2>Slide #3</Styled.h2>
              <Content />
            </div>
          </Centered>
        </Box>
        {/* <div
          className="carousel-cell"
          sx={{ marginRight: "20px", overflow: "hidden", width: 'auto' }}
        >
          <img
            sx={{ display: "block", height: "400px" }}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
            alt="cat nose"
          />
        </div>
        <div
          className="carousel-cell"
          sx={{ marginRight: "20px", overflow: "hidden", width: 'auto' }}
        >
          <img
            sx={{ display: "block", height: "400px" }}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
            alt="contrail"
          />
        </div>
        <div
          className="carousel-cell"
          sx={{ marginRight: "20px", overflow: "hidden", width: 'auto' }}
        >
          <img
            sx={{ display: "block", height: "400px" }}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
            alt="golden hour"
          />
        </div>
        <div
          className="carousel-cell"
          sx={{ marginRight: "20px", overflow: "hidden", width: 'auto' }}
        >
          <img
            sx={{ display: "block", height: "400px" }}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
            alt="flight formation"
          />
        </div> */}
      </div>
    </Layout>
  );
};
