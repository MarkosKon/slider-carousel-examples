/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useEffect } from "react";
import { jsx, Styled, Box } from "theme-ui";
import PropTypes from "prop-types";
import Slider from "react-slick";
import BgImage from "@affectionatedoor/gatsby-theme-ui/src/components/BgImage";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";
import Button from "@affectionatedoor/gatsby-theme-ui/src/components/Button";
import AnimationOnScroll from "@affectionatedoor/gatsby-theme-ui/src/components/Sal";

const overlayColors = ["#26424882", "#94501a8c", "#61400582"];

const RevealExample = ({ images }) => {
  useEffect(() => {
    if (window.sal) window.sal({ once: false });
  }, []);
  return (
    <Box
      as="section"
      sx={{
        ".slick-arrow": {
          width: "50px",
          height: "50px",
          zIndex: 2
        },
        ".slick-prev": {
          left: [0, "50px"]
        },
        ".slick-next": {
          right: [0, "50px"]
        },
        ".slick-prev:before, .slick-next:before": {
          color: "accent",
          fontSize: [5, 7]
        },
        ".slick-dots": {
          bottom: "25px"
        },
        ".slick-dots li button:before": {
          color: "accent",
          fontSize: 2
        }
      }}
    >
      <Styled.h2 sx={{ textAlign: "center" }}>Reveal Example</Styled.h2>
      <Slider
        dots
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {images.map(({ fluid }, i) => {
          const slideNo = i + 1;
          return (
            <Box key={fluid.src}>
              <BgImage
                fluid={fluid}
                title={`Slide ${slideNo}`}
                height="800px"
                mobileHeight="500px"
                overlayColor={overlayColors[i]}
              >
                <Centered
                  sx={{
                    color: "white",
                    p: [3, 4],
                    textAlign: ["center", "left"]
                  }}
                >
                  <Box>
                    <AnimationOnScroll
                      delay="100"
                      animation="slide-left"
                      duration="1000"
                    >
                      <Styled.h1 as="h3" sx={{ fontSize: [6, 8] }}>
                        {`Slide ${slideNo}`}
                      </Styled.h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                      delay="600"
                      animation="slide-left"
                      duration="1000"
                    >
                      <p sx={{ fontSize: 4, lineHeight: 1.7, mb: 4 }}>
                        Lorem, ipsum dolor sit amet consectetur.
                      </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                      delay="1000"
                      animation="slide-left"
                      duration="1000"
                    >
                      <Button>Do something</Button>
                    </AnimationOnScroll>
                  </Box>
                </Centered>
              </BgImage>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

RevealExample.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      fluid: PropTypes.object
    })
  ).isRequired
};

export default RevealExample;
