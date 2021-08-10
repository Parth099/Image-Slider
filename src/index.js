import "./css/styles.css";
import "./css/reset.css";

import bear from "./images/bear.jpg";
import lakehouse from "./images/lakehouse.jpg";
import waterfall from "./images/waterfall.jpg";
import city from "./images/city.jpg";
import lake from "./images/lake.jpg";

import DOMImageSlider from "./DOMImageSlider";

const SliderFactory = (containerQString, imgArr, displayQString, sliderArrowsQString, legend) => {
  const containerMAIN = document.querySelector(containerQString);
  if (containerMAIN === null) {
    return;
  }
  const displaySite = containerMAIN.querySelector(displayQString);
  const sliderArrows = containerMAIN.querySelectorAll(sliderArrowsQString);
  return new DOMImageSlider(containerMAIN, imgArr, displaySite, sliderArrows, legend);
};

const legendA = {
  container: document.querySelector(".image-legend"),
  className: "dot",
};
const sliderA = SliderFactory("#slider1", [bear, lakehouse, city], "#img-main", ".sliderArrow", legendA);

const sliderB = SliderFactory("#slider2", [waterfall, lake, city], "#img-main", ".sliderArrow");
