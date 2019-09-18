/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";

export default () => (
  <Layout>
    <Box>
      <Centered sx={{ minHeight: "500px", bg: "secondary" }}>
        <Styled.h2>Slide #1</Styled.h2>
        <p sx={{ fontSize: 4, lineHeight: 1.7, m: 0 }}>
          Lorem, ipsum dolor sit amet consectetur.
        </p>
        <p sx={{ fontSize: 3 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          culpa?
        </p>
      </Centered>
    </Box>
    <Box>
      <Centered sx={{ minHeight: "500px", bg: "primary", color: "white" }}>
        <Styled.h2>Slide #2</Styled.h2>
        <p sx={{ fontSize: 4, lineHeight: 1.7, m: 0 }}>
          Lorem, ipsum dolor sit amet consectetur.
        </p>
        <p sx={{ fontSize: 3 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          culpa?
        </p>
      </Centered>
    </Box>
    <Box>
      <Centered sx={{ minHeight: "500px", bg: "accent", color: "white" }}>
        <Styled.h2>Slide #3</Styled.h2>
        <p sx={{ fontSize: 4, lineHeight: 1.7, m: 0 }}>
          Lorem, ipsum dolor sit amet consectetur.
        </p>
        <p sx={{ fontSize: 3 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          culpa?
        </p>
      </Centered>
    </Box>
  </Layout>
);
