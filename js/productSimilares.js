const productSimilar = [
  {
    img: "../assets/img/Consolas.svg",
    title: "Control XYZ",
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
];
const mostrarSimilar = (productos) => {
  const cards = document.getElementById("similares");
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

mostrarSimilar(productSimilar);
