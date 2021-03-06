/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useEffect, useRef, Fragment } from "react";
import { jsx, Styled, Box } from "theme-ui";
import Flickity from "flickity";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";

let flkty;
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

const IndexPage = () => {
  const carouselRef = useRef();
  useEffect(() => {
    flkty = new Flickity(".carousel");

    const { slides } = flkty;
    const things = carouselRef.current.querySelectorAll(contentSelector);

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
      <Styled.h1 sx={{ textAlign: "center" }}>Parallax example</Styled.h1>
      <div className="carousel" ref={carouselRef}>
        <Box sx={{ width: "100%" }}>
          <Centered
            sx={{
              p: 4,
              minHeight: ["500px", "650px"],
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
        <Box sx={{ width: "100%" }}>
          <Centered
            sx={{
              p: 4,
              minHeight: ["500px", "650px"],
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
        <Box sx={{ width: "100%" }}>
          <Centered
            sx={{
              p: 4,
              minHeight: ["500px", "650px"],
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
      </div>
    </Layout>
  );
};

export default IndexPage;
