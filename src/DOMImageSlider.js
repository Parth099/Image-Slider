export default class DOMImageSlider {
  constructor(container = document.body, imgArr, displaySite, sliderArrows, legend = {}, autoSlide = false) {
    console.log(autoSlide);
    this.imgArr = [...imgArr];
    this.container = container;
    this.dist = displaySite;
    this.sliderArrows = sliderArrows;
    this.imgIndex = 0;
    this.legend = legend;
    //init firstrun data
    this.shiftImg(0); //show first img
    this.shiftImgListener();
    if (this.legend.container && this.legend.className) {
      this.createLegend(this.legend.container, this.legend.className);
      //this.shiftLegendListener();
    }
    if (autoSlide) {
      this.startAutoSlideShow();
    }
  }
  shiftImg(sft) {
    if (this.dist === null) {
      return;
    }
    this.imgIndex = (this.imgIndex + sft) % this.imgArr.length;
    if (this.imgIndex < 0) {
      this.imgIndex += this.imgArr.length;
    }
    this.dist.src = this.imgArr[this.imgIndex];
    if (this.legend.container && this.legend.className) {
      this.reflectLegend(this.imgIndex);
    }
  }
  shiftImgListener() {
    const that = this;
    if (this.sliderArrows.length === 0 || typeof this.sliderArrows === "undefined") {
      return;
    }
    for (let i = 0; i < this.sliderArrows.length; i++) {
      this.sliderArrows[i].addEventListener("click", function (e) {
        that.shiftImg(parseInt(e.target.dataset.sft));
      });
    }
  }
  // shiftLegendListener() {
  //   for (let i = 0; i < this.sliderArrows.length; i++) {
  //     this.sliderArrows[i].addEventListener("click", (e) => {
  //       this.container.querySelector(`.${this.legend.className}.selected`).classList.remove("selected");
  //       const unSelected = this.container.querySelector(`[data-index='${this.imgIndex}']`);
  //       if (unSelected) {
  //         unSelected.classList.add("selected");
  //       }
  //     });
  //   }
  // }
  displayImgIdx(idx) {
    this.imgIndex = idx;
    this.shiftImg(0);
  }
  createLegend(legendcontainer, className) {
    legendcontainer.innerHtml = ""; // :(
    let i = 0;
    let legendSymbol;
    this.imgArr.forEach(() => {
      legendSymbol = document.createElement("span");
      legendSymbol.classList.add(className);
      if (i === 0) {
        legendSymbol.classList.add("selected");
      }
      legendSymbol.setAttribute("data-index", i++);
      legendSymbol.addEventListener("click", (e) => {
        this.displayImgIdx(parseInt(e.target.dataset.index));
        this.container.querySelector(`.${className}.selected`).classList.remove("selected");
        e.target.classList.add("selected");
      });
      legendcontainer.appendChild(legendSymbol);
    });
  }
  startAutoSlideShow() {
    setInterval(() => this.shiftImg(1), 3000);
  }
  reflectLegend(idx) {
    const selected = this.container.querySelector(".selected[data-index]");
    const unSelected = this.container.querySelector(`[data-index='${idx}']`);
    if (selected) {
      selected.classList.remove("selected");
    }
    if (unSelected) {
      unSelected.classList.add("selected");
    }
  }
}
