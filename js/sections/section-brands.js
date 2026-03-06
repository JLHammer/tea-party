import brandsGreen from "../../assets/images/Brands-Green.jpg";
import brandsBlack from "../../assets/images/Brands-Black.jpg";
import brandsWhite from "../../assets/images/Brands-White.jpg";
import brandsRooibos from "../../assets/images/Brands-Rooibos.jpg";
import brandsHerbal from "../../assets/images/Brands-Herbal.jpg";
import brandsOrganic from "../../assets/images/Brands-Organic.jpg";

import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionBrands() {
  const section = create("section", "bg-bg");
  section.id = "brands";

  const h2 = create("h2", "mb-4 ml-4 text-primary");
  h2.textContent = "Our Brands";

  const grid = create("div", "grid grid-cols-2 gap-2 md:grid-cols-3");
  const imgSrcs = [
    brandsGreen,
    brandsBlack,
    brandsWhite,
    brandsRooibos,
    brandsHerbal,
    brandsOrganic,
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
