import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionAbout() {
  const section = create("section", "bg-bg");

  const h2 = create("h2", "mb-4 ml-4 text-brown");
  h2.textContent = "About Us";

  const grid = create("div", "grid gap-2 md:grid-cols-2");
  const imgSrcs = [
    "./assets/images/About-us-1.jpg",
    "./assets/images/About-us-2.jpg",
    "./assets/images/About-us-3.jpg",
    "./assets/images/About-us-4.jpg",
  ];
  const h3s = ["The Team", "The Brand", "The Company", "The Customers"];
  const h4s = [
    "Meet our dedicated team",
    "TeaParty brands and mixtures",
    "Company information and Mission",
    "About the Sippers and Dippers",
  ];

  for (let i = 0; i < imgSrcs.length; i++) {
    const div = create(
      "div",
      "group relative cursor-pointer transition-transform duration-300 hover:z-10 hover:scale-105",
    );
    const img = create("img");
    img.src = imgSrcs[i];
    set(img, div);

    const overlay = create(
      "div",
      "absolute inset-0 bg-[color-mix(in_srgb,var(--color-brown)_50%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
    );
    set(overlay, div);

    const h3 = create("h3", "absolute top-1/20 left-1/20 z-10 text-primary");
    h3.textContent = h3s[i];
    set(h3, div);
    const h4 = create("h4", "absolute top-2/9 left-1/20 z-10 text-bg");
    h4.textContent = h4s[i];
    set(h4, div);
    set(div, grid);
  }

  set([h2, grid], section);
  return section;
}
