/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import PropTypes from "prop-types";
import Slider from "react-slick";
import BgImage from "@affectionatedoor/gatsby-theme-ui/src/components/BgImage";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";

import Content from "../components/Content";

const MultipleScrollExample = ({ images }) => (
  <Box>
    <Styled.h2 sx={{ textAlign: "center" }}>
      Multiple items per scroll + gutter
    </Styled.h2>
    <Slider
      dots
      arrows={false}
      infinite={false}
      speed={500}
      slidesToShow={3}
      slidesToScroll={3}
      responsive={[
        {
          breakpoint: 1200,
          settings: { slidesToShow: 2, slidesToScroll: 2 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1, slidesToScroll: 1 }
        }
      ]}
    >
      {images.map(({ fluid }, i) => {
        const slideNo = i + 1;
        return (
          <Box key={fluid.src} sx={{ px: 2, py: 3 }}>
            <BgImage
              fluid={fluid}
              title={`Slide ${slideNo}`}
              height="700px"
              mobileHeight="500px"
              overlayColor="#00000040"
            >
              <Centered sx={{ color: "white", p: 4 }}>
                <Styled.h2 as="h3">
                  Slide
                  {slideNo}
                </Styled.h2>
                <Content />
              </Centered>
            </BgImage>
          </Box>
        );
      })}
    </Slider>
  </Box>
);

MultipleScrollExample.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      fluid: PropTypes.object
    })
  ).isRequired
};

export default MultipleScrollExample;
