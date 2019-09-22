/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useEffect, Fragment } from "react";
import { jsx, Styled, Box } from "theme-ui";
import Flickity from "flickity";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";

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

const VanillaPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Flickity(".carousel");
  }, []);
  return (
    <Layout>
      <Styled.h1 sx={{ textAlign: "center" }}>Vanilla example</Styled.h1>
      <div className="carousel">
        <Box sx={{ width: "100%" }}>
          <Centered
            sx={{
              p: 4,
              minHeight: ["500px", "650px"],
              bg: "secondary"
            }}
          >
            <Styled.h2>Slide #1</Styled.h2>
            <Content />
          </Centered>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Centered
            sx={{
              p: 4,
              minHeight: ["500px", "650px"],
              bg: "primary",
              color: "white"
            }}
          >
            <Styled.h2>Slide #2</Styled.h2>
            <Content />
          </Centered>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Centered
            sx={{
              p: 4,
              minHeight: ["500px", "650px"],
              bg: "accent",
              color: "white"
            }}
          >
            <Styled.h2>Slide #3</Styled.h2>
            <Content />
          </Centered>
        </Box>
      </div>
    </Layout>
  );
};

export default VanillaPage;
