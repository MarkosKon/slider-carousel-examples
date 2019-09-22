/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, Styled, Box } from "theme-ui";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import Slider from "react-slick";

const CenteredExample = ({ images }) => {
  // Double render hack to update the responsive centerPadding in SSR.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);
  return (
    <Box
      sx={{
        px: [1, 4, 6],
        "& .slick-slide": {
          transition: "all .33s ease-in-out"
          // filter: "blur(2px)"
        },
        "& .slick-active": {
          transform: "scale(1.2)"
          // filter: "unset"
        }
      }}
    >
      <Styled.h2 sx={{ textAlign: "center" }}>Centered Example</Styled.h2>
      <p
        sx={{
          display: "block",
          textAlign: "center",
          mb: 4,
          fontStyle: "italic"
        }}
      >
        It&apos;s not 100% responsive
      </p>
      <Slider
        // double render hack.
        key={isClient}
        dots
        arrows={false}
        infinite={false}
        speed={500}
        centerMode
        centerPadding="350px"
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={2}
        responsive={[
          {
            breakpoint: 1500,
            settings: { centerPadding: "150px" }
          },
          {
            breakpoint: 1200,
            settings: { centerPadding: "50px" }
          },
          {
            breakpoint: 600,
            settings: { centerPadding: "0px" }
          }
        ]}
      >
        {images.map(({ fluid }, i) => {
          const slideNo = i + 1;
          return (
            <Box key={fluid.src} sx={{ p: 5 }}>
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
};

CenteredExample.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      fluid: PropTypes.object
    })
  ).isRequired
};

export default CenteredExample;
