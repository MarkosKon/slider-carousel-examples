/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";

import CenteredExample from "../examples/CenteredExample";
import ProductsExample from "../examples/ProductsExample";
import RevealExample from "../examples/RevealExample";
import ThumbnailExample from "../examples/ThumbnailExample";
import VideoExample from "../examples/VideoExample";
import MultipleScrollExample from "../examples/MultipleScrollExample";
import ProductsExampleScroll from "../examples/ProductsExampleScroll";

const IndexPage = ({ data }) => {
  const cityImages = data.cityImages.nodes;
  const mobilePhones = data.mobilePhones.nodes;
  return (
    <Layout>
      <Box sx={{ textAlign: "center" }}>
        <Styled.h1>Slider examples with react-slick.</Styled.h1>
        <p>
          <Styled.a
            href="https://github.com/MarkosKon/slider-carousel-examples"
            target="noopener noreferrer"
          >
            Github repo
          </Styled.a>
        </p>
      </Box>
      <Box as="section" sx={{ mt: 5 }}>
        <MultipleScrollExample images={cityImages} />
      </Box>
      <Box as="section" sx={{ my: 6 }}>
        <CenteredExample images={cityImages} />
      </Box>
      <Box as="section" sx={{ my: 5 }}>
        <ProductsExample products={mobilePhones} />
      </Box>
      <Box as="section" sx={{ my: 6 }}>
        <RevealExample images={cityImages.slice(1, 4)} />
      </Box>
      <Box as="section" sx={{ my: 5 }}>
        <ThumbnailExample images={cityImages} />
      </Box>
      <Box as="section" sx={{ mt: 7 }}>
        <VideoExample images={cityImages} />
      </Box>
      <Box as="section" sx={{ my: 5 }}>
        <ProductsExampleScroll products={mobilePhones} />
      </Box>
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
            fixed(height: 150) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

// Experiments for a parallax effect with react-slick.
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
