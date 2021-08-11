import "./css/styles.css";
import "./css/reset.css";

import bear from "./images/bear.jpg";
import lakehouse from "./images/lakehouse.jpg";
import waterfall from "./images/waterfall.jpg";
import city from "./images/city.jpg";
import lake from "./images/lake.jpg";
import sand from "./images/sand.jpg";
import beach from "./images/beach.jpg";

import DOMImageSlider from "./DOMImageSlider";

function SliderFactory(containerQString, imgArr, displayQString, sliderArrowsQString, legend, autoSlide) {
  const containerMAIN = document.querySelector(containerQString);
  if (containerMAIN === null) {
    return;
  }
  const displaySite = containerMAIN.querySelector(displayQString);
  const sliderArrows = containerMAIN.querySelectorAll(sliderArrowsQString);
  return new DOMImageSlider(containerMAIN, imgArr, displaySite, sliderArrows, legend, autoSlide);
}

const legendA = {
  container: document.querySelector("#slider1").querySelector(".image-legend"),
  className: "dot",
};
const sliderA = SliderFactory("#slider1", [bear, lakehouse, city, lake], "#img-main", ".sliderArrow", legendA, true);

const legendB = {
  container: document.querySelector("#slider2").querySelector(".image-legend"),
  className: "dot",
};
const sliderB = SliderFactory("#slider2", [waterfall, lake, city, beach], "#img-main", ".sliderArrow", legendB, false);

const sliderC = SliderFactory("#slider3", [beach, lakehouse, city, sand], "#img-main", ".sliderArrow", {}, false);
