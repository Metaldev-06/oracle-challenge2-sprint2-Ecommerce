document.addEventListener("DOMContentLoaded", () => {
  mostrarAllProducts(allProducts);
});

const allProducts = [
  {
    img: "../assets/img/Skill-4.svg",
    title: "Producto XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Skill-5.svg",
    title: "Producto XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Skill.svg",
    title: "Producto XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Skill-1.svg",
    title: "Producto XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Skill-2.svg",
    title: "Producto XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Skill-3.svg",
    title: "Producto XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Consolas.svg",
    title: "Control XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Consolas-1.svg",
    title: "Control y consola XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Consolas-5.svg",
    title: "Consola XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Consolas-2.svg",
    title: "Control XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Consolas-3.svg",
    title: "Consola XYZ",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Consolas-4.svg",
    title: "Game Boy color",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Diversos.svg",
    title: "Camisa Atari",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Diversos-1.svg",
    title: "Camisa SNES",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Diversos-2.svg",
    title: "Sonic",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Diversos-3.svg",
    title: "Reloj",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Diversos-4.svg",
    title: "Sony VR",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
  {
    img: "../assets/img/Diversos-5.svg",
    title: "Pikachu",
    price: "$ 60,00",
    btn: "../pages/producto.html",
    categories: "star wars",
  },
];

const mostrarAllProducts = (productos) => {
  const cards = document.getElementById("allProducts");
  const templateCards = document.getElementById("productos").content;
  const fragment = document.createDocumentFragment();

  productos.map((item) => {
    const clone = templateCards.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.img);
    clone.getElementById("title").textContent = item.title;
    clone.getElementById("price").textContent = item.price;
    clone.getElementById("verProduct").setAttribute("href", item.btn);

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
