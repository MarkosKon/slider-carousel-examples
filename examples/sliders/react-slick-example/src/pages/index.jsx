/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";
import BgImage from "@affectionatedoor/gatsby-theme-ui/src/components/BgImage";

import CenteredExample from "../examples/CenteredExample";
import ProductsExample from "../examples/ProductsExample";
import RevealExample from "../examples/RevealExample";
import ThumbnailExample from "../examples/ThumbnailExample";
import VideoExample from "../examples/VideoExample";
import Content from "../components/Content";

const IndexPage = ({ data }) => {
  const cityImages = data.cityImages.nodes;
  const mobilePhones = data.mobilePhones.nodes;
  return (
    <Layout>
      <Slider
        dots
        arrows={false}
        // fade
        infinite={false}
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
        responsive={[
          {
            breakpoint: 1200,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 1 }
          }
        ]}
      >
        {cityImages.map(({ fluid }, i) => {
          const slideNo = i + 1;
          return (
            <Box key={fluid.src} sx={{ p: 1 }}>
              <BgImage
                fluid={fluid}
                title={`Slide ${slideNo}`}
                height="700px"
                mobileHeight="500px"
                overlayColor="#00000040"
              >
                <Centered sx={{ color: "white" }}>
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
      <CenteredExample images={cityImages} />
      <ProductsExample products={mobilePhones} />
      <RevealExample images={cityImages.slice(1, 4)} />
      <ThumbnailExample images={cityImages} />
      <VideoExample images={cityImages} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    cityImages: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    mobilePhones: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
  }).isRequired
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    cityImages: allImageSharp(
      filter: { fluid: { originalName: { regex: "/city/i" } } }
    ) {
      nodes {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobilePhones: allProductsJson {
      nodes {
        skuid
        title
        price
        image {
          childImageSharp {
            fluid(maxWidth: 76) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

// useEffect(() => {
//   const track = document.querySelector(".slick-track");
//   const config = { attributes: true, childList: false, subtree: false };
//   const callback = function(mutationsList, observer) {
//     for (let mutation of mutationsList) {
//       if (mutation.type === "attributes") {
//         // console.log(`The ${mutation.attributeName} attribute was modified.`);
//         console.log(mutation.target.style.transform);
//       }
//     }
//   };
//   const observer = new MutationObserver(callback);
//   observer.observe(track, config);
// }, []);
