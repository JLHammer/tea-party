import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionBrands() {
  const section = create("section", "bg-bg");

  const h2 = create("h2", "mb-4 ml-4 text-primary");
  h2.textContent = "Our Brands";

  const grid = create("div", "grid grid-cols-2 gap-2 md:grid-cols-3");
  const imgSrcs = [
    "./assets/images/Brands-Green.jpg",
    "./assets/images/Brands-Black.jpg",
    "./assets/images/Brands-White.jpg",
    "./assets/images/Brands-Rooibos.jpg",
    "./assets/images/Brands-Herbal.jpg",
    "./assets/images/Brands-Organic.jpg",
  ];

  imgSrcs.forEach((src) => {
    const img = create(
      "img",
      "h-full w-full cursor-pointer object-cover transition-all duration-300 hover:scale-[1.025] hover:rounded-md",
    );
    img.src = src;
    set(img, grid);
  });

  set([h2, grid], section);
  return section;
}
