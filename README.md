# Sliders

## Libraries

[NPM Trends comparison](https://www.npmtrends.com/react-slick-vs-tiny-slider-vs-flickity-vs-react-swipe-vs-react-slider-vs-nuka-carousel-vs-react-responsive-carousel) for popular slider/carousel libraries.

### Libraries I test here

- [react-slick](https://github.com/akiran/react-slick)
- [nuka-carousel](https://github.com/FormidableLabs/nuka-carousel)
- [flickity](https://flickity.metafizzy.co)
- [tiny-slider](https://github.com/ganlanyuan/tiny-slider#readme)

### Requirements

- Flexible with a lot of features.
- Accessible.
- Reasonable package size.
- Well tested.
- Free commercial license.
- Regularly maintained.

## Examples to copy

Did most of them with `react-slick` except from the parallax effect which I did with `flickity`.

- Centered:
  - [Webflow template overview.](https://webflow.com/templates/html/studies-education-website-template)
  - [flickity is-selected effect.](https://codepen.io/desandro/pen/jEpxqJ)
- [Products slider.]()
- [Smart slider Reveal animations.](https://smartslider3.com/layer-slider-template/)
- [Lamborghini thumbnail.](https://www.lamborghini.com/en-en/news/lamborghini-sian-the-first-hybrid-few-off#gallery-news)
- [Video slider.](https://theenglishbus.com/)
- [Line transition.](https://theenglishbus.com/#section-carousel)
  You can do something similar if you use the `fade` option, then you delay the transition somehow—probably with a `setTimeout` that involves `slickPause` and `slickNext`?—and trigger an animation on the lines, by changing class names with a method like the `beforeChange`. In the example they use slick-carousel.
- [Lamborghini three-js-like effect.](https://www.lamborghini.com/en-en/)
  See above, seems similar.
- [Parallax Effect.](https://themes.themegoods.com/hoteller/beach/)
  You can use `flickity`—see the example project `yarn flickity develop`. With `react-slick` you can maybe use a mutation observer?

## Run examples

- `yarn slick develop`
- `yarn flickity develop`
- `yarn nuka develop`
- `yarn tiny develop`

## Photo Credits

- city-1.jpg: Photo by Leo Cardelli from Pexels
- city-2.jpg: Photo by Miki Czetti from Pexels
- city-3.jpg: Photo by Matthew DeVries from Pexels
- city-4.jpg: Photo by Josh Hild from Pexels
- city-5.jpg: Photo by Jeswin Thomas from Pexels

## Video Credits

- video-1.mp4: Video by sten from Pexels.
- video-2.mp4: Video by invisiblepower from Pexels.
- video-3.mp4: Video by Tom Fisk from Pexels.

## Other Links

- [WAI ARIA: Carousel Tutorial.](https://www.w3.org/WAI/tutorials/carousels/)
- [CSS Tricks: You can get pretty far in making a slider with just HTML and CSS.](https://css-tricks.com/can-get-pretty-far-making-slider-just-html-css/)
- [Webflow: Carousel/slider design best practices.](https://webflow.com/blog/carousel-slider-design-best-practices)
- [Mutation Observer.](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
