/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const ProductsExampleScroll = ({ products }) => (
  <Box sx={{ maxWidth: "80%", margin: "auto" }}>
    <Styled.h2 sx={{ textAlign: "center" }}>
      Products Example without a slider
    </Styled.h2>
    <p sx={{ textAlign: "center", maxWidth: "960px", margin: "auto" }}>
      {"Example from "}
      <Styled.a
        target="blank"
        rel="noopener noreferrer"
        href="https://css-tricks.com/can-get-pretty-far-making-slider-just-html-css/"
      >
        CSS Tricks: You can get pretty far in making a slider with just HTML and
        CSS.
      </Styled.a>
      {" Maybe we can specify items per page or something? "}
      {" Horizontal scrolling on desktop would be nice too."}
    </p>
    <Box
      // Slider Links
      sx={{
        p: 3,
        mb: 3,
        textAlign: "center",
        // does this work?
        "@supports (scroll-snap-type)": { display: "none" }
      }}
    >
      {products.map(({ skuid }, i) => (
        <Styled.a href={`#${skuid}`} key={skuid} sx={{ mr: 3 }}>
          {i}
        </Styled.a>
      ))}
    </Box>
    <Box
      // Slider
      sx={{
        display: "flex",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollSnapType: "x mandatory"
      }}
    >
      {products.map(({ skuid, title, price, image }) => (
        <Box
          // Slide
          id={skuid}
          key={skuid}
          sx={{
            p: 3,
            flexShrink: 0,
            // hack
            width: ["100%", "auto"],
            scrollSnapAlign: "start",
            scrollBehavior: "smooth",
            "&:target > div": {
              transform: "scale(1.1)"
            }
          }}
        >
          <Flex
            // Slide Content
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              transition: "transform .15s ease-out"
            }}
          >
            <Img
              fixed={image.childImageSharp.fixed}
              title={title}
              alt={title}
            />
            <Styled.a href="/" sx={{ mt: 3, textAlign: "center" }}>
              {title}
            </Styled.a>
            <p>{price}</p>
          </Flex>
        </Box>
      ))}
    </Box>
  </Box>
);

ProductsExampleScroll.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductsExampleScroll;
