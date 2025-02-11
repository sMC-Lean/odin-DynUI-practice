import beach1 from "./imgs/beaches/image-1.jpg";
import beach2 from "./imgs/beaches/image-2.jpg";
import beach3 from "./imgs/beaches/image-3.jpg";
import beach4 from "./imgs/beaches/image-4.jpg";
import beach5 from "./imgs/beaches/image-5.jpg";
import sunsets1 from "./imgs/sunsets/image-1.jpg";
import sunsets2 from "./imgs/sunsets/image-2.jpg";
import sunsets3 from "./imgs/sunsets/image-3.jpg";
import sunsets4 from "./imgs/sunsets/image-4.jpg";
import waterfalls1 from "./imgs/waterfalls/image-1.jpg";
import waterfalls2 from "./imgs/waterfalls/image-2.jpg";
import waterfalls3 from "./imgs/waterfalls/image-3.jpg";

const carouselContent = [
  { name: "waterfalls", images: [waterfalls1, waterfalls2, waterfalls3] },
  { name: "sunsets", images: [sunsets1, sunsets2, sunsets3, sunsets4] },
  {
    name: "beaches",
    images: [beach1, beach2, beach3, beach4, beach5],
  },
];

class carousel {
  constructor(parentContainer, contentIndex) {
    this.content = carouselContent[contentIndex];
    this.somewhatUniqueName =
      this.content.name + Math.floor(Math.random() * (10000 - 0) + 1) + 0;
    this.parentContainer = parentContainer;
    this.currSlide = 0;
    this.maxSlideIndex = this.content.images.length - 1;
    this.initCarousel();
    this.slides = document.querySelectorAll(`.${this.somewhatUniqueName}`);
  }

  #createContainer(className) {
    const container = document.createElement("div");
    container.classList.add(className);
    return container;
  }

  #goToSlide(slide) {
    this.slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  #nextSlide() {
    if (this.currSlide === this.maxSlideIndex) this.currSlide = 0;
    else {
      this.currSlide++;
    }
    this.#goToSlide(this.currSlide);
  }

  #prevSlide() {
    if (this.currSlide === 0) this.currSlide = this.maxSlideIndex;
    else {
      this.currSlide--;
    }
    this.#goToSlide(this.currSlide);
  }

  #createButton(direction) {
    const newButton = document.createElement("button");
    newButton.classList.add("carousel-btn");
    newButton.classList.add(
      `carousel-btn-${direction === "left" ? "left" : "right"}`
    );
    newButton.innerHTML = `${direction === "left" ? "&larr;" : "&rarr;"}`;
    if (newButton.classList.contains("carousel-btn-left")) {
      newButton.addEventListener("click", (e) => {
        this.#prevSlide.call(this);
      });
    } else {
      newButton.addEventListener("click", (e) => {
        this.#nextSlide.call(this);
      });
    }
    return newButton;
  }

  #addImagesToCarousel(container) {
    this.content.images.forEach((image, index) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide");
      slide.classList.add(this.somewhatUniqueName);
      const slideImage = document.createElement("img");
      slideImage.setAttribute("src", image);
      slide.appendChild(slideImage);
      container.appendChild(slide);
      slide.style.transform = `translateX(${100 * index}%)`;
    });
  }

  #createDots(container) {
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carousel-dots");
    container.appendChild(dotsContainer);
  }

  initCarousel() {
    const container = this.#createContainer("carousel-container");
    const leftButton = this.#createButton.call(this, "left");
    container.appendChild(leftButton);
    const rightButton = this.#createButton.call(this, "right");
    container.appendChild(rightButton);
    this.#addImagesToCarousel(container);
    this.#createDots(container);
    this.parentContainer.appendChild(container, "beforeend");
  }
}

export { carousel };

{
  /* <div class="carousel-container">
  <div class="carousel-slide"></div>
  <button class="carousel-btn carousel-btn-left">&larr;</button>
  <button class="carousel-btn carousel-btn-right">&rarr;</button>
  <div class="carousel-dots"></div>
</div>; */
}
