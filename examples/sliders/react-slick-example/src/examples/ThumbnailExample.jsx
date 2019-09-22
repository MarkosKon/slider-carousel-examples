/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Slider from "react-slick";

const ThumbnailExample = ({ images }) => (
  <Box
    sx={{
      maxWidth: ["75%", "75%", "75%", "1000px"],
      margin: "auto",
      mb: 6,
      ".slick-arrow": {
        width: ["50px", "50px", "100px"],
        height: ["50px", "50px", "100px"],
        zIndex: 2
      },
      ".slick-prev": {
        left: ["-40px", "-80px"]
      },
      ".slick-next": {
        right: ["-40px", "-80px"]
      },
      ".slick-prev:before": {
        content: "'\\2039'"
      },
      ".slick-next:before": {
        content: "'\\203A'"
      },
      ".slick-prev:before, .slick-next:before": {
        color: "accent",
        fontSize: ["50px", "50px", "100px"],
        lineHeight: 0
      },
      ".slick-dots": {
        bottom: "-109px"
      },
      ".slick-dots li": {
        width: "100px",
        height: "100px",
        opacity: 0.5
      },
      ".slick-dots li.slick-active": {
        opacity: 1
      }
    }}
  >
    <Styled.h2 sx={{ textAlign: "center" }}>Thumbnail Example</Styled.h2>
    <p sx={{ textAlign: "center", display: "block", mb: 4 }}>
      You can add some more breakpoints to make this responsive, or you can just
      remove the arrows on smaller screens. You also have to reduce the
      thumbnail size on mobile screens.
    </p>
    <Slider
      dots
      infinite={false}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      fade
      customPaging={i => (
        <a href="/">
          <Img
            fluid={images[i].fluid}
            title={`Slide ${i}`}
            alt={`Slide ${i}`}
            sx={{ height: "100%" }}
          />
        </a>
      )}
    >
      {images.map(({ fluid }, i) => {
        const slideNo = i + 1;
        return (
          <Box key={fluid.src}>
            <Img
              fluid={fluid}
              title={`Slide ${slideNo}`}
              alt={`Slide ${slideNo}`}
              sx={{ height: ["400px", "600px"] }}
            />
          </Box>
        );
      })}
    </Slider>
  </Box>
);

ThumbnailExample.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      fluid: PropTypes.object
    })
  ).isRequired
};

export default ThumbnailExample;
