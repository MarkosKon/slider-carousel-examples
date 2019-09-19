/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useEffect, useRef, Fragment } from "react";
import { jsx, Styled, Box } from "theme-ui";
import Flickity from "flickity";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";

// let flkty = null;
// const contentSelector = ".flickity-slider img";
// const contentSelector = ".flickity-slider > div > div";

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
    // eslint-disable-next-line no-new
    new Flickity(".carousel");
    // const { slides } = flkty;
    // function scrollHandler() {
    //   const things = carouselRef.current.querySelectorAll(contentSelector);
    //   console.log(things);
    //   slides.forEach(function(slide, i) {
    //     var thing = things[i];
    //     var x = ((slide.target + flkty.x) * -1) / 3;
    //     thing.style.transform = `translateX(${x}px)`;
    //     // if (i === 0) console.log(thing.style.transform);
    //   });
    // }
    // flkty.on("scroll", scrollHandler);
  }, []);
  return (
    <Layout>
      <div className="carousel" ref={carouselRef}>
        <Box sx={{ width: "100%" }}>
          <Centered sx={{ minHeight: "500px", bg: "secondary" }}>
            <Styled.h2>Slide #1</Styled.h2>
            <Content />
          </Centered>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Centered sx={{ minHeight: "500px", bg: "primary", color: "white" }}>
            <Styled.h2>Slide #2</Styled.h2>
            <Content />
          </Centered>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Centered sx={{ minHeight: "500px", bg: "accent", color: "white" }}>
            <Styled.h2>Slide #3</Styled.h2>
            <Content />
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
