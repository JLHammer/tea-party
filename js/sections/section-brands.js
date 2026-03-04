import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionBrands() {
  const section = create("section", "bg-bg");

  const h2 = create("h2", "text-3xl text-primary ml-4 mb-4");
  h2.textContent = "Our Brands";

  const grid = create("div", "grid grid-cols-2 md:grid-cols-3 gap-2");
  const imgSrcs = [
    "./assets/images/Brands-Green.jpg",
    "./assets/images/Brands-Black.jpg",
    "./assets/images/Brands-White.jpg",
    "./assets/images/Brands-Rooibos.jpg",
    "./assets/images/Brands-Herbal.jpg",
    "./assets/images/Brands-Organic.jpg",
  ];

  imgSrcs.forEach((src) => {
    const img = create("img", "w-full h-full object-cover");
    img.src = src;
    set(img, grid);
  });

  set([h2, grid], section);
  return section;
}
