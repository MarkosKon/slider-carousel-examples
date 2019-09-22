/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import Slider from "react-slick";

const ProductsExample = ({ products }) => (
  <Box sx={{ maxWidth: "80%", margin: "auto" }}>
    <Styled.h2 sx={{ textAlign: "center" }}>Products Example</Styled.h2>
    <Slider
      dots
      arrows={false}
      infinite={false}
      speed={500}
      slidesToShow={5}
      slidesToScroll={5}
      responsive={[
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3, slidesToScroll: 3 }
        },
        {
          breakpoint: 770,
          settings: { slidesToShow: 2, slidesToScroll: 2 }
        },
        {
          breakpoint: 420,
          settings: { slidesToShow: 1, slidesToScroll: 1 }
        }
      ]}
    >
      {products.map(({ skuid, title, price, image }) => (
        <Box key={skuid} sx={{ p: 3 }}>
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Img
              fixed={image.childImageSharp.fixed}
              title={title}
              alt={title}
            />
            <Styled.h4 sx={{ textAlign: "center" }}>{title}</Styled.h4>
            <p>{price}</p>
          </Flex>
        </Box>
      ))}
    </Slider>
  </Box>
);

ProductsExample.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductsExample;
