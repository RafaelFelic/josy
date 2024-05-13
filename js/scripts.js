// CAROUSEL
const TRANSITION_TIME = 800; // in milliseconds
const SLIDE_INTERVAL = 6000; // in milliseconds
const MOBILE_BREAKPOINT = 768; // in pixels

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Variables
  let slides = Array.from(document.querySelectorAll('#carousel img'));
  let dots = Array.from(document.querySelectorAll('.indicator-dot'));
  let currentIndex = 0;
  let interval;
  let transitioning = false;

  // Function to Show the Slide
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  // Function to Fade In the Slide
  function fadeInSlide(index) {
    slides[index].style.opacity = 0;
    showSlide(index);
    slides[index].style.transition = `opacity ${TRANSITION_TIME}ms`;
    setTimeout(() => {
      slides[index].style.opacity = 1;
      transitioning = false;
    }, 10);
  }

  // Function to Fade Out the Slide
  function fadeOutSlide(index) {
    slides[index].style.opacity = 0;
    slides[index].style.transition = `opacity ${TRANSITION_TIME}ms`;
  }

  // Function to Go to Next Slide
  function nextSlide() {
    if (transitioning) return;
    transitioning = true;
    fadeOutSlide(currentIndex);
    currentIndex = (currentIndex + 1) % slides.length;
    fadeInSlide(currentIndex);
  }

  // Function to Start Slide Show
  function startSlideShow() {
    interval = setInterval(nextSlide, SLIDE_INTERVAL);
  }

  // Function to Stop Slide Show
  function stopSlideShow() {
    clearInterval(interval);
  }

  // Event Listeners for Dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      fadeOutSlide(currentIndex);
      currentIndex = index;
      fadeInSlide(currentIndex);
      stopSlideShow();
      startSlideShow();
    });
  });

  // Event Listeners for Previous and Next Buttons
  document.getElementById('prev').addEventListener('click', () => {
    if (transitioning) return;
    transitioning = true;
    fadeOutSlide(currentIndex);
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    fadeInSlide(currentIndex);
    stopSlideShow();
    startSlideShow();
  });

  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    stopSlideShow();
    startSlideShow();
  });

  // Initialize Slide Show
  startSlideShow();

  // Mobile Touch Event
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    let images = document.querySelectorAll('.carousel-image');
    images.forEach((image) => {
      image.addEventListener('click', nextSlide);
    });
  }
});

// NAVBAR
// Selectors
const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const bodyElement = document.body;

// Toggle Menu Functionality
const toggleMenu = () => {
  // Toggle overflow style on the body element to prevent or allow scrolling
  bodyElement.style.overflow =
    bodyElement.style.overflow !== 'hidden' ? 'hidden' : '';

  // Toggle active class for menu button and mobile menu for open/close effect
  menuButton.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
};

// Event Listener for Menu Button Click
menuButton.addEventListener('click', toggleMenu);

// MODAL
let swiper = null;
const overlay = document.getElementById('overlay');
const closeModalButton = document.querySelector('[data-close-button]');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const modal = document.querySelector('.modal');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const images = document.querySelectorAll("[class^='img-thumb'] img");

openModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    swiperWrapper.innerHTML = ''; // Limpar imagens antigas, se houver

    const imageIndex = button.getAttribute('data-index'); // Obter o índice da imagem clicada

    const prevImages = Array.from(images).slice(0, imageIndex); // Imagens anteriores à imagem selecionada
    const nextImages = Array.from(images).slice(parseInt(imageIndex) + 1); // Imagens posteriores à imagem selecionada

    const allImages = [images[imageIndex], ...nextImages, ...prevImages]; // Concatenar as imagens na ordem correta

    allImages.forEach((img) => {
      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add('swiper-slide');
      const imgClone = img.cloneNode(true);
      imgClone.style.display = 'block'; // Garante que a imagem seja exibida corretamente
      swiperSlide.appendChild(imgClone);
      swiperWrapper.appendChild(swiperSlide);
    });

    modal.classList.add('active');
    overlay.classList.add('active');
    if (swiper) swiper.destroy(); // destrói a instância anterior se houver
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      swiper = new Swiper('.swiper-container', {
        // Configurações do Swiper
        direction: 'horizontal',
        loop: true, // Removido o loop contínuo
        spaceBetween: 10, // Espaçamento entre os slides em pixels
        effect: 'slide', // Efeito de transição
        speed: 200,
        navigation: false,
      });
    } else {
      swiper = new Swiper('.swiper-container', {
        // Configurações do Swiper
        direction: 'horizontal',
        loop: true, // Removido o loop contínuo
        effect: 'fade', // Efeito de transição
        fadeEffect: {
          crossFade: true, // Ativa o fade in/fade out
        },
        speed: 200,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  });
});

closeModalButton.addEventListener('click', () => {
  document.body.style.overflow = 'auto';
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

const swiperContainer = document.querySelector('.swiper-container');

swiperContainer.addEventListener('mousemove', function (event) {
  const target = event.target;
  const rect = swiperContainer.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element.

  if (
    target.classList.contains('swiper-button-prev') ||
    target.classList.contains('swiper-button-next')
  ) {
    // Se o mouse está sobre uma das setas, não alterar a opacidade
    return;
  }

  if (x < rect.width / 2) {
    document.querySelector('.swiper-button-prev').style.opacity = 1;
    document.querySelector('.swiper-button-next').style.opacity = 0;
  } else {
    document.querySelector('.swiper-button-next').style.opacity = 1;
    document.querySelector('.swiper-button-prev').style.opacity = 0;
  }
});

swiperContainer.addEventListener('mouseleave', function () {
  document.querySelector('.swiper-button-next').style.opacity = 0;
  document.querySelector('.swiper-button-prev').style.opacity = 0;
});

swiperContainer.addEventListener('click', function (event) {
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element.

  if (x < rect.width / 2) {
    swiper.slidePrev();
  } else {
    swiper.slideNext();
  }
});

document.querySelectorAll("[class^='img-thumb'] img").forEach((img) => {
  function onLoad() {
    img.classList.add('loaded');
  }

  if (img.complete) {
    onLoad();
  } else {
    img.addEventListener('load', onLoad);
  }
});
