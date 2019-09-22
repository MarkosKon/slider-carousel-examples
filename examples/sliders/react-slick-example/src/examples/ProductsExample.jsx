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
      slidesToShow={1}
      slidesToScroll={4}
      variableWidth
      responsive={[
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 2 }
        }
      ]}
    >
      {products.map(({ skuid, title, price, image }) => (
        <Box key={skuid} sx={{ p: 3, width: "200px" }}>
          <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
            <Img
              fluid={image.childImageSharp.fluid}
              title={title}
              alt={title}
              sx={{ maxHeight: "100px", width: "100px" }}
            />
            <Styled.h4>{title}</Styled.h4>
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
