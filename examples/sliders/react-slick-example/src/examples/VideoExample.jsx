/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import Centered from "@affectionatedoor/gatsby-theme-ui/src/components/Centered";
import Button from "@affectionatedoor/gatsby-theme-ui/src/components/Button";

import video1 from "../videos/video-1-medium.mp4";
import video2 from "../videos/video-2-medium.mp4";
import video3 from "../videos/video-3-medium.mp4";
// import video1 from "../videos/video-1.mp4";
// import video2 from "../videos/video-2.mp4";
// import video3 from "../videos/video-3.mp4";
import poster1 from "../images/video-1-poster.jpg";
import poster2 from "../images/video-2-poster.jpg";
import poster3 from "../images/video-3-poster.jpg";

const videos = [video1, video2, video3];
const posters = [poster1, poster2, poster3];
const overlays = ["#00000040", "#00000030", "#00000080"];

const VideoExample = () => (
  <Box
    sx={{
      // overriding styles is not so easy after all.
      ".slick-dots": {
        display: "inline-block",
        width: "auto",
        top: ["1em", "2em"],
        right: ["1em", "2em"],
        bottom: "auto"
      },
      ".slick-dots li": {
        width: ["2em", "2.5em", "3.5em"],
        height: "2.5em",
        mx: "1px"
      },
      ".slick-dots li > button": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        fontSize: "initial",
        padding: 0
      },
      ".slick-dots li button:before": {
        position: "relative",
        content: "''",
        transition: "all .15s ease-in-out",
        backgroundColor: "white",
        width: "100%",
        height: ["4px", "6px"],
        fontSize: 2
      },
      ".slick-dots li.slick-active button:before": {
        backgroundColor: "accent"
      }
    }}
  >
    <Styled.h2 sx={{ textAlign: "center" }}>Video Example</Styled.h2>
    <p
      sx={{
        display: "block",
        mb: 4,
        mx: "auto",
        maxWidth: "960px",
        p: 3
      }}
    >
      The videos need additional formats. Different sizes depending on the
      connection would also be nice, but it&apos;s not supported by default.
      Finally, it&apos;s a really bad idea to show multiple autoplay videos in a
      hero section like I do here; it&apos;s much better to show a single one
      without a slider.
    </p>
    <Slider dots arrows={false} speed={500} slidesToShow={1} slidesToScroll={1}>
      {videos.map((videoSrc, i) => {
        const slideNo = i + 1;
        return (
          <Box
            key={videoSrc}
            sx={{ position: "relative", width: "100vw", height: "100vh" }}
          >
            <LazyLoad height={500} once>
              <video
                playsInline
                autoPlay
                muted
                loop
                poster={posters[i]}
                sx={{
                  position: "absolute",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%"
                }}
              >
                {/* <source src="webm-format.webm" type="video/webm" /> */}
                <source src={videoSrc} type="video/mp4" />
              </video>
            </LazyLoad>
            <div
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: overlays[i]
              }}
            />
            <Centered
              sx={{
                position: "absolute",
                width: "100%",
                color: "white",
                p: [3, 4],
                textAlign: ["center", "left"]
              }}
            >
              <Box>
                <Styled.h1 as="h3" sx={{ fontSize: [6, 8] }}>
                  {`Slide ${slideNo}`}
                </Styled.h1>
                <p sx={{ fontSize: 4, lineHeight: 1.7, mb: 4 }}>
                  Lorem, ipsum dolor sit amet consectetur.
                </p>
                <Button>Do something</Button>
              </Box>
            </Centered>
          </Box>
        );
      })}
    </Slider>
  </Box>
);

export default VideoExample;
