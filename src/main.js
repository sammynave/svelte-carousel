import { Carousel } from './index.js';

const target = document.getElementById('Carousel');

const carousel = new Carousel({
  target,
  data: {
    slides: Array.from(document.getElementById('Carousel').children)
  }
});

export default carousel;
