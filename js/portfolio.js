const portfolio = document.getElementById("portfolio");
const images = [
  { src: "../img/1.png", alt: "Imagem 1" },
  { src: "../img/2.png", alt: "Imagem 2" },
  { src: "../img/3.png", alt: "Imagem 3" },
  { src: "../img/4.png", alt: "Imagem 4" },
  { src: "../img/5.png", alt: "Imagem 5" },
  { src: "../img/6.png", alt: "Imagem 6" },
  { src: "../img/7.png", alt: "Imagem 7" },
  { src: "../img/8.png", alt: "Imagem 8" },
  { src: "../img/9.png", alt: "Imagem 9" },
  { src: "../img/10.png", alt: "Imagem 10" },
  { src: "../img/11.png", alt: "Imagem 11" },
  { src: "../img/12.png", alt: "Imagem 12" },
  { src: "../img/13.png", alt: "Imagem 13" },
  { src: "../img/14.png", alt: "Imagem 14" },
  { src: "../img/15.png", alt: "Imagem 15" },
];
console.log(images);

images.forEach(function (image) {
  const div = document.createElement("div");
  const img = document.createElement("img");

  img.src = image.src;
  console.log(img.src);
  img.alt = image.alt;
  img.dataset.modalTarget = "#modal";

  div.appendChild(img);
  portfolio.appendChild(div);
});
